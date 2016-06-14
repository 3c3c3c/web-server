

module.exports =  middleware = {
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