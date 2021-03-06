var express = require('express');
var fs = require('fs');
var app = express();
var index = fs.readFileSync('index.html');
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(index.toString());
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
