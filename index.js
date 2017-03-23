var express    = require("express");
var app = express();
var apiai = require('apiai');
 
var app2 = apiai("ed66e9aa07fb47e7a9becbea1ccb7ad5");

app.post("/",function(req,res){
  var keyword = req.query.keyword;
  console.log(keyword);

  var request = app2.textRequest('Hello.', {'sessionId': 123456});

  request.on('response', function(response) {
    console.log(response);
    res.json(response);
  });

  request.on('error', function(error) {
    console.log(error);

  });
});
app.listen(3000);