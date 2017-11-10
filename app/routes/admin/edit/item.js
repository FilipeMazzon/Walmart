module.exports = function (application) {
    application.get('/editar_item', function (req, res) {
        if (req.session.admin) {
            application.app.controllers.admin.edit.item.editar_item(application, req, res);
        }
        else {
            res.redirect('/home');
        }

    });
    application.post('/editar/item', function (req, res) {
        if (req.session.admin) {
            application.app.controllers.admin.edit.item.item_editar(application, req, res);
        }
        else {
            res.redirect('/home');
        }
    });
};
