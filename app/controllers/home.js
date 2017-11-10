module.exports.index = function (application, req, res) {

    var connection = application.config.dbConnection;
    var itemDAO = new application.app.models.ItemDAO(connection);

    itemDAO.get5UltimosItens(req, res);

};
