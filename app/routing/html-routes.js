var path = require('path');

module.exports = function(app){

	app.get("/survey", function(req,res) {
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});

//Not using pre-defined homepage so that if user is on the application / sit e 
//and not on a specific page they are directed to home
	app.use(function(req,res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});

}