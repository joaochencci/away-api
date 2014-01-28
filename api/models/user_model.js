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

	matches: [{

		place: {
			type: Schema.ObjectId, 
			ref: 'user', 
			index: true
		},

		viewed: {
			type: Date,
			required: true,
			default: Date.now
		},

		choice:  {
			type: Boolean,
			required: true
		}
	}]

});

module.exports = UserSchema;