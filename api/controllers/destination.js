var mongoose = require("../services/mongoose");
var Destination = mongoose.model("destination");

module.exports = {

	index: function(req, res) {
		res.json({
			hello: "world"
		})
	},

	create: function(req, res) {

		if ( !req.param('type') || !req.param('name') || !req.param('lat') || !req.param('lng') ){
			res.json({
				result: "error"
			})
		}

		var destination = new Destination ({
			
			type: req.param('type'),
			name: req.param('name'),
			
			geo: {
				lat: req.param('lat'),
				lng: req.param('lng')
			},
			
			photos: req.param('photos'),
			info: req.param('info')
		});

		destination.save(function(err) {

			if(err) {
				res.json({
					result: "error"
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
			id: req.param('id')
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