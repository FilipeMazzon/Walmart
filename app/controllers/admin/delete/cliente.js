module.exports.deletar_cliente = function(application,req,res){
	var connection = application.config.dbConnection();
	var clientesDAO = new application.app.models.ClienteDAO(connection);
	clientesDAO.getClientes(function(error,result){
		res.render("admin/delete/cliente", {cliente : result ,validacao :{}});
	});
}
module.exports.cliente_deletar = function(application,req,res){
	var clienteEscolhido = req.body;
    req.assert('id', 'Por favor selecionar algum item').notEmpty();
    var erros = req.validationErrors();

	var connection = application.config.dbConnection();
	var clienteDAO = new application.app.models.ClienteDAO(connection);

	if(erros){
		clienteDAO.getClientes(function(error,result){
			res.render('admin/delete/cliente',{validacao : erros , cliente : result});
		});
        return;
    }
    clienteDAO.dropCliente(clienteEscolhido,function(error,result){
    	clienteDAO.getClientes(function(error,result){
			res.render('admin/delete/cliente',{ validacao : {} , cliente : result});
		});
    });
}