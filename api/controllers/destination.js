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

		User.findOne(req.cookies.user_id, function(err, me) {

			if(err) {

				res.json({
					result: "error",
					exception: err
				})

			} else {

				Destination.find({
					_id: {
						$nin: me.matches
					}
				}, function(err, docs) {

					if(err) {

						res.json({
							result: "error",
							exception: err
						})

					} else if(!docs || !docs.length) {
						
						res.json({
							result: "success",
							message: "No destination to show",
							destination: []
						})
					} else {
						
						res.json({
							result: "success",
							destination: docs
						})
					}
				})
			}
		})
	}
}