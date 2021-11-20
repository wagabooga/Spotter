/*
 * All routes querying home belong here
 */
// 1) require
const { response } = require("express");
const express = require("express");
const router = express.Router();


// 2) query
// const queryName = function (db, listing_id, msg_text, userIDcookie) {
//   let query = `INSERT INTO comments (user_id,listing_id,msg_text,date_created)
//   VALUES ($1,$2,$3,to_timestamp($4)) returning *`;
//   return db
//     .query(query, [userIDcookie, listing_id, msg_text, Date.now() / 1000])
//     .then((response) => {
//       return response.rows[0];
//     });
// };

// 3) router endpoints
module.exports = (db) => {
  // .get "/" === localhost:8000/home/
  router.get("/", (req, res) => {
    queryName(db)
    querySpots
    // .then((data) => {
    //   return data.rows
    // })
    res.send("homepage");
  });


  return router;
};


