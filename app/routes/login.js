module.exports = function (application){
	application.get('/',function(req,res){
		application.app.controllers.login.login(application,req,res);
	});
	application.post('/try/login',function(req,res){
		application.app.controllers.login.check(application,req,res);
	});
};