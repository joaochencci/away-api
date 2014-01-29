module.exports = {

	index: function(req, res) {
		res.json({
			hello: "world"
		})
	},

	create: function(req, res) {
		if(!req.param('name') || !req.param('email')){
			res.json({
				result: "error"
			})
		}

		var user = new User ({
			name: req.param('name'),
			email: req.param('email'),
			social:
			age: req.param('age'),
			matches:
		});

		user.save(function(err){

			if(err){
				res.json({
					result: "error"
				})
			} else {
				res.json({
					result: "success", 
					user: user
				})
			}
		})
	},

	update: function(req, res) {
		//TODO: inserir nos matches a nova cidade
	},

	login: function(req, res) {
		//TODO: logar e autenticas o facebook
	}
}