/*
  All routes for Users are defined here (order)

  -users/:id/followed_by (shows all the users who follow :id)
  -users/:id/following (shows all the users :id follows)
  -users/:id/spots (shows all the spots for user :id)
  -users/:id (gets all info about user:id)
  -users/:id (gets all info about user:id)
 */

const express = require("express");
const router = express.Router();

// if we need to access current user's id, we first must look them up in the db via their email provided via cookie
const queryGetMyIdWithEmail = function (db, email) {
  let query = `SELECT id FROM users WHERE email = $1`;
  return db.query(query, [email])
    .then((data) => {
      return data.rows;
    });
};

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

  // broke
  router.get("/my_id", (req, res) => {
    queryGetUserById(db, req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // users/my_id
  // router.get("/my_id", (req, res) => {
  //   queryGetMyIdWithEmail(db, req.params.email)
  //     .then((data) => {
  //       res.json(data);
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ error: err.message });
  //     });
  // });

  // users/create
  // router.post("/create", (req, res) => {

  // });


  return router;
};
