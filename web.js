var express = require('express');
var fs = require('fs');

var html = fs.readFileSync('./index.html');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(Buffer.toString(html));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
