module.exports = function (application){
	application.get('/editar_item',function(req,res){
		application.app.controllers.admin.edit.item.editar_item(application,req,res);
	});
	application.post('/editar/item',function(req,res){
		application.app.controllers.admin.edit.item.item_editar(application,req,res);
	});
}