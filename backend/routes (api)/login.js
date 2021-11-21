/*
 * All routes for login belong here
  localhost:8000/login
 */

const { response } = require("express");
const express = require("express");
const router = express.Router();


// router
module.exports = (spotifyApiWrapper) => {
  // redirect is for when we click on front end page, we send them to  localhost:8000/login/redirect to grab the code (step 1) auth code flow
  router.get("/redirect", (req, res) => {
    // console.log("redirecting.....", req.body) <--- alert? TODO:check back
    const spotifyLoginCredentials = {
      // incase client_id would need to seperate (or we could refactor with scopes)
      client_id: "2ba6a26f22d5402f89221cafec752d8b",
      url_body: "&response_type=code&redirect_uri=http://localhost:8000/login/code&scope=user-read-private%20user-read-email&state=some-state-of-my-choice&show_dialog=true"
    }
    // we are sending back to localhost:8000/login
    res.send(spotifyLoginCredentials)
  });


  // we get the code after the /redirect request
  router.get('/code', (req, res) => {
    console.log("req.query", req.query)
    const code = req.query.code
    // we update our spotifyApiWrapper (located in server.js and add our accesToken and refreshToken )
    spotifyApiWrapper
      .authorizationCodeGrant(code)
      // if data returns 200 setCredientials + cookie/local session jwt
      .then(data => {
        console.log("data:", data)
        spotifyApiWrapper.setCredentials({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token
        });
        // move data somewhere (db), .then(() => res.redirect )
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in
        })
      })
      .catch((err) => {
        console.log("err:", err)
        res.sendStatus(400)
      })
  })

  return router;
};


