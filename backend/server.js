var express = require('express');
var app = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var env = require('dotenv').config({path: '../.env'})
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

var cardSchema = new mongoose.Schema ({
  title: String,
  src: String,
  id: Number
});
var Card = mongoose.model("Card", cardSchema);

app.get("/", function (req, res){
  Card.find({}, function (err, cards){
    if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, cards: cards });
  });
});

app.listen(3002, console.log("running server"));
