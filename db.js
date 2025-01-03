/**
 * This is the database configuration settings connection to mongodb atlas
 * a cloud databse .
 * for local connection : "mongodb://172.28.224.1/School"
 */
const mongoose = require("mongoose");
require('dotenv').config();

const db_connection = async () => {
	const dbUrl = process.env.MONGO_ATLAS_CLUSTER_CONNECTION;
  try {
    await mongoose.connect(
      dbUrl
    );
    console.log("DB Mongo Connected");
  } catch (error) {
    console.log("conneceting to DB Failed", error);
  }
};

module.exports = db_connection;
