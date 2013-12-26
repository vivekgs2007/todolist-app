var todo = require('../db').collections.todo;

exports.create = function(req,res){
	var params = req.body;
	todo.insert(params,function(err){
		if(err) return res.status(500).send({status: 'Falied to create to the mongodb todo list collections'});
		res.redirect('/');
	});
};

exports.destroy = function(req,res){
	todo.remove({_id: req.params.id}, function ( err, todo ){
		if(err) return res.status(400).send({status: 'Falied to delete the mongodb todo list collection'});
	      res.redirect( '/' );
	  });
};


