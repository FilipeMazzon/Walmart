module.exports = function (application){
	application.get('/cadastro_cliente',function(req,res){
		application.app.controllers.admin.cadastro.cliente.cadastro_cliente(application,req,res);
	});
	application.post('/salvar_cliente',function(req,res){
		application.app.controllers.admin.cadastro.cliente.cliente_salvar(application,req,res);
	});
}