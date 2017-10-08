module.exports.login = function(application,req,res){
	res.render("login/login",{validacao : {} , login : {}});
}
module.exports.check = function(application,req,res){
	var login= req.body;
	console.log(req.body);

	var connection = application.config.dbConnection();
	var loginDao = new application.app.models.LoginDAO(connection);

	if(login.nome =="admin" && login.senha =="admin"){
		res.redirect("/cadastro_cliente");
		return;
	}
	loginDao.logarCliente(login,function(error,result){
		res.redirect('/home',{usuario: result});
	});
	
	validacao = "senha ou usario invalido";
	res.render("login/login",{validacao :validacao, login: login });
}