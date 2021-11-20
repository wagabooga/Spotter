/*
 * All routes querying home belong here
 */
// 1) require
const { response } = require("express");
const express = require("express");
const router = express.Router();

const queryNewSpot = (db, body) => {
  let query = `INSRT INTO spots (user_id, spotify_data, tweet_text, date_created, is_respot)
  VALUES ($1,$2,$3,$4,$5)`;

  return db
    .query(query, [
      // we need to first get the form that will give back these responses in the body
      body.user_id,
      body.spotify_data,
      body.tweet_text,
      body.date_created,
      body.is_respot
    ])
    .then((response) => {
      return response.rows;
    });
};


// 3) router endpoints
module.exports = (db) => {
  // .get "/" === localhost:8000/home/
  router.get("/", (req, res) => {
    res.send("homepage");
  });

  router.get("/new", (req, res) => {
    queryNewSpot(db, req.body)
      .then((data) => {
        res.send(data)
      })
      .catch((err) => { 
        res.status(500).json({ error: err.message });
      });
  });


  return router;
};


