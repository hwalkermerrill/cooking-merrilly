//Imports
const mongoose = require("mongoose");

// Validate MongoDB ObjectID
function isValidObjectId(id) {
	return mongoose.Types.ObjectId.isValid(id);
}

// Validate recipe input data
function validateRecipeBody(body) {
	const errors = [];

	if (!body.title || typeof body.title !== "string" || !body.title.trim()) {
		errors.push("Title is required and must be a non-empty string.");
	}

	const hasIngredients = Array.isArray(body.ingredients) && body.ingredients.length > 0;
	if (!hasIngredients) {
		errors.push("Recipe must have at least one ingredient.");
	}

	if (body.prepTimeMinutes != null && typeof body.prepTimeMinutes !== "number") {
		errors.push("prepTimeMinutes must be a number if provided.");
	}

	if (body.cookTimeMinutes != null && typeof body.cookTimeMinutes !== "number") {
		errors.push("cookTimeMinutes must be a number if provided.");
	}

	return errors.length > 0 ? errors.join(" ") : null;
}

module.exports = { isValidObjectId, validateRecipeBody };