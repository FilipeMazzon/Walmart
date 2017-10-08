module.exports.cadastro_cliente = function(application,req,res){
	res.render("cadastro/cadastroCliente", { validacao : {} , cliente : {} });
}

module.exports.cliente_salvar = function(application,req,res){
	var cliente = req.body;
	req.assert('nome', 'nome é obrigatório').notEmpty();
    req.assert('telefone', 'telefone é obrigatório').notEmpty();
    req.assert('credito', 'credito é obrigatório').notEmpty();
    req.assert('credito', 'credito precisa ser inteiro').isInt();
    var erros = req.validationErrors();

    if(erros){
        res.render('cadastro/cadastroCliente',{validacao : erros , cliente : cliente});
        return;
    }

	var connection = application.config.dbConnection();
	var clientesDAO = new application.app.models.ClienteDAO(connection);

	clientesDAO.salvarCliente(cliente,function(error,result){
		res.redirect('/listar_clientes');
	});
}


module.exports.cadastro_item = function(application,req,res){
	res.render("cadastro/cadastroItem",{ validacao : {} ,item: {} });
}
module.exports.item_salvar = function(application,req,res){
	var item = req.body;
    console.log(item);
	req.assert('id', 'id é obrigatório').notEmpty();
    req.assert('nome', 'nome é obrigatório').notEmpty();
    req.assert('preco', 'preço é obrigatório').notEmpty();
    req.assert('preco', 'preço precisa ser inteiro').isInt();
    req.assert('descricao', 'Descricao é obrigatório').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('cadastro/cadastroItem',{validacao :erros , item : item});
        return;
    }
	var connection = application.config.dbConnection();
	var itemDAO = new application.app.models.ItemDAO(connection);

	itemDAO.salvarObjeto(item,function(error,result){
		res.redirect('/listar_itens');
	});
}