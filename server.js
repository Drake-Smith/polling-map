//express dependency, and initialize express
var express = require('express');
var app = express();

//dependencies
var d3 = require('d3');
var path = require('path');
var PORT = process.env.PORT || 3000;

//serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('data'));

//send public 
app.get('/', function(req, res) {
    res.sendFile('public/index.html');
});

//app listening on port 3000
app.listen(PORT, function() {
	console.log("App listening on Port " + PORT);
});