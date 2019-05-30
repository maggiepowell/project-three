require('dotenv').config();
const path = require('path');
const express = require("express");
const app = express();
const sequelize = require("sequelize");
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Sets requests to use json and set req.body
const routes = require("./routes/apiRoutes")(app);
const PORT = process.env.PORT || 3001;
var db = require("./models");
var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);
connection.connect();
connection.end();

// Define middleware here

app.use('*', (req, res, next) => {
  console.log(req);
  next();
})

// Add routes, both API and view

var syncOptions = { force: true };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "./client/build")));
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});