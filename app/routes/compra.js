module.exports = function (application) {
    application.get('/buyitem', function (req, res) {
        if (req.session.autorizado) {
            application.app.controllers.compra.finalizarCompra(application, req, res);
        }
        else {
            res.redirect('/');
        }
    });
};
