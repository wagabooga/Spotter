/*
 * All routes for redirecting back to front-end 
  localhost:8000/react
 */

const { response } = require("express");
const express = require("express");
const router = express.Router();

let tokenRedirecter = function (token, res) {
  if (token) {
    res.redirect("http://localhost:3000/home");
  } else {
    res.redirect("http://localhost:3000/landing");
  }
};

module.exports = () => {
  router.get("/", (req, res) => {
    tokenRedirecter(req.cookies.spotterToken, res);
  });

  router.get("/landing", (req, res) => {
    tokenRedirecter(req.cookies.spotterToken, res);
  });

  router.get("/home", (req, res) => {
    tokenRedirecter(req.cookies.spotterToken, res);
  });

  return router;
};
