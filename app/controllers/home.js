module.exports.index = function (application, req, res) {

    var connection = application.config.dbConnection;
    var itemDAO = new application.app.models.ItemDAO(connection, req);
    var dataUser = {
        "nome": req.session.nome,
        "user": req.session.user
    };
    itemDAO.get5UltimosItens(req, res, dataUser);
};
