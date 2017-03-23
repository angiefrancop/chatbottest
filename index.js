/*!
 * apiai
 * Copyright(c) 2015 http://api.ai/
 * Apache 2.0 Licensed
 */

'use strict';

var http = require('http');
// var apiai = require("../module/apiai");
var apiai = require("apiai");

var app = apiai("ed66e9aa07fb47e7a9becbea1ccb7ad5");

var options = {
    sessionId: '11111111'
};

var request = app.textRequest('Hello', options);

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();