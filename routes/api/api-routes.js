// API Routes
// =================
//Dependencies
const express = require("express");
const router = express.Router();
const models = require("../../models");
const { check, validationResult } = require('express-validator');
const url = require('../../config/url')


//GET
router.get('/server/port', function (req, res) {
  res.send({port: process.env.port, url: url.url})
  // console.log(process.env.port)
})

router.post("/user", function (req, res) {
  // console.log(req.body.email)

  models.User.findOne({
    where:
      { email: req.body.email }

  })
    .then(function (dbUser) {
      // console.log(dbUser)
      res.json(dbUser);
    });
})

//POST
//update the db with profile info
router.post("/updateuser", [
  //validate required fields from profile page
  check('email', 'Email mismatch.').not().isEmpty().isEmail().normalizeEmail(),
  check('state', 'State Does Not Meet Requirements').trim().escape().matches(/(^$)|^[a-zA-Z]{0,2}$/),
  check('address', 'Address Does Not Meet Requirements').escape().matches(/(^$)|^[#.0-9a-zA-Z\s,-]+$]{0,96}$/),
  check('city', 'City Does Not Meet Requirements').escape().matches(/(^$)|^[a-zA-Z\s,-]+$]{0,48}$/),
  check('zip', 'Zip Does Not Meet Requirements').escape().matches(/(^$)|^[0-9-]+$]{0,10}$/),
  check('firstName', 'First Name Does Not Meet Requirements').escape().matches(/(^$)|^[.a-zA-Z\s-]+$]{0,20}$/),
  check('lastName', 'Last Name Does Not Meet Requirements').escape().matches(/(^$)|^[.a-zA-Z\s-]+$]{0,32}$/),
  check('phone', 'Phone Number Does Not Meet Requirements').escape().matches(/(^$)|^[0-9-]+$]{0,10}$/),
  check('bio', 'Bio Does Not Meet Requirements').escape().matches(/(^$)|^[#@%*()+=.0-9a-zA-Z\s,-]+$]{0,96}$/)
],
  function (req, res) {
    //store user registration errors, if they exist
    const errors = validationResult(req);
    // console.log(req.body);

    //if there are reg errors send them back to the client
    if (!errors.isEmpty()) {
      // console.log(errors);

      const hasError = true;
      return res.jsonp({ e: errors.array({ onlyFirstError: true }), hasE: hasError });

      //if no reg errors create the user account
    } else {
      const hasError = false;
      // console.log(errors);
      const userid = req.body.userid;
      const email = req.body.email;

      // console.log(req.body)

      models.User.update({
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        phone_number: req.body.phone,
        lastname: req.body.lastName,
        firstname: req.body.firstName,
        bio: req.body.bio
      }, {
          where: {
            email: req.body.email
          }
        }).then(function (results) {
          // console.log(results)
          res.json(results);

        })
    }
  });
//chat option
// router.get("/chat/:userid/", function (req, res) {
// })

module.exports = router;