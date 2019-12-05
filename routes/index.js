var express = require('express');
var router = express.Router();
var path = require('path');
const sql = require('../utils/sql');
const nodemailer = require('nodemailer');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;


// POST route from contact form
app.post('/contact', (req, res) => {

  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: 'sarahcway9@gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  })

  // Specify what the email will look like
  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: GMAIL_USER,
    subject: 'New message from contact form at sarahconway.ca',
    text: `${req.body.fname} (${req.body.email}) says: ${req.body.message}`
  }

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.render('contact-failure') // Show a page indicating failure
    }
    else {
      res.render('contact-success') // Show a page indicating success
    }
  })
})



/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log('sent back a static file');
  res.sendFile((path.join(__dirname, "../views/index.html")));
});

router.get('/portfolioData/:target', (req, res) => {
  // here is where we set up the query 
  let query = `SELECT * FROM tbl_work WHERE id="${req.params.target}"`;

  sql.query(query, (err, result) => {
    if (err) {console.log(err);} //something done broke

    console.log(result); //this should be the database now

    res.json(result[0]); //send that row back to the calling function <3
  })
})

module.exports = router;
