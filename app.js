const express = require('express');
const fs = require('fs');
var app = express();
const morgan = require('morgan');
var path = require('path');

var logger = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
app.use(morgan('combined', {stream: logger}))
app.use(morgan('combined'))

// shitty code for my old API

app.get('/', function (req, res) {
  res.sendFile("/home/omegalul/site/index.html")
});
app.get('/api', function (req, res) {
res.sendFile("/home/omegalul/site/api/index.html")
});
app.get('/docs', function (req, res) {
res.sendFile("/home/omegalul/site/docs/index.html")
});

app.use("/img", express.static(__dirname + '/img'));

app.get('/api/8ball/sfw', function (req, res) {
  var rContent = fs.readFileSync('./api/8ball/sfw/8ball-sfw.json').toString();
  var rArray = JSON.parse(rContent);
  var randomNum = Math.floor(Math.random() * rArray.length);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({ ballsfw: rArray[randomNum] }));
})

app.get('/api/8ball/nsfw', function (req, res) {
  var jContent = fs.readFileSync('./api/8ball/nsfw/8ball-nsfw.json').toString();
  var jArray = JSON.parse(jContent);
  var randomNum = Math.floor(Math.random() * jArray.length);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({ ballnsfw: jArray[randomNum] }));
})

app.get('/api/fbi', function (req, res) {
  var jContent = fs.readFileSync('./api/fbi/fbi.json').toString();
  var jArray = JSON.parse(jContent);
  var randomNum = Math.floor(Math.random() * jArray.length);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({ fbi: jArray[randomNum] }));
})
app.get('/api/pat', function (req, res) {
  var jContent = fs.readFileSync('./api/pat/pat.json').toString();
  var jArray = JSON.parse(jContent);
  var randomNum = Math.floor(Math.random() * jArray.length);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({ pat: jArray[randomNum] }));
})
app.get('/api/hug', function (req, res) {
  var jContent = fs.readFileSync('./api/hug/hug.json').toString();
  var jArray = JSON.parse(jContent);
  var randomNum = Math.floor(Math.random() * jArray.length);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.stringify({ hug: jArray[randomNum] }));
})
var http = require('http')
var https = require('https')



app.disable('etag');
app.disable('x-powered-by');

app.listen(80, () => {
  console.log('HTTPS server running on port 80');
});


// app.listen(8080) && console.log('Listening on port 8080!');
