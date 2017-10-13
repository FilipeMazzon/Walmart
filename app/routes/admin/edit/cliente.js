module.exports = function (application){
	application.get('/editar_cliente',function(req,res){
		application.app.controllers.admin.edit.cliente.editar_cliente(application,req,res);
	});
	application.post('/editar/cliente',function(req,res){
		application.app.controllers.admin.edit.cliente.cliente_editar(application,req,res);
	});
}