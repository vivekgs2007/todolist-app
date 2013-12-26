var Mongolian = require("mongolian"),
	ObjectId = Mongolian.ObjectId;

ObjectId.prototype.toJSON = function toJSON() {
	return this.toString();
};

var server = new Mongolian();

var db = server.db('todo_lists');

module.exports.collections = {
	todo: db.collection('todo')
};

module.exports.ObjectId = ObjectId;