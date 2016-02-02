// Server läuft auf: http://localhost:8081

var express = require('express');
var app = express();

app.get('/myContent', function (req, res) 
{
   res.end( '{"id":"1","content":"Hello, World!"}' );
})

var server = app.listen(8081, function () {})