module.exports = function(application){
	application.get('/listar_clientes',function(req,res){
		application.app.controllers.clientes.listar_clientes (application,req,res);
	});
	application.get('/cliente',function(req,res){
		application.app.controllers.clientes.listar_cliente (application,req,res);
	});
};
