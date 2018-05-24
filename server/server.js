// server.js

// first we import our dependencies…

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// and create our instances
const app = express();

// set our port to either a predetermined port number if you have set it up, or 3001
const API_PORT = process.env.API_PORT || 3001;

//db config
mongoose.connect('mongodb://admin:admin@ds159033.mlab.com:59033/foodblog-database');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use our router configuration when we call /api
// app.use('/api', router);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* POST AND GET FUNCTIONS */
const Schema = mongoose.Schema;

const BlogpostSchema = new Schema({
  author: String,
  data: String,
}, { timestamps: true });

let Blogpost = mongoose.model('Blogpost', BlogpostSchema);

app.get('/getposts', function(req, res, next) {
  Blogpost.find((err, posts) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, blogposts: posts });
  });
});

app.post('/addpost', function(req, res, next) {
  const post = new Blogpost();

  // body parser lets us use the req.body
  const { author, data } = req.body;

  if (!author || !data) {
    // we should throw an error. we can do this check on the front end
    return res.json({
      success: false,
      error: 'You must provide an author and data'
    });
  }

  post.author = author;
  post.data = data;

  post.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
