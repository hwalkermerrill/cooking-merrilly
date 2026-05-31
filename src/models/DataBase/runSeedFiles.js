const dotenv = require("dotenv").config();
const mongoose = require("../connection");
const Recipe = require("../Recipe");
const Meal = require("../Meal");
const { mealSeeds } = require("./seedMeals");
const {
	// hummus,
	fettuccinePasta,
	stripSteak,
	alfredoSauce,
	gyroMeat,
	tzatzikiSauce
} = require("./seedRecipes");

async function seed() {
	try {
		console.log("Clearing existing recipes and meals...");
		// Uncomment if you want a clean slate each time:
		// await Recipe.deleteMany({});
		await Meal.deleteMany({});

		console.log("Inserting seed recipes...");
		await Recipe.insertMany([
			fettuccinePasta,
			stripSteak,
			alfredoSauce,
			gyroMeat,
			tzatzikiSauce,
			// hummus
		]);

		console.log("Seeding meals...");
		for (const mealDef of mealSeeds) {
			const recipes = await Recipe.find({
				title: { $in: mealDef.recipeTitles }
			});

			if (recipes.length !== mealDef.recipeTitles.length) {
				console.warn(
					`Skipping meal "${mealDef.title}" because not all recipes were found. Expected ${mealDef.recipeTitles.length}, found ${recipes.length}.`
				);
				continue;
			}

			const recipeIds = recipes.map(r => r._id);

			await Meal.create({
				title: mealDef.title,
				description: mealDef.description,
				recipeIds,
				assemblySteps: mealDef.assemblySteps,
				tags: mealDef.tags
			});

			console.log(`Created meal: ${mealDef.title}`);
		}

		console.log("Seed complete!");
	} catch (err) {
		console.error("Seed failed:", err);
	} finally {
		mongoose.connection.close();
	}
}

seed();