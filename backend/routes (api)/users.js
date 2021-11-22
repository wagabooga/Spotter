/*
  All routes for Users are defined here (order)

  -users/followed_by (shows all the followed by from current user)
  -users/following (shows all the users logged in user follows)
  -users/spots (shows all the spots for a user)

 */

const express = require("express");
const router = express.Router();



const queryAllUsersFollowingCurrentUser = function (db, userID) {
  let query = `SELECT * FROM follows WHERE follows_id = $1`;
  return db.query(query, [userID])
    .then((data) => {
      return data.rows;
    });
};

const queryAllUsersIFollow = function (db, userID) {
  let query = `SELECT * FROM follows WHERE followed_by_id = $1`;
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


module.exports = (db) => {

  // users/followed_by 
  router.get("/followed_by", (req, res) => {
    // change 1 to be logged in user
    queryAllUsersFollowingCurrentUser(db, 1)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // users/following
  router.get("/following", (req, res) => {
    // change 1 to be logged in user
    queryAllUsersIFollow(db, 1)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // users/spots  
  router.get("/spots", (req, res) => {
    // change 1 to be logged in user
    queryAllSpotsForUser(db, 1)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  
  router.post("/login", (req, res) => {
    queryCheckInputEmailForUserID(db, req.body.email)
      .then((userID) => {
        res.cookie("userID", userID.id);
        res.cookie("email", userID.email);
        res.redirect("/");
      })
      .catch((error) => {
        console.log(error);
        res.send(error);
      });
  });



  return router;
};
