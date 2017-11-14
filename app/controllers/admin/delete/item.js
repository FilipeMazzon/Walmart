module.exports.deletar_item = function (application, req, res) {
    var connection = application.config.dbConnection;
    var itemDAO = new application.app.models.ItemDAO(connection);
    var dataUser = {
        "nome": req.session.nome,
        "user": req.session.user
    };
    itemDAO.getItens(req, res, "delete", dataUser);
};
module.exports.item_deletar = function (application, req, res) {
    var itemList = req.body;
    req.assert('id', 'Por favor selecionar algum item').notEmpty();
    var erros = req.validationErrors();
    var dataUser = {
        "nome": req.session.nome,
        "user": req.session.user
    };
    var connection = application.config.dbConnection;
    var itemDAO = new application.app.models.ItemDAO(connection);

    if (erros) {
        itemDAO.getItens(req, res, "delete", dataUser);
        return;
    }
    itemDAO.dropItem(itemList, req, res);
};
