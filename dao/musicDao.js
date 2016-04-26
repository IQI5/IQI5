// musicDao.js
var mysql = require('mysql');
var $conf = require('../conf/db');
var $sql = require('./musicSqlMapping');
var pool = mysql.createPool($conf.mysql);

module.exports = {
	add: function(req, res, next) {
		var param = req.body;
		pool.getConnection(function(err, connection) {
			connection.query($sql.insert, [param.author, param.name, param.description, param.melody], function(err, result) {
				res.send(result);
				connection.release();
			});
		});
	},
	queryAll: function(req, res, next) {
		pool.getConnection(function(err, connection) {
			connection.query($sql.queryAll, function(err, result) {
				res.send(result);
				connection.release();
			});
		});
	}
}
