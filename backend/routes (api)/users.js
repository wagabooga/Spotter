/*
All routes for Users are defined here (order)

-users/:id/followed_by (shows all the users who follow :id)
-users/:id/following (shows all the users :id follows)
-users/:id/spots (shows all the spots for user :id)
-users/:id (gets all info about user:id)
-users/create (post: posts info (email,date created) to insert into psql db)
*/

const express = require("express");
const router = express.Router();


const queryAllUsersFollowingUser = function (db, userID) {
  let query = `SELECT followed_by_id FROM follows WHERE follows_id = $1`;
  return db.query(query, [userID])
  .then((data) => {
    return data.rows;
  });
};

const queryAllUsersThatUserFollows = function (db, userID) {
  let query = `SELECT follows_id FROM follows WHERE followed_by_id = $1`;
  return db.query(query, [userID])
  .then((data) => {
    return data.rows;
  });
};


const queryAllSpotsForUser = function (db, userID) {
  let query = `SELECT * FROM spots WHERE user_id = $1`;
  return db.query(query, [userID])
  .then((data) => {
    return data.rows;
  });
};

const queryGetUserById = function (db, userID) {
  let query = `SELECT * FROM users WHERE id = $1`;
  return db.query(query, [userID])
  .then((data) => {
    return data.rows[0];
    });
  };
  
  const queryAddNewUser = function (db, email) {
    let query = `
    INSERT INTO users (email, date_created) 
    VALUES($1, current_timestamp) 
    RETURNING *`;
    return db.query(query, [email])
      .then((data) => {
        console.log("User created", data.rows[0])
        return data.rows[0].id;
      });
  };

  module.exports = (db) => {

  // users/:id/followed_by 
  router.get("/:id/followed_by", (req, res) => {
    queryGetUserById(db, req.params.id)
      .then((user) => {
        queryAllUsersFollowingUser(db, user.id)
          .then((data) => {
            res.json(data);
          })
          .catch((err) => {
            res.status(500).json({ error: err.message });
          });
      })
  });

  // users/following
  router.get("/:id/following", (req, res) => {
    queryGetUserById(db, req.params.id)
      .then((user) => {
        queryAllUsersThatUserFollows(db, user.id)
          .then((data) => {
            res.json(data);
          })
          .catch((err) => {
            res.status(500).json({ error: err.message });
          });
      })
  });

  // users/spots  
  router.get("/:id/spots", (req, res) => {
    queryGetUserById(db, req.params.id)
      .then((user) => {
        queryAllSpotsForUser(db, user.id)
          .then((data) => {
            res.json(data);
          })
          .catch((err) => {
            res.status(500).json({ error: err.message });
          });
      })
  });

  // users/:id
  router.get("/:id", (req, res) => {
    queryGetUserById(db, req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });



  // users/create
  router.post("/create", (req, res) => {
    queryAddNewUser(db, req.body.email)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  });


  return router;
};
