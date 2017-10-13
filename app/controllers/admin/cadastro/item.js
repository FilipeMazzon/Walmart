module.exports.cadastro_item = function(application,req,res){
	res.render("admin/cadastro/item",{ validacao : {} ,item: {} });
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
        res.render('admin/cadastro/item',{validacao :erros , item : item});
        return;
    }
	var connection = application.config.dbConnection();
	var itemDAO = new application.app.models.ItemDAO(connection);

	itemDAO.salvarObjeto(item,function(error,result){
		res.redirect('/listar_itens');
	});
}