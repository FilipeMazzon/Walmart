module.exports.cadastro_cliente = function(application,req,res){
	res.render("admin/cadastro/cliente", { validacao : {} , cliente : {} });
}
module.exports.cliente_salvar = function(application,req,res){
	var cliente = req.body;
	req.assert('nome', 'nome é obrigatório').notEmpty();
    req.assert('telefone', 'telefone é obrigatório').notEmpty();
    req.assert('credito', 'credito é obrigatório').notEmpty();
    req.assert('credito', 'credito precisa ser inteiro').isInt();
    var erros = req.validationErrors();

    if(erros){
        res.render('admin/cadastro/cliente',{validacao : erros , cliente : cliente});
        return;
    }
	var connection = application.config.dbConnection();
	var clientesDAO = new application.app.models.ClienteDAO(connection);

	clientesDAO.salvarCliente(cliente,function(error,result){
		res.redirect('/listar_clientes');
	});
}