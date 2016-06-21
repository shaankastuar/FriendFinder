//dependencies

var express = require('express');
var bodyParser = require('body-parser');
var htmlRouter = require('/app/routing/html-routes.js');
var apiRouter = require('/app/routing/api-routes.js');

var app = express();

//set up the Express app to handle the data parsing

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.jason({type: 'application/vnd.api+json'}));

//routes
app.use('/', htmlRouter);
app.use('/', apiRouter);



//listener
app.listen(PORT, function(){
	console.log('App listening on Port' + PORT);
});