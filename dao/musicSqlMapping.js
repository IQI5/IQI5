// musicSqlMapping.js
var music = {
	insert: 'INSERT INTO QI5Melody (id, author, name, description, content, share) VALUES (0, ?, ?, ?, ?, ?)',
	queryAll: 'select * from QI5Melody'
};

module.exports = music;