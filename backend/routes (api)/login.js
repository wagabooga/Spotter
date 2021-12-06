/*
 * All routes for login belong here
  localhost:8000/login
 */

const { response } = require("express");
const express = require("express");
const router = express.Router();
const axios = require("axios");

const queryAmIRegistered = function (db, email) {
  let query = `SELECT * FROM users WHERE email = $1`;
  return db.query(query, [email]).then((data) => {
    return data.rows[0];
  });
};
// router
module.exports = (spotifyApiWrapper, db) => {
  // redirect is for when we click on front end page, we send them to  localhost:8000/login/redirect to grab the code (step 1) auth code flow
  router.get("/redirect", (req, res) => {
    // console.log("redirecting.....", req.body) <--- alert? TODO:check back
    const spotifyLoginCredentials = {
      // incase client_id would need to seperate (or we could refactor with scopes)
      client_id: "2ba6a26f22d5402f89221cafec752d8b",
      url_body:
        "&response_type=code&redirect_uri=http://localhost:8000/login/code&scope=user-read-private%20user-read-email%20app-remote-control%20streaming%20user-read-playback-state%20user-modify-playback-state%20user-library-modify%20user-library-read&state=some-state-of-my-choice&show_dialog=true",
    };
    // we are sending back to localhost:8000/login
    res.send(spotifyLoginCredentials);
  });

  // we get the code after the /redirect request
  router.get("/code", (req, res) => {
    const code = req.query.code;

    // we update our spotifyApiWrapper (located in server.js and add our accesToken and refreshToken )
    spotifyApiWrapper
      .authorizationCodeGrant(code)
      .then((data) => {
        spotifyApiWrapper.setCredentials({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
        });
        req.cookies.accessToken = data.body.access_token;
        res.cookie("accessToken", data.body.access_token);
        return spotifyApiWrapper.getMe();
      })
      .then(function (rsp) {
        req.cookies.email = rsp.body.email;

        if (!queryAmIRegistered) {
          return axios({
            method: "post",
            url: "http://localhost:8000/users/create",
            data: { email: rsp.body.email },
          });
        }
      })
      .then((id) => {
        req.cookies.user_id = id;
        return spotifyApiWrapper.getMyDevices();
      })
      .then((response) => {
        // res.cookie("device", response.body.devices[0].id);
        res.redirect(`http://localhost:3000/home`);
      })
      .catch((err) => {
        console.log("err:", err);
        res.sendStatus(400);
      });
  });
  return router;
};
