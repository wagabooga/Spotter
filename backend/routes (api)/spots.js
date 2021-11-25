/*
All routes for Users are defined here (order)

-spots/create (post: posts info (selectedSongData, and spot_text))
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


module.exports = (db) => {
  // users/create
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


  return router;
};
