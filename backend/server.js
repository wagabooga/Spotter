// ------------------------- require -------------------------
// require("dotenv").config();

// ------------------------- Web server config -------------------------
const express = require('express')
const app = express()
const port = process.env.PORT || 8000
// const cookieParser = require("cookie-parser"); // Note: (npm install cookieparser)

// ------------------------- PG database client/connection setup -------------------------
// const { Pool } = require("pg");
// const dbParams = require("./lib/db.js");
// const db = new Pool(dbParams);
// db.connect();


// ------------------------- require routes (resources) -------------------------
const indexRoutes = require("./routes/templates/index");


// ------------------------- use routes -------------------------
app.use("/api/favourites", favouriteAPIRoutes(db));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Start Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})