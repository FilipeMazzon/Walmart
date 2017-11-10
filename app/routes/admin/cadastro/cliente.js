module.exports = function (application) {
    application.get('/cadastro_cliente', function (req, res) {
        if (req.session.admin) {
            application.app.controllers.admin.cadastro.cliente.cadastro_cliente(application, req, res);
        }
        else {
            res.redirect('/home');
        }
    });
    application.post('/salvar_cliente', function (req, res) {
        if (req.session.admin) {
            application.app.controllers.admin.cadastro.cliente.cliente_salvar(application, req, res);
        }
        else {
            res.redirect('/home');
        }
    });
};
