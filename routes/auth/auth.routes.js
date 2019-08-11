// Authentication Routes
// =================
//Dependencies
const express = require("express");
const router = express.Router();
const async = require('async');
const emailer = process.env.MAILER_EMAIL_ID;
const { check, validationResult } = require('express-validator');
const helpers = require("./helpers/auth.helpers");
const models = require("../../models");
const jwt = require('jsonwebtoken'); //jwt-express?
const smtpTransport = require('../../controllers/nmController');

//POST
router.post("/register", [
    //validate required fields from registration page
    check('email', 'Email address must be formatted correctly.').not().isEmpty().isEmail().normalizeEmail(),
    check('username', 'Username Does Not Meet Requirements').escape().matches(/(^$)|^[.0-9a-zA-Z\s-]+$]{0,8}$/),
    //Password: min 5 char, max 24. one uppercase. one lower case. one special character. @#*!$%+=()
    check('password', 'Password does not meet the requirements.').not().isEmpty().trim().escape().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#*!$%+=()])[0-9a-zA-Z@#*!$%+=()]{5,24}$/, "i"),
    check('verifyPassword', 'Passwords do not match').custom((value, { req }) => (value === req.body.password)),
    check('dob', 'DoB requires 2 digit day and 2 digit month - use dash to separate - year is optional').not().isEmpty().trim().escape().matches(/^(?=.*[-])(?=.*[0-9])[0-9/-]{5,10}$/)
],
    function (req, res) {
        //store user registration errors, if they exist
        const errors = validationResult(req);
        // console.log(req.body);

        //if there are reg errors send them back to the client
        if (!errors.isEmpty()) {
            // console.log(errors);

            const hasError = true;
            return res.jsonp({ e: errors.array(), hasE: hasError });

            //if no reg errors create the user account
        } else {
            const hasError = false;
            // console.log(errors);

            models.User.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then(function (resp) {
                    //if email doesn't exist, create
                    if (resp === null) {

                        //generate the userid
                        var userid = helpers.getUserID();
                        //create the user obj
                        var user = {
                            username: req.body.username,
                            dob: req.body.dob,
                            email: req.body.email,
                            //generate the user's salt
                            salt: helpers.getSalt(),
                            userid: userid,
                            isConfirmed: false
                        };
                        // console.log(user)

                        // generate the user's hash based on their salt and password
                        user.hash = helpers.getHash(user.salt, req.body.password);
                        //create the user account in mysql
                        models.User.create(user)

                            .then(function (resp) {
                                res.json({ resp, message: "A confirmation email has been sent.", hasError })

                                //add firebase/mongo connection here for chat functionality

                            })
                            .catch(function (err) {
                                return res.json({ message: 'General creation error: Cannot create user.' });
                            })

                    } else {
                        return res.json({ message: 'Account exists. Use forgot password link to reset.' });

                    }

                })

        }

    })

router.post("/login", [
    //validate required fields from registration page
    check('email', 'Username or password is incorrect.').not().isEmpty().isEmail().normalizeEmail(),
    //Password: min 5 char, max 24. one uppercase. one lower case. one special character. @#*!$%+=()
    check('password', 'Username or password is incorrect.').not().isEmpty().trim().escape().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#*!$%+=()])[0-9a-zA-Z@#*!$%+=()]{5,24}$/, "i"),
],
    function (req, res) {
        const errors = validationResult(req);
        // console.log(req.body);
        // console.log(errors);

        if (!errors.isEmpty()) {
            // console.log(errors);
            const hasError = true;
            return res.jsonp({ e: errors.array(), hasE: hasError });

            //if no reg errors log user in
        } else {
            const hasError = false;
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
                            //set the token's payload values
                            token: jwt.sign({
                                exp: parseInt(expiry.getTime() / 1000),
                                //instead of resp.id use userid
                                userID: resp.userid,
                                username: resp.username,
                                email: resp.email
                            }, process.env.JWT_SECRET)
                        });
                    }
                    else {
                        return res.json({ message: 'Your username or password is incorrect.' });

                    }
                })
                .catch(function (err) {
                    res.json({ message: err });

                })
        }
    })


