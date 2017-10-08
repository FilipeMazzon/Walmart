module.exports = function (application){
	application.get('/home',function(req,res){
		console.log('aqui chegou');
		application.app.controllers.home.index(application,req,res);
	});
};