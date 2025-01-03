/** creating a database structure for rooms input
 * for add new entry to database and getting input
 * mongose schema
 */
const mongoose = require('mongoose');
const roomSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	roomType: {
		type: String,
		required: true
	},
	maxAdult: {
		type: Number,
		required: true
	},
	perNight: {
		type: Number,
		required: true
	},
	amenities: {
		type: String,
		required: true
	},
	avalability: {
		type:  Boolean,
		default: true
	},
	description: {
		type:  String,
		required: true
	},
	currentBookings: [],
	imgagesUrl: [],	
}, {
	timestamps: true
});

const roomModel = mongoose.model('rooms', roomSchema); // creating the model takes two args collection name in db and the schema
module.exports = roomModel;
 