const nodemailer = require('nodemailer');
const emailer = process.env.MAILER_EMAIL_ID;
const passw = process.env.MAILER_PASSWORD;
const mailhost = process.env.MAILER_HOST;
const mailport = process.env.MAILER_PORT;

/**
 * Nodemailer Controller
 */

module.exports = nodemailer.createTransport({
  host: mailhost,
  port: mailport,
  secure: false,
  auth: {
    user: emailer,
    pass: passw
  }
});





