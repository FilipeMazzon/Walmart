module.exports.listar_itens = function(application,req,res){

	var connection = application.config.dbConnection();
	var itemDAO = new application.app.models.ItemDAO(connection);

	itemDAO.getObjetos(function(error,result){
		res.render("listar/item/itens",{item : result});
	})

};
module.exports.item = function(application,req,res){
	var connection = application.config.dbConnection();
	var itemDAO = new application.app.models.ItemDAO(connection);

	var id_item = req.query;

    itemDAO.getObjeto(id_item,function(error,result){
		res.render("listar/item/item", {item : result});
	})
};
