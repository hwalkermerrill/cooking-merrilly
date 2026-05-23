const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

if (!uri) {
	console.error("MONGO_URI is not defined. Check your environment variables.");
	process.exit(1);
}

mongoose.connect(uri)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch(err => {
		console.error("Error connecting to MongoDB:", err);
	});
module.exports = mongoose;