//Imports
const mongoose = require("mongoose");

// Validate MongoDB ObjectID
function isValidObjectId(id) {
	return mongoose.Types.ObjectId.isValid(id);
}

// Validate recipe input data
function validateRecipeBody(body) {
	if (!body.title || typeof body.title !== "string" || !body.title.trim()) {
		return "Title is required and must be a non-empty string.";
	}

	const hasIngredients = Array.isArray(body.ingredients) && body.ingredients.length > 0;

	if (!hasIngredients) {
		return "Recipe must have at least one ingredient.";
	}

	// Optional: basic type checks
	if (body.prepTimeMinutes != null && typeof body.prepTimeMinutes !== "number") {
		return "prepTimeMinutes must be a number if provided.";
	}

	if (body.cookTimeMinutes != null && typeof body.cookTimeMinutes !== "number") {
		return "cookTimeMinutes must be a number if provided.";
	}

	return null;
}

module.exports = { isValidObjectId, validateRecipeBody };