var express = require('express');
var app = express();
var PORT = 3090

var middleware = {
	requireAuthentication: function(req, res, next){ 
		console.log('private log hit!');
		next();
	},
	logger: function(req, res, next){
		var date = new Date().toString();
		console.log('Request' + ' ' + date + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

//application level middleware will fire for all and every page refresh
//app.use(middleware.requireAuthentication); //note- must place this here up top of rest
app.use(middleware.logger);

//get corresponds to the HTTP GET request
// app.get('/', function(req, res){
// 	res.send('Hello Express!');
// });

app.get('/about',  middleware.requireAuthentication, function(req, res){  //route level middleware place as second paran
	res.send('ABOUT page!');
});

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);
app.listen(PORT, function(){
	console.log('Server Started!');
	console.log('using port ' + PORT);
});   //pick any unused port number 