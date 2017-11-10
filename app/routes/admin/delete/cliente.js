module.exports = function (application) {
    application.get('/deletar_cliente', function (req, res) {
        if (req.session.admin) {
            application.app.controllers.admin.delete.cliente.deletar_cliente(application, req, res);
        }
        else {
            res.redirect('/home');
        }

    });
    application.post('/deletar_cliente', function (req, res) {
        if (req.session.admin) {
            application.app.controllers.admin.delete.cliente.cliente_deletar(application, req, res);
        }
        else {
            res.redirect('/home');
        }

    });
};
