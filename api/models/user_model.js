var mongoose = require("../services/mongoose");
var Schema = mongoose.schema;
var validate = require('mongoose-validator').validate;

var UserSchema = new Schema({

	name: {
		type: String,
		required: true
	},

	email: {
		type: String,
		required: true,

		index: {
			unique: true,
			dropDups: false
		}
	},

	social: {
		access_token: {
			type: String
		},

		provider: {
			type: String,
			enum: ["facebook"],
			default: "facebook"		
		}
	},

	age: {
		type: int,
		required: true
	},

	places: {
		//TODO: Trocar pra array esse campo
		type: String,
		required: false
	},

	matches: {
		//TODO: Trocar pra array
		type: String,
		required: false
	}

});

module.exports = UserSchema;