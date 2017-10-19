module.exports.editar_cliente = function (application, req, res) {
    var connection = application.config.dbConnection();
    var clientesDAO = new application.app.models.ClienteDAO(connection);
    clientesDAO.getClientes(function (error, result) {
        res.render("admin/edit/cliente", {validacao: {}, cliente: result, dados: {}});
    });
};
module.exports.cliente_editar = function (application, req, res) {
    var cliente = req.body;
    var connection = application.config.dbConnection();
    var clientesDAO = new application.app.models.ClienteDAO(connection);

    clientesDAO.editCliente(cliente, function (error, result) {
        res.render("admin/edit/cliente", {validacao: {}, cliente: result, dados: {}});
    });
};
module.exports.get_info_cliente = function (application, req, res) {
    var cliente = req.body;
    var connection = application.config.dbConnection();
    var clientesDAO = new application.app.models.ClienteDAO(connection);
    clientesDAO.getCliente(cliente, function (error, result) {

        res.render("admin/edit/cliente", {validacao: {}, cliente: {}, dados: result});
    })
};
