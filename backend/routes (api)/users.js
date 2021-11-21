/*
  All routes for Users are defined here

 */

const express = require("express");
const router = express.Router();

// MH Note: Boilerplate for queries
// -------------------------------------
// const queryTable = function (db) {
//   let query = `SELECT * FROM table WHERE table.id = $1`;
//   return db.query(query, [$1 <-- this as a variable (what you want the $1 to be)])
//    .then((data) => {
//     return data.rows;
//   });
// };
// -------------------------------------
// module.exports = (db) => {
//   router.get("/", (req, res) => {
//     queryTable(db)
//       .then((data) => {
//         res.json(data);
//       })
//       .catch((err) => {
//         res.status(500).json({ error: err.message });
//       });
//   });
//   return router;
// };
// -------------------------------------