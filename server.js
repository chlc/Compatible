var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;

//json parser
var jsonParser = bodyParser.json();

//url encoder app
var urlencodedParser = bodyParser.urlencoded({extended: false});

//custom JSON as json
app.use(bodyParser.json({type: 'application/*+json' }));

//buffer
app.use(bodyParser.raw({ type: 'application/vmd.custom-type' }));

//make HTML body a string
app.use(bodyParser.text({ type: 'text/html'}));

require("./app/routing/html-routes.js")(app);

app.listen(port, function(){
	console.log("App Listening on port: " + port);
});
