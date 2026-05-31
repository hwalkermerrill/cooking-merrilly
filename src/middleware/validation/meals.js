//Imports
const mongoose = require("mongoose");

// Validate MongoDB ObjectID
function isValidObjectId(id) {
	return mongoose.Types.ObjectId.isValid(id);
}

// Validate meal input data
function validateMealBody(body) {
	if (!body.title || typeof body.title !== "string" || !body.title.trim()) {
		return "Title is required and must be a non-empty string.";
	}

	if (!Array.isArray(body.recipeIds) || body.recipeIds.length === 0) {
		return "Meal must include at least one recipeId.";
	}

	const invalidId = body.recipeIds.find(id => !isValidObjectId(id));
	if (invalidId) {
		return `Invalid recipeId: ${invalidId}`;
	}

	return null;
}

module.exports = { isValidObjectId, validateMealBody };