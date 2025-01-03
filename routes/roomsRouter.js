const express = require('express');
const router = express.Router();

const Room = require('../models/rooms');

// api endpoint to get all the rooms in the db

router.get('/allrooms', async(req, res) => {
	 try {
		const displayedRooms = await Room.find({});
		res.send(displayedRooms);

	 } catch (error) {
		return res.status(400).json({ message: error });
	 }
});

/** Router to get a room details by room id and display all room contents
 * 
 */
router.post('/getroomid', async(req, res) => {
	const roomid = req.body.roomid;
	try {
	   const displayedRoom = await Room.findOne({_id : roomid});
	   if(!displayedRoom) {
		return res.status(404).json({message: "Room not found"});
	   }
	   res.send(displayedRoom);

	} catch (error) {
	   return res.status(400).json({ message: error });
	}
});


module.exports = router;
