function ItemDAO(connection){
	this._connection = connection;
}
ItemDAO.prototype.getObjetos = function(callback){
	this._connection.query('select * from itens order by preco',callback);
}
ItemDAO.prototype.getObjeto = function(id_item,callback){
	this._connection.query('select * from itens where id = ' + id_item.id,callback);
}
ItemDAO.prototype.salvarObjeto = function(item,callback){
	this._connection.query('insert into itens set ? ',item,callback);
}
ItemDAO.prototype.get5UltimosItens = function(callback){
	this._connection.query('select * from itens order by id desc limit 5',callback);
}
ItemDAO.prototype.dropItem = function(id_item,callback){
	this._connection.query('DELETE from itens where id= '+ id_item.id,callback);
}
module.exports = function(){
	return ItemDAO;
}