router.post('/forgot_password', [
    //validate required fields from forgot password page
    check('email', 'Email address must be formatted correctly.').not().isEmpty().isEmail().normalizeEmail()
]
    , function (req, res) {
        const errors = validationResult(req);
        // console.log(req.body);
        // console.log(errors);

        if (!errors.isEmpty()) {
            // console.log(errors);
            const hasError = true;
            return res.jsonp({ e: errors.array(), hasE: hasError });

            //if no errors send password reset
        } else {
            const hasError = false;

            //start an asynch waterfall
            async.waterfall([
                function (done) {

                    //find the email address of the forgot user in db
                    models.User.findOne({
                        where: {
                            email: req.body.email
                        }
                    }).then(function (resp, err) {
                        // console.log(resp);

                        //if found, store the user info
                        if (resp) {
                            const user = resp.dataValues;
                            // console.log(user);

                            //end this stage
                            done(err, user);

                            //if that email address isnt found return message
                        } else {
                            return res.json({ message: 'Email address not found.' });
                        };
                    })
                },
                function (user, done, err) {
                    //generate the forgot user token
                    const token = helpers.forgotpassToken()
                    //console.log(token, user.email);

                    //update the new token and expiration to the user record in db
                    models.User.update({
                        reset_password_token: token,
                        reset_password_expires: Date.now() + 86400000
                    }, {
                            where: {
                                email: user.email
                            }
                        }).then(done(err, user, token))
                },
                function (user, token, done, err) {
                    // console.log(token, user);

                    //create the email data object for the nodemailer transport
                    const data = {
                        to: user.email,
                        from: emailer,
                        subject: 'Password help has arrived!',
                        html: '<b>Password Reset Link</b><br><br><a href="http://localhost:3000/new-pass?token=' + token + '&forgotemail=' + user.email + '">Link to Reset</a>',
                    }

                    //method to send email to the forgot user
                    smtpTransport.sendMail(data, function (err) {
                        //if no issues, send link
                        if (!err) {
                            return res.json({ message: 'A reset password link has been sent to your email address. The link will be good for 24 hours.' });
                            //otherwise send back an error message
                        } else {
                            return res.json({ message: err });
                        }
                    });

                }
            ], //catch any errors that happen outside of the waterfall array
                function (err) {
                    return res.json({ message: err });
                });
        }
    })

router.post('/reset_password', [
    //validate required fields from reset password page
    check('newpass', 'Password does not meet the requirements.').not().isEmpty().trim().escape().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#*!$%+=()])[0-9a-zA-Z@#*!$%+=()]{5,24}$/, "i"),
    check('newPassVerify', 'Passwords do not match').custom((value, { req }) => (value === req.body.newpass)),
]
    , function (req, res) {
        const errors = validationResult(req);
        // console.log(req.body);
        // console.log(errors);

        if (!errors.isEmpty()) {
            // console.log(errors);
            const hasError = true;
            return res.jsonp({ e: errors.array(), hasE: hasError });

            //if no reg errors start password reset
        } else {
            const hasError = false;

            //declare individual vars from forgot user's email link and new password
            const forgotToken = req.body.token;
            const forgotEmail = req.body.forgotemail;
            const newPass = req.body.newpass;
            let expired = false;

            //validates all required info
            if (forgotEmail && forgotToken && newPass) {
                // console.log(forgotToken, forgotEmail, newPass);

                //find the user record in the db
                models.User.findOne({
                    where: {
                        email: forgotEmail
                    }
                })
                    .then(function (resp, err) {
                        //set current time
                        const time = Date.now();
                        let user = resp;
                        //makes sure there is an user record returned by the forgot users email
                        if (!user) {
                            return res.json({
                                message: 'Incorrect parameter'
                            })
                        }
                        //check if the token has expired
                        if (time > user.reset_password_expires) {
                            expired = true;
                            models.User.update({
                                reset_password_token: "",
                                reset_password_expires: ""
                            }, {
                                    where: {
                                        reset_password_token: forgotToken
                                    }
                                }).then(function () {

                                    return res.json({
                                        message: 'Your token has expired.'

                                    })
                                })
                        }
                        // console.log(user)

                        //validates the forgot token and new password exist and no errors
                        if (!err && forgotToken && newPass && time < user.reset_password_expires) {
                            //set the response to user var
                            user = user.dataValues;
                            // console.log(user)

                            //create a new hash using the existing users salt
                            const newhash = helpers.getHash(user.salt, newPass);

                            //update new hash and remove the existing token and expiration
                            models.User.update({
                                hash: newhash,
                                reset_password_token: "",
                                reset_password_expires: ""
                            }, {
                                    where: {
                                        reset_password_token: forgotToken
                                    }
                                })
                        }
                    }).then(function () {
                        // console.log(expired)
                        if (!expired) {
                            //create object for the password reset confirmation
                            const data = {
                                to: forgotEmail,
                                from: emailer,
                                subject: 'Password Reset Confirmation',
                                html: 'Your Tournament Zilch password has been reset.'
                            }

                            //send the password reset confirmation email
                            smtpTransport.sendMail(data, function (err) {
                                if (!err) {

                                    return res.json({
                                        message: 'Your password has been reset.'
                                    });

                                } else {
                                    return res.json({
                                        message: 'An error was returned during email confirmation.'
                                    });
                                }
                            })
                        }
                    })

                //make sure all info is in the URL
            } else {
                return res.json({
                    message: 'Required submission info missing.'
                });
            }


        }
    })


module.exports = router;