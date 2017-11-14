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
ClienteDAO.prototype.updateCliente = function (user, req, res, cliente) {
    this._connection.open(function (err, mongocliente) {
        mongocliente.collection("clientes", function (err, collection) {
            collection.update(user, cliente, {upsert: true});
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
ClienteDAO.prototype.getClientes = function (req, res, where, userData) {
    this._connection.open(function (err, mongoclient) {
        mongoclient.collection("clientes", function (err, collection) {
            collection.find().toArray(function (mongoError, result) {
                if (where === "listar") {
                    res.render("listar/cliente/clientes", {clientes: result, user: userData});
                }
                else if (where === "delete") {
                    res.render("admin/delete/cliente", {cliente: result, validacao: {}, user: userData});
                }
                else if (where === "edit") {
                    res.render("admin/edit/cliente", {clientes: result, cliente: {}, dados: {}, user: userData});
                }
            });
            mongoclient.close();
        });
    });
};

ClienteDAO.prototype.getCliente = function (cliente, req, res, where, userData) {
    this._connection.open(function (err, mongoclient) {
        mongoclient.collection("clientes", function (err, collection) {
            collection.find(cliente).toArray(function (mongoError, result) {
                if (where === "listar") {
                    res.render("listar/cliente/cliente", {clientes: result, user: userData});
                }
                if (where === "edit") {
                    res.render("admin/edit/cliente", {clientes: {}, cliente: result, dados: {}, user: userData});
                }
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
                    req.session.nome = result[0].nome;
                    req.session.saldo = result[0].credito;
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
