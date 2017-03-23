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
    sessionId: 'f97ae12b-471d-40ea-9d2f-c4b14aa19fa3'
};

var request = app.textRequest('Hello', options);

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();