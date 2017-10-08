function LoginDAO(connection){
	this._connection = connection;
}
LoginDAO.prototype.getObjetos = function(callback){
	//this._connection.query('select * from itens order by nome ASC',callback);
}
LoginDAO.prototype.logarCliente = function(login,callback){
	this._connection.query('select * from itens where user = '+ login.nome +'and where password = '+ login.senha );
}
module.exports = function(){
	return LoginDAO;
}