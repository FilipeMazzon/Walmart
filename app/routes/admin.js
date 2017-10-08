module.exports = function (application){

	//clientes
	application.get('/cadastro_cliente',function(req,res){
		application.app.controllers.admin.cadastro_cliente(application,req,res);
	});
	application.post('/cliente/salvar',function(req,res){
		application.app.controllers.admin.cliente_salvar(application,req,res);
	});
	//itens
	application.get('/cadastro_item',function (req,res) {
		application.app.controllers.admin.cadastro_item(application,req,res);
	});

	application.post('/item/salvar',function(req,res){
		application.app.controllers.admin.item_salvar(application,req,res);
	});

};