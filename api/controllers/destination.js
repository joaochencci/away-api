var mongoose = require("../services/mongoose");
var Destination = mongoose.model("destination");

module.exports = {

	index: function(req, res) {
		res.json({
			hello: "world"
		})
	},

	create: function(req, res) {

		var destination = new Destination ({
			
			type: req.param('type'),
			name: req.param('name'),
			
			geo: req.param('geo'),
			
			photos: req.param('photos'),
			info: req.param('info')
		});

		destination.save(function(err) {

			if(err) {

				res.json({
					result: "error",
					exception: err
				})

			} else {
				
				res.json({
					result: "success",
					destination: destination
				})
			}

		})
	},

	getNext: function(req, res) {

		Destination.find({
			type: req.param('type'),
			//geo: req.param('geo'),
			//price: req.param('price')
		}, 

		function (err, docs){
			if(err){
				res.json(err);
			} else {
				res.json(docs);
			}
		});
	}

}