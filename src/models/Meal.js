const mongoose = require("mongoose");

// Meal schema for grouping multiple recipes together
const mealSchema = new mongoose.Schema({
	title: { type: String, required: true, trim: true },
	description: { type: String, default: "" },

	// references to existing recipes
	recipeIds: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Recipe",
		required: true
	}],

	// optional extra steps for assembling the full meal
	assemblySteps: { type: [String], default: [] },

	// tags for the meal as a whole
	tags: { type: [String], default: [] }
}, { timestamps: true });

module.exports = mongoose.model("Meal", mealSchema);
