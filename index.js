 'use strict';


/*!
 * apiai
 * Copyright(c) 2015 http://api.ai/
 * Apache 2.0 Licensed
 */


// var express    = require("express");
// var app = express();
// var apiai = require('apiai');
// var app2 = apiai("ed66e9aa07fb47e7a9becbea1ccb7ad5");

// app.post("/",function(req,res){
//   var keyword = req.query.keyword;
//   console.log(keyword);

// var request = app2.textRequest('Hello.', {'sessionId': 123456});

//   request.on('response', function(response) {
//     console.log(response);
//     res.json(response);
//   });

//   request.on('error', function(error) {
//     console.log(error);

//   });
// });
// app.listen(3000);



// var util = require('util');
// // var apiai = require("../module/apiai");
// var apiai = require("apiai");

// var event = {
//     name: "network.connect",
//     data: {
//         param1: "param1 value",
//     }
// };

// var options = {
//     sessionId: '12345',
//     event:event
// };


// var app = apiai("ed66e9aa07fb47e7a9becbea1ccb7ad5", options);





// var request = app.eventRequest(event, options);

// request.on('response', function(response) {
//     console.log(util.inspect(response, false, null));
// });

// request.on('error', function(error) {
//     console.log(error);
// });

// request.end();



var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var apiai = require("apiai");
var api = apiai("ed66e9aa07fb47e7a9becbea1ccb7ad5");

app.post('/webhook', function(req, res) {
    console.log(req.param);
  // var user_id = req.param('id');
  // var token = req.param('token');
  // var geo = req.param('geo');  

  var options = {
    sessionId: '12345'
  };

  var event = {
    name: "custom_event",
    data: {
        name: "sam",
    }
  };
  
  //var request = api.textRequest('Chao', options);
  var request = api.eventRequest(event, options);

  request.on('response', function(response) {
      console.log(response);
      //res.json(response);
  });

  request.on('error', function(error) {
      console.log(error);
  });

  request.end();

  //res.send(user_id + ' ' + token + ' ' + geo);
});

// routes will go here

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

