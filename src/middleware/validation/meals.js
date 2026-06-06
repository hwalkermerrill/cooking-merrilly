//Imports
const mongoose = require("mongoose");

// Validate MongoDB ObjectID
function isValidObjectId(id) {
	return mongoose.Types.ObjectId.isValid(id);
}

// Validate meal input data
function validateMealBody(body) {
	const errors = [];

	if (!body.title || typeof body.title !== "string" || !body.title.trim()) {
		errors.push("Title is required and must be a non-empty string.");
	}

	if (!Array.isArray(body.recipeIds) || body.recipeIds.length === 0) {
		errors.push("Meal must include at least one recipeId.");
	} else {
		const invalidId = body.recipeIds.find(id => !isValidObjectId(id));
		if (invalidId) {
			errors.push(`Invalid recipeId: ${invalidId}`);
		}
	}

	return errors.length > 0 ? errors.join(" ") : null;
}

module.exports = { isValidObjectId, validateMealBody };