// ------------------------- require -------------------------
require("dotenv").config();
const express = require('express')
// ------------------------- Web server config -------------------------
const app = express()
const port = process.env.PORT || 8000
const SpotifyWebApi = require('spotify-web-api-node');
const morgan = require("morgan")
const cors = require("cors");
const cookieParser = require('cookie-parser')
const session = require('cookie-session')
const bodyParser = require('body-parser')

// DO NOT DELETE THIS LINE OF CODE PLEASE IT IS VERY IMPORTANT::::::::::::: DO NOT DELETE
app.use(session({ name: 'spotterToken' , keys: ['1','2','3']}));

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// ------------------------- db config -------------------------
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);

db.connect(() => {
  console.log("Connected to database")
});

// ------------------------- Spotify web api node -------------------------
// https://github.com/thelinmichael/spotify-web-api-node <--- read me for questions about spotifyApiWrapper (in the post they have it as spotifyApi)
const spotifyApiWrapper = new SpotifyWebApi({
  clientId: '2ba6a26f22d5402f89221cafec752d8b',
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: 'http://localhost:8000/login/code'
});



app.get('/', (req, res) => {
  res.send('Hello World! from the backend. remember to use routes(api)[filename] path')
})
app.get('/', (req, res) => {
  res.redirect('/react/')
})
app.get('/landing', (req, res) => {
  res.redirect('/react/landing')
})
app.get('/home', (req, res) => {
  res.redirect('/react/home')
})
// ------------------------- routes -------------------------
const homeRoutes = require("./routes (api)/home.js");
app.use("/home", homeRoutes());

const loginRoutes = require("./routes (api)/login.js");
app.use("/login", loginRoutes(spotifyApiWrapper));

const spotifyRoutes = require("./routes (api)/spotify.js");
app.use("/spotify", spotifyRoutes(spotifyApiWrapper));

const userRoutes = require("./routes (api)/users.js");
app.use("/users", userRoutes(db));


const reactRoutes = require("./frontendRoutes/react.js");
app.use("/react", reactRoutes());





// ------------------------- Start Server -------------------------
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})







// ------------------------- LOGIN -------------------------
// tinyapp/express_server.js

