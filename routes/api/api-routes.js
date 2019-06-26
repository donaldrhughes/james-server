const express = require("express");
const router = express.Router();
var db = require("../../models");


// Routes
// =================








//GET
// router.post("/user", function(req, res) {
//   console.log(req.body.email)
//   db.User.findOne({ where: 
//     { email: req.body.email }
    
//   })
//     .then(function (dbUser) {
//       console.log(dbUser)
//      res.json(dbUser);
//     });
// })

// //update the db to devoured true
// router.post("/updateuser", function (req, res) {
//   // console.log(req.body)
//   db.User.update({
//     address: req.body.profileObj.address,
//     city: req.body.profileObj.city,
//     state: req.body.profileObj.state,
//     zip: req.body.profileObj.zip,
//     phone_number: req.body.profileObj.phone,
//     lastname: req.body.profileObj.lastName,
//     firstname: req.body.profileObj.firstName,
//     bio: req.body.profileObj.bio
//   }, {
//       where: {
//       email: req.body.profileObj.email
//       }
//     }).then(function (results) {
//       console.log(results)
//       res.json(results);
      
//     })
  
// });








module.exports = router;