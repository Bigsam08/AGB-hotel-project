const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({
	password: {
		type: String,
		required: true
	}
});

const adminModel = mongoose.model('admin', adminSchema);
module.exports = adminModel;