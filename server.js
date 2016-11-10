var express = require('express');
var app = express();

var d3 = require('d3');
var path = require('path');
var PORT = process.env.PORT || 3000;

//app.use(express.static(process.cwd() + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('data'));



app.get('/', function(req, res) {
    //res.sendFile(path.join(__dirname+'/index.html'));
    res.sendFile('public/index.html');
});

app.listen(PORT, function() {
	console.log("App listening on Port " + PORT);
});