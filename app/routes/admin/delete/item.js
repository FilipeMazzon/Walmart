module.exports = function (application){
	
	application.get('/deletar_item',function(req,res){
		application.app.controllers.admin.delete.item.deletar_item(application,req,res);
	});
	application.post('/deletar_item',function(req,res){
		application.app.controllers.admin.delete.item.item_deletar(application,req,res);
	});
}