
var env     = require('node-env-file'),
    flag    = require('node-env-flag'),
    fs      = require('fs'),
    express = require('express');

// var worker = require('./worker');

var envPath = __dirname + '/.env.' + process.env.NODE_RUN_ENV;

if(fs.existsSync(envPath)){
	env(envPath);
}

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world...\n');
});

app.get('/test', function (req, res) {
  res.send('Testing, testing, 1 2 3...\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
