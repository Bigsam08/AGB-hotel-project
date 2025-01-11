const express = require('express');
const router = express.Router();
const Pass = require('../models/admin');

router.get('/login', async(req, res) => {
	try {
		const adminPassword = await Pass.findOne();
		if (!adminPassword) {
			console.log("Admin Password not found!!");
			return res.status(404).json({ message: "Admin Password not found!!"});
		}
		res.json({password: adminPassword.password})
	} catch (error) {
		console.error("error fetching passsword", error);
		res.status(500).json({ message: "server error!!"})
	}
});


module.exports = router;