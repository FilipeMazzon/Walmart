function ClienteDAO(connection) {
    this._connection = connection();
}

ClienteDAO.prototype.salvarCliente = function (cliente) {
    this._connection.open(function (err, mongoclient) {
        mongoclient.collection("clientes", function (err, collection) {
            collection.insert(cliente);
            mongoclient.close();
        });
    });
};
ClienteDAO.prototype.dropCliente = function (cliente) {
    console.log(cliente);
    this._connection.open(function (err, mongoclient) {
        mongoclient.collection("clientes", function (err, collection) {
            collection.remove(cliente, 1);
            mongoclient.close();
        })
    })
};
ClienteDAO.prototype.getClientes = function (req, res, where) {
    this._connection.open(function (err, mongoclient) {
        mongoclient.collection("clientes", function (err, collection) {
            collection.find().toArray(function (mongoError, result) {
                if (where === "listar") {
                    res.render("listar/cliente/clientes", {clientes: result});
                }
                if (where === "delete") {
                    res.render("admin/delete/cliente", {cliente: result, validacao: {}});
                }
            });
            mongoclient.close();
        });
    });
};
ClienteDAO.prototype.getCliente = function (cliente, req, res) {
    this._connection.open(function (err, mongoclient) {
        mongoclient.collection("clientes", function (err, collection) {
            collection.find(cliente).toArray(function (mongoError, result) {
                res.render("listar/cliente/cliente", {clientes: result});
            });
            mongoclient.close();
        });
    });
};
ClienteDAO.prototype.autentificar = function (dados, req, res) {
    this._connection.open(function (err, mongoclient) {
        mongoclient.collection("clientes", function (err, collection) {
            collection.find(dados).toArray(function (mongoError, result) {
                if (result[0].user === "admin" && result[0].password === "admin") {
                    req.session.admin = true;
                }
                if (result[0] !== undefined) {
                    req.session.autorizado = true;
                    req.session.user = result[0].user;
                }
                if (req.session.autorizado) {
                    res.redirect("/home");
                }
                else {
                    res.render("login/login", {validacao: {}, login: result});
                }
            });
            mongoclient.close();
        });
    });
};

module.exports = function () {
    return ClienteDAO;
};
