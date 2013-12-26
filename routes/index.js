var todo = require('../db').collections.todo;

exports.index = function(req, res){
	todo.find().toArray(function(err,docs){
		if(err) return res.status(500).send({status: 'Falied to find todo list'});
			res.render('index', { 
			  	title: 'Todo Application',
			  	todolistheader : 'List of Todo Task',
			  	todolist : docs
			});
		});
};