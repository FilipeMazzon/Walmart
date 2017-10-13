module.exports = function (application){
	application.get('/deletar_cliente',function(req,res){
		application.app.controllers.admin.delete.cliente.deletar_cliente(application,req,res);
	});
	application.post('/deletar_cliente',function(req,res){
		application.app.controllers.admin.delete.cliente.cliente_deletar(application,req,res);
	});
}