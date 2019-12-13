var express = require('express');
var router = express.Router();
var path = require('path');
const sql = require('../utils/sql');
var auth = require('../config/mailcreds');
var mailer = require('nodemailer');
const connect = require('../utils/sql');

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
	})
});

/* GET home page. */
router.get('/', (req, res, next) => {
  //res.render('index', { title: 'Express' });
  
// get the connection via the connection pool, and then run the query -> just one added step
connect.getConnection((err, connection) => {
	
	if (err) { return console.log(err.message); }

	let query = `SELECT * FROM tbl_work`;
	
	connect.query(query, (err, result) => {
		connection.release(); // send this connection back to the pool

		if (err) {
			// will exit the function and log the error
			return console.log(err.message);
		}

		console.log(result); // this should be your database query result

		// render our page
		res.render('home', {art: result });
		res.render('index');
		res.render('layout');
		 // whatever page and data you're rendering
	});
});

  console.log('sent back a static file');

  res.sendFile((path.join(__dirname, "../views/index.html")));
});

router.get('/portfolioData/:target', (req, res) => {

	connect.getConnection((err, connection) => {
	
		if (err) { return console.log(err.message); }
	
		let query = `SELECT * FROM tbl_work WHERE ID="${req.params.target}"`;
		
		connect.query(query, (err, result) => {
			connection.release(); // send this connection back to the pool
	
			if (err) {
				// will exit the function and log the error
				return console.log(err.message);
			}
	
			console.log(result); // this should be your database query result
	
			// render our page
			res.render('home', {art: result });
			res.render('index');
			res.render('layout');
			 // whatever page and data you're rendering
		});
	});
});

module.exports = router;
