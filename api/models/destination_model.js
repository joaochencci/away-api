var mongoose = require("../services/mongoose");
var validate = require('mongoose-validator').validate;

var Schema = mongoose.schema;

var DestinationSchema = new Schema({

	type: {
		type: String,
		enum: ['city', 'country', 'point'],
		required: true
	},

	name: {
		type: String,
		required: true
	},

	geo: {
		lat: {
			type: Number,
			required: true
		},

		lng: {
			type: Number,
			required: true
		}
	},

	photos: [{
		type: String
	}],

	info: {
		type: String,
		required: false
	}

});

module.exports = DestinationSchema;