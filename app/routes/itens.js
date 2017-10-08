module.exports = function(application){
	application.get('/listar_itens',function(req,res){
		application.app.controllers.itens.listar_itens (application,req,res);
	});
	application.get('/item',function(req,res){
		application.app.controllers.itens.item (application,req,res);
	});
};
