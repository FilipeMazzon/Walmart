module.exports.editar_cliente = function(application,req,res){
    var connection = application.config.dbConnection();
    var clientesDAO = new application.app.models.ClienteDAO(connection);
    clientesDAO.getClientes(function (error,result) {
        res.render("admin/edit/cliente",{validacao : {}, cliente:result});
    });

};
module.exports.cliente_editar = function(application,req,res){
    var connection = application.config.dbConnection();
    var clientesDAO = new application.app.models.ClienteDAO(connection);
    clientesDAO.getClientes(function (error,result) {
        res.render("admin/edit/cliente",{validacao : {}, cliente:result});
    });
};
