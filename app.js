"use strict";

var express = require('express');

var app = express();

/* Include the app engine handlers to respond to start, stop, and health checks. */
app.use(require('./lib/appengine-handlers'));


// [START hello_world]
/* Say hello! */
app.get('/', function(req, res) {
  res.status(200).send("Hello, world!");
});
// [END hello_world]

// [START server]
/* Start the server */
var server = app.listen(process.env.PORT || '8080', '0.0.0.0', function() {
  console.log('App listening at http://%s:%s', server.address().address, server.address().port);
  console.log("Press Ctrl+C to quit.");
});
