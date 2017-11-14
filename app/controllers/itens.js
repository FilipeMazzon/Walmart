module.exports.listar_itens = function (application, req, res) {

    var connection = application.config.dbConnection;
    var itemDAO = new application.app.models.ItemDAO(connection);
    var dataUser = {
        "nome": req.session.nome,
        "user": req.session.user
    };
    itemDAO.getItens(req, res, "listar", dataUser);
};
module.exports.item = function (application, req, res) {
    var item = req.query;
    var dataUser = {
        "nome": req.session.nome,
        "user": req.session.user
    };
    var connection = application.config.dbConnection;
    var itemDAO = new application.app.models.ItemDAO(connection);
    itemDAO.getItem(item, req, res, "listar", dataUser);
};
