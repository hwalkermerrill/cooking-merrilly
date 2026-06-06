// Imports
const mongoose = require("mongoose");

// Validate MongoDB ObjectID
function isValidObjectId(id) {
	return mongoose.Types.ObjectId.isValid(id);
}

// Validate user profile update
function validateUserUpdate(body) {
	const errors = [];
	if (!body || typeof body !== "object") {
		errors.push("Request body is required.");
		return errors;
	}

	if (body.displayName !== undefined) {
		if (typeof body.displayName !== "string" || !body.displayName.trim()) {
			errors.push("displayName must be a non-empty string.");
		}
	}

	if (body.avatar !== undefined) {
		if (typeof body.avatar !== "string" || !body.avatar.trim()) {
			errors.push("Avatar must be a non-empty string URL.");
		}
	}

	return errors.length > 0 ? errors.join(" ") : null;
}

function validateFavoriteType(type) {
	if (!["recipe", "meal"].includes(type)) {
		return "type must be 'recipe' or 'meal'.";
	}
	return null;
}

module.exports = {
	isValidObjectId,
	validateUserUpdate,
	validateFavoriteType
};