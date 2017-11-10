module.exports.deletar_cliente = function (application, req, res) {

    var connection = application.config.dbConnection;
    var clientesDAO = new application.app.models.ClienteDAO(connection);
    clientesDAO.getClientes(req, res, "delete");
};
module.exports.cliente_deletar = function (application, req, res) {
    var cliente = req.body;
    console.log(cliente);
    req.assert('user', 'Por favor selecionar algum item').notEmpty();
    var erros = req.validationErrors();

    var connection = application.config.dbConnection;
    var clienteDAO = new application.app.models.ClienteDAO(connection);
    console;
    if (erros) {
        clienteDAO.getClientes(req, res, "delete");
        return;
    }
    clienteDAO.dropCliente(cliente);
    res.redirect('/listar_clientes');

};
