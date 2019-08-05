const express = require("express");
const router = express.Router();
const helpers = require("./helpers/auth.helpers");
const models = require("../../models");
const jwt = require('jsonwebtoken');


router.post("/register", function (req, res) {
    //generate the userid
    const userid = helpers.getUserID();

    var user = {
        username: req.body.username,
        dob: req.body.dob,
        email: req.body.email,
        //generate the user's salt
        salt: helpers.getSalt(),
        userid: userid,
        isConfirmed: false
    };
    console.log(user)
    user.hash = helpers.getHash(user.salt, req.body.password);

    models.User.create(user)

        .then(function (resp) {
            return res.json({ message: "User Created" })
        
        })
        .catch(function (err) {
            return res.json({ message: "Creation Error" })
        })
})

router.post("/login", function (req, res) {

    console.log(req.body)

    models.User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(function (resp) {
            if (helpers.checkIfValidPass(resp, req.body.password)) {
                var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    res.json({
    // set the token's payload values
            token: jwt.sign({
                exp: parseInt(expiry.getTime() / 1000),
                //instead of resp.id use userid
                userID: resp.id,
                username: resp.username,
                email: resp.email
            }, process.env.JWT_SECRET)
        });
    }
    else {
            throw new Error("Username and/or Password are incorrect");

        }
    })
    .catch(function (err) {
        res.status(400).json({ msg: err.toString() });

    })
}
)

module.exports = router;