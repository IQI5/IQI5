// musicDao.js
var mysql = require('mysql');
var $conf = require('../conf/db');
var $sql = require('./musicSqlMapping');
var pool = mysql.createPool($conf.mysql);

module.exports = {
	add: function(req, res, next) {
		pool.getConnection(function(err, connection) {
			var param = req.body;
			connection.query($sql.insert, [/* */], function(err, result) {
				res.send(result);
				connection.release();
			});
		});
	},
	getAll: function(req, res, next) {
		pool.getConnection(function(err, connection) {
			connection.query($sql.queryAll, function(err, result) {
				res.send(result);
				connection.release();
			});
		});
	}
}
