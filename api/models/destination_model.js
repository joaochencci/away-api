var mongoose = require("../service/mongoose");
var Schema = mongoose.schema;
var validate = require('mongoose-validator').validate;

var DestinationSchema = new Schema({

	type: {
		type: String,
		enum: ['city', 'country','point']
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

	photos: {
		//TODO: Trocar pra array
		type: String,
		required: true
	},

	info: {
		type: String,
		required: false
	}

});