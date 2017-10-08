module.exports.listar_clientes = function(application,req,res){

	var connection = application.config.dbConnection();
	var clientesDAO = new application.app.models.ClienteDAO(connection);
	
	clientesDAO.getClientes(function(error,result){
		res.render("listar//cliente/clientes", {clientes : result });
	});

}

module.exports.listar_cliente = function(application,req,res){
	var connection = application.config.dbConnection();
	var clientesDAO = new application.app.models.ClienteDAO(connection);

	var cliente = req.query;

	clientesDAO.getCliente(cliente,function(error,result){
		res.render("listar/cliente/cliente", {clientes : result });
	});
}