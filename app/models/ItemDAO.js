function ItemDAO(connection) {
    this._connection = connection();
}

ItemDAO.prototype.salvarItem = function (item) {
    this._connection.open(function (err, mongoclient) {
        mongoclient.collection("itens", function (err, collection) {
            collection.insert(item);
            mongoclient.close();
        });
    });
};
ItemDAO.prototype.getItens = function (req, res, where) {
    this._connection.open(function (err, mongoclient) {
        mongoclient.collection("itens", function (err, collection) {
            collection.find().toArray(function (mongoError, result) {
                if (where === "delete") {
                    res.render("admin/delete/item", {validacao: {}, item: result});
                }
                else if (where === "listar") {
                    res.render("listar/item/itens", {item: result});
                }

            });
            mongoclient.close();
        });
    });
};
ItemDAO.prototype.dropItem = function (itemList, req, res) {
    this._connection.open(function (err, mongocliente) {
        mongocliente.collection("itens", function (err, collection) {
            collection.remove(itemList, 1);
            res.redirect('/listar_itens');
        });
    });
};
ItemDAO.prototype.getItem = function (id_item, req, res) {
    this._connection.open(function (err, mongoclient) {
        mongoclient.collection("itens", function (err, collection) {
            collection.find(id_item).toArray(function (mongoError, result) {
                res.render("listar/item/itens", {item: result});
            });
            mongoclient.close();
        });
    });
};
ItemDAO.prototype.get5UltimosItens = function (req, res) {
    this._connection.open(function (err, mongoclient) {
        mongoclient.collection("itens", function (err, collection) {
            collection.find().limit(5).toArray(function (mongoError, result) {
                res.render("home/index", {item: result});
            });
            mongoclient.close();
        });
    });
};
module.exports = function () {
    return ItemDAO;
};
