var mongoose = require("../services/mongoose");
var facebook = require("../adapters/facebook");

var User = mongoose.model("user");

module.exports = {

	login: function(req, res) {

		if(!req.param('provider') || !req.param('token')) {

			return res.json({

				result: "error",
				message: "No social method was provided",
				exception: {
					missing: ["provider", "token"]
				}
			})
		}

		else if(req.param('provider') == "facebook") {

			facebook.me(req.param("token"), function(err, me) {

				if(err) {

					return res.json({
						result: "error",
						message: "Problem accessing Facebook information",
						exception: err
					})
				}

				User.find({

					'social.uid': me.id

				}, function(err, docs) {

					if(err) {

						return res.json({
							result: "error",
							message: "Problem accessing Facebook information",
							exception: err
						})
					}

					else if(docs.length) {

						return res.json({
							result: "success",
							message: "User successfully found",
							user: docs[0]
						})
					}

					else {

						var user = new User({

							name: me.name,
							email: me.email,

							social: [{
								provider: "facebook",
								access_token: req.param("token"),
								uid: me.id
							}]
						})

						user.save(function(err) {

							if(err) {

								return res.json({
									result: "error",
									message: "Problem accessing Facebook information",
									exception: err
								})
							}

							else {

								return res.json({
									result: "success",
									message: "User successfully created",
									first_time: true,
									user: user
								})			
							}

						})
					}
				})
			})
		}

		else {

			return res.json({
				result: "error",
				message: "Social provider not valid or not available"
			})
		}

	},

	update: function(req, res) {
		//TODO: inserir nos matches a nova cidade
	}
}