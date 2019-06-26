var express = require("express");
var router = express.Router();
var helpers = require("./helpers/auth.helpers");
var models = require("../../models");
// var jwt = require('jsonwebtoken');

router.post("/register", function (req, res) {
    //validate required fields from registration page
    // if (!req.body.username || !req.body.password || !req.body.email) {
    //     // return res.status(400).json(alert("You did not enter a username, password, or email"));
    //     return res.status(400).json({ msg: new Error("Please put all data on body") });
    // }

   
    //generate the userid
    // var userid = helpers.getUserID();

    // var user = {
    //     username: req.body.username,
    //     dob: req.body.dob,
    //     email: req.body.email,
    //     //generate the user's salt
    //     salt: helpers.getSalt(),
    //     userid: userid,
    //     isConfirmed: false
    // };
    // console.log(user)
    // user.hash = helpers.getHash(user.salt, req.body.password);

    // models.User.create(user)

    //     .then(function (resp) {
    //         res.json({ resp, msg: "User Created" })

            //connect to firebase here for chat functionality
        
        // })
        // .catch(function (err) {
        //     res.status(400).json({ msg: err.toString() });
        // })
        //else
})

router.post("/login", function (req, res) {
    // if (!req.body.password || !req.body.email) {
    //     return res.status(400).json({ msg: new Error("Email and Password are required.") });
    // }
    // console.log(req.body)

    // models.User.findOne({
    //     where: {
    //         email: req.body.email
    //     }
    // })
    //     .then(function (resp) {
    //         if (helpers.checkIfValidPass(resp, req.body.password)) {
    //             var expiry = new Date();
                // expiry.setDate(expiry.getDate() + 7);
                // res.json({
                    //set the token's payload values
            //         token: jwt.sign({
            //             exp: parseInt(expiry.getTime() / 1000),
            //             //instead of resp.id use userid
            //             userID: resp.id,
            //             username: resp.username,
            //             email: resp.email
            //         }, process.env.JWT_SECRET)
            //     });
            // }
            // else {
        //         throw new Error("Username and/or Password are incorrect");

        //     }
        // })
        // .catch(function (err) {
        //     res.status(400).json({ msg: err.toString() });

        // })
}
)

module.exports = router;