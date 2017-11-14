module.exports.finalizarCompra = function (application, req, res) {
    var dataUser = {
        "nome" : req.session.nome,
        "user" : req.session.user
    };
    var precoItem = req.query;

    var connection = application.config.dbConnection;
    var itemDAO = new application.app.models.ItemDAO(connection);
    itemDAO.comprar(precoItem,req,res,dataUser);
};
