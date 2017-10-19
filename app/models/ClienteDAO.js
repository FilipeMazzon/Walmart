function ClienteDAO(connection) {
    this._connection = connection;
}

ClienteDAO.prototype.getClientes = function (callback) {
    this._connection.query('select * from clientes order by nome', callback);
};
ClienteDAO.prototype.getCliente = function (cliente, callback) {
    this._connection.query('select * from clientes where id= ' + cliente.id, callback);
};
ClienteDAO.prototype.dropCliente = function (cliente, callback) {
    this._connection.query('DELETE from clientes where id= ' + cliente.id, callback);
};
ClienteDAO.prototype.salvarCliente = function (cliente, callback) {
    this._connection.query('insert into clientes set ? ', cliente, callback);
};
ClienteDAO.prototype.editCliente = function (cliente, callback) {
    this._connection.query('update clientes set ? where id= ' + cliente.id, cliente, callback);
};

module.exports = function () {
    return ClienteDAO;
};
