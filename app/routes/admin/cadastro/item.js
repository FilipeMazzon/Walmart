module.exports = function (application){
	application.get('/cadastro_item',function(req,res){
		application.app.controllers.admin.cadastro.item.cadastro_item(application,req,res);
	});
	application.post('/salvar_item',function(req,res){
		application.app.controllers.admin.cadastro.item.item_salvar(application,req,res);
	});
}