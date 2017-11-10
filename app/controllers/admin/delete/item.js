module.exports.deletar_item = function (application, req, res) {
    var connection = application.config.dbConnection;
    var itemDAO = new application.app.models.ItemDAO(connection);

    itemDAO.getItens(req, res, "delete");
};
module.exports.item_deletar = function (application, req, res) {
    var itemList = req.body;
    req.assert('id', 'Por favor selecionar algum item').notEmpty();
    var erros = req.validationErrors();

    var connection = application.config.dbConnection;
    var itemDAO = new application.app.models.ItemDAO(connection);

    if (erros) {
        itemDAO.getItens(req, res, "delete");
        return;
    }
    itemDAO.dropItem(itemList, req, res);
};
