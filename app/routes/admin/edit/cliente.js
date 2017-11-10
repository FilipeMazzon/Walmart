module.exports = function (application) {
    application.get('/editar_cliente', function (req, res) {
        if (req.session.admin) {
            application.app.controllers.admin.edit.cliente.editar_cliente(application, req, res);
        }
        else {
            res.redirect('/home');
        }
    });
    application.post('/editar_cliente', function (req, res) {
        if (req.session.admin) {
            application.app.controllers.admin.edit.cliente.cliente_editar(application, req, res);
        }
        else {
            res.redirect('/home');
        }
    });
    application.post('/editar_cliente_especifico', function (req, res) {
        if (req.session.admin) {
            application.app.controllers.admin.edit.cliente.get_info_cliente(application, req, res);
        }
        else {
            res.redirect('/home');
        }

    });
};
