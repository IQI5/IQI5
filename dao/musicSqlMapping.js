// musicSqlMapping.js
var music = {
	insert: 'insert into music (id, author, name, description, melody) VALUES (0, ?, ?, ?, ?)',
	queryAll: 'select * from music',
};

module.exports = music;