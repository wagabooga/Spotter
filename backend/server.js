// ------------------------- require -------------------------
require("dotenv").config();
const express = require('express')
// ------------------------- Web server config -------------------------
const app = express()
const port = process.env.PORT || 8000
const SpotifyWebApi = require('spotify-web-api-node');

// MH Note: Spotify is tricky
// const spotifyAPIRoutes = require("./routes (api)/spotify.js");
// app.use("/spotify", spotifyAPIRoutes(db));

app.get('/', (req, res) => {
  res.send('Hello World! from the backend. remember to use routes(api)[filename] path')
})



// /login will just be a button because i want ot keeep it simple
app.get('/login', (req, res) => {
  console.log("req.query", req.query)
  const code = req.query.code
  const spotifyApi = new SpotifyWebApi({
    clientId: '2ba6a26f22d5402f89221cafec752d8b',
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: 'http://localhost:8000/login'
  });
  

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      console.log("data:", data)
      // move this into the header before res.json
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
}),


  // Start Server
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })







// ------------------------- PG database client/connection setup -------------------------
// const cookieParser = require("cookie-parser"); // Note: (npm install cookieparser)
// const { Pool } = require("pg");
// const dbParams = require("./lib/db.js");
// const db = new Pool(dbParams);
// db.connect();