var express = require('express');
var router = express.Router();
var path = require('path');
const sql = require('../utils/sql');
var auth = require('../config/mailcreds');
var mailer = require('nodemailer');

// set up the nodemailer stuff
const transporter = mailer.createTransport({
	service: 'gmail',
	auth: {
		user: auth.user,
		pass: auth.pass
	}
});


router.post('/mail', (req, res) => {
	console.log('hit mail route');
	console.log('body: ', req.body);

	// get the mail options from the form -> the url params using bodyParser middleware

	const mailOptions = {
		from: req.body.usermail,
		to: auth.user,
		replyTo: req.body.usermail,
		subject: `From portfolio site: Subject = ${req.body.subject || 'none'}`, // Subject line
		text: req.body.message
	};

	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log("failed... ", err);
			res.json(err);
		} else {
			console.log("success! ", info);
			res.json(info);
		}
	});
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
