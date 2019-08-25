//Dependencies
//=====================
require("dotenv").config();
const express = require("express");
const jwt = require('express-jwt');
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3001;
process.env.port = PORT;
const app = express();
const models = require("./models");
const routes = require("./routes");


var auth = jwt({
  secret: process.env.JWT_SECRET,
  getToken: function fromHeaderOrQuerystring (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.cookies.token) {
      return req.cookies.token;
    }
    return null;
  }
});


// Define middleware here
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Routes
//===================================
app.use(routes);


// Start the server
//===================
const syncOptions = { force: false };


// In test, set syncOptions.force to true

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

models.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});

module.exports = app;
