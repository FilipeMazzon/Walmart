module.exports.listar_itens = function (application, req, res) {

    var connection = application.config.dbConnection;
    var itemDAO = new application.app.models.ItemDAO(connection);

    itemDAO.getItens(req, res, "listar");
};
module.exports.item = function (application, req, res) {
    var id_item = req.query;

    var connection = application.config.dbConnection;
    var itemDAO = new application.app.models.ItemDAO(connection);

    itemDAO.getItem(id_item, req, res);

};
