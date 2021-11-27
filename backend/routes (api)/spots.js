/*
All routes for Users are defined here (order)

-spots/create (post: posts info (selectedSongData, and spot_text))
-spots/following (meant for homepage, query all the spots that were created from other users)
*/

const express = require("express");
const router = express.Router();



const queryCreateSpot = function (db, userID, spot_text, is_respot, spotify_json) {
  let query = `
  INSERT INTO spots (user_id, spot_text, date_created, is_respot, spotify_json) 
  VALUES($1, $2, current_timestamp, $3, $4) 
  RETURNING *`;
  return db.query(query, [userID, spot_text, is_respot, spotify_json])
    .then((data) => {
      console.log("Spot created", data.rows[0].id)
      return data.rows[0].id;
    });
};

const queryAllSpotsFromFollowing = function (db, userID) {
  let query = `SELECT * FROM spots WHERE user_id IN (SELECT follows_id FROM follows WHERE followed_by_id = $1) ORDER BY id DESC;`;
  return db.query(query, [userID])
  .then((data) => {
    return data.rows;
  });
};

// THIS IS DUPED FROM USERS: HELPER FUNCTION FILE?
const queryGetUserById = function (db, userID) {
  let query = `SELECT * FROM users WHERE id = $1`;
  return db.query(query, [userID])
  .then((data) => {
    return data.rows[0];
    });
  };

module.exports = (db) => {
  // spots/create
  router.post("/create", (req, res) => {
    console.log("Hit spots/create post endpoint")
    console.log("created spot with text:", req.body.spotTextValue, "song data:", req.body.selectedSongData)
    queryCreateSpot(db, 1, req.body.spotTextValue, false, req.body.selectedSongData)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });


  router.get("/:id/following", (req, res) => {
    queryGetUserById(db, req.params.id)
      .then((user) => {
        queryAllSpotsFromFollowing(db, user.id)
          .then((data) => {
            res.json(data);
          })
          .catch((err) => {
            res.status(500).json({ error: err.message });
          });
      })
  });
  return router;
};
