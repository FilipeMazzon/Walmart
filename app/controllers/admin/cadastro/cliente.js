module.exports.cadastro_cliente = function (application, req, res) {
    var dataUser = {
        "nome": req.session.nome,
        "user": req.session.user,
        "credito": req.session.saldo
    };
    res.render("admin/cadastro/cliente", {validacao: {}, cliente: {}, user: dataUser});

};
module.exports.cliente_salvar = function (application, req, res) {

    var cliente = req.body;

    req.assert('nome', 'nome é obrigatório').notEmpty();
    req.assert('telefone', 'telefone é obrigatório').notEmpty();
    req.assert('telefone', 'telefone precisa ser inteiro').isInt().
    req.assert('credito', 'credito é obrigatório').notEmpty();
    req.assert('credito', 'credito precisa ser inteiro').isInt();
    var erros = req.validationErrors();
    var dataUser = {
        "nome": req.session.nome,
        "user": req.session.user,
        "credito": req.session.saldo
    };
    if (erros) {
        res.render('admin/cadastro/cliente', {validacao: erros, cliente: cliente, user: dataUser});
        return;
    }

    var connection = application.config.dbConnection;
    var clienteDAO = new application.app.models.ClienteDAO(connection);
    clienteDAO.salvarCliente(cliente);
    res.redirect("/listar_clientes");
};
