module.exports.deletar_item = function(application,req,res){
	var connection = application.config.dbConnection();
	var itemDAO = new application.app.models.ItemDAO(connection);

	itemDAO.getObjetos(function(error,result){
		res.render("admin/delete/item",{validacao : {} ,item : result});
	})
}
module.exports.item_deletar = function(application,req,res){
    var itemList = req.body;
    req.assert('id', 'Por favor selecionar algum item').notEmpty();
    var erros = req.validationErrors();

	var connection = application.config.dbConnection();
	var itemDAO = new application.app.models.ItemDAO(connection);

	if(erros){
		itemDAO.getObjetos(function(error,result){
			res.render('admin/delete/item',{validacao : erros , item : result});
		});
        return;
    }
    itemDAO.dropItem(itemList,function(error,result){
    	itemDAO.getObjetos(function(error,result){
			res.render('admin/delete/item',{ validacao : {} , item : result});
		});
    });
}