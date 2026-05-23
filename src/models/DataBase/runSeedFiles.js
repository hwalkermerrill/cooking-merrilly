const dotenv = require("dotenv").config();
const mongoose = require("../connection");
const Recipe = require("../Recipe");
const { fettuccineAlfredo, gyros, hummus } = require("./seedRecipes");

async function seed() {
	try {
		// console.log("Clearing existing recipes...");
		// await Recipe.deleteMany({});

		console.log("Inserting seed recipes...");
		await Recipe.insertMany([
			// fettuccineAlfredo,
			// gyros,
			// hummus,
		]);

		console.log("Seed complete!");
	} catch (err) {
		console.error("Seed failed:", err);
	} finally {
		mongoose.connection.close();
	}
}

seed();
