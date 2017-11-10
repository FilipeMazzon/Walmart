module.exports.listar_clientes = function (application, req, res) {
    var connection = application.config.dbConnection;
    var clientesDAO = new application.app.models.ClienteDAO(connection);

    clientesDAO.getClientes(req, res, "listar");


};

module.exports.listar_cliente = function (application, req, res) {
    var cliente = req.query;

    var connection = application.config.dbConnection;
    var clientesDAO = new application.app.models.ClienteDAO(connection);

    clientesDAO.getCliente(cliente, req, res);
};
