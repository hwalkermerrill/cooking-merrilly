// Imports
const User = require("../models/User");
const Recipe = require("../models/Recipe");
const Meal = require("../models/Meal");
const { isValidObjectId } = require("../middleware/validation/users");

// GET /users
async function getAllUsers(req, res) {
	try {
		const users = await User.find().select("-__v");
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch users" });
	}
}

// GET /users/:id
async function getUserById(req, res) {
	const { id } = req.params;

	if (!isValidObjectId(id)) {
		return res.status(400).json({ error: "Invalid ID format" });
	}

	try {
		const user = await User.findById(id).select("-__v");

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		res.status(200).json(user);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch user" });
	}
}

// GET /users/me
async function getCurrentUser(req, res) {
	if (!req.user) {
		return res.status(401).json({ error: "Not authenticated" });
	}

	res.status(200).json(req.user);
}

// PUT /users/me
async function updateCurrentUser(req, res) {
	if (!req.user) {
		return res.status(401).json({ error: "Not authenticated" });
	}

	// Explicitly prevent role updates
	delete req.body.role;

	const allowedFields = ["displayName", "avatar"];
	const updates = {};

	for (const key of allowedFields) {
		if (req.body[key] !== undefined) {
			updates[key] = req.body[key];
		}
	}

	try {
		const updated = await User.findByIdAndUpdate(
			req.user._id,
			updates,
			{ new: true }
		);

		res.status(200).json(updated);
	} catch (err) {
		res.status(500).json({ error: "Failed to update user" });
	}
}

// PUT /users/:id/role  (admin only)
async function updateUserRole(req, res) {
	const { id } = req.params;
	const { role } = req.body;

	if (!isValidObjectId(id)) {
		return res.status(400).json({ error: "Invalid ID format" });
	}

	if (!["user", "admin"].includes(role)) {
		return res.status(400).json({ error: "Role must be 'user' or 'admin'" });
	}

	try {
		const updated = await User.findByIdAndUpdate(
			id,
			{ role },
			{ new: true }
		);

		if (!updated) {
			return res.status(404).json({ error: "User not found" });
		}

		res.status(200).json({
			message: "User role updated",
			user: updated
		});

	} catch (err) {
		res.status(500).json({ error: "Failed to update user role" });
	}
}

// POST /users/me/favorites/:recipeId
async function addFavorite(req, res) {
	if (!req.user) {
		return res.status(401).json({ error: "Not authenticated" });
	}

	const { recipeId } = req.params;
	const { type } = req.query; // ?type=recipe or ?type=meal

	if (!isValidObjectId(recipeId)) {
		return res.status(400).json({ error: "Invalid recipe ID format" });
	}

	if (!["recipe", "meal"].includes(type)) {
		return res.status(400).json({ error: "type must be 'recipe' or 'meal'" });
	}

	try {
		const user = await User.findById(req.user._id);
		const exists = user.favorites.some(
			fav => fav.itemId.toString() === recipeId && fav.itemType === type
		);

		if (!exists) {
			user.favorites.push({ itemId: recipeId, itemType: type });
			await user.save();
		}

		res.status(200).json({ message: "Recipe added to favorites", favorites: user.favorites });
	} catch (err) {
		res.status(500).json({ error: "Failed to add favorite" });
	}
}

// DELETE /users/me/favorites/:recipeId
async function removeFavorite(req, res) {
	if (!req.user) {
		return res.status(401).json({ error: "Not authenticated" });
	}

	const { recipeId } = req.params;
	const { type } = req.query;

	if (!isValidObjectId(recipeId)) {
		return res.status(400).json({ error: "Invalid recipe ID format" });
	}

	if (!["recipe", "meal"].includes(type)) {
		return res.status(400).json({ error: "type must be 'recipe' or 'meal'" });
	}

	try {
		const user = await User.findById(req.user._id);

		user.favorites = user.favorites.filter(
			fav => !(fav.itemId.toString() === recipeId && fav.itemType === type)
		);

		await user.save();

		res.status(200).json({ message: "Recipe removed from favorites", favorites: user.favorites });
	} catch (err) {
		res.status(500).json({ error: "Failed to remove favorite" });
	}
}

// POST /users/logout
async function logoutUser(req, res) {
	if (!req.user) {
		return res.status(400).json({ error: "No user is currently logged in" });
	}

	req.logout(err => {
		if (err) {
			return res.status(500).json({ error: "Logout failed", details: err.message });
		}

		req.session.destroy(() => {
			res.clearCookie("connect.sid"); // optional but recommended
			return res.status(200).json({ message: "Logged out successfully" });
		});
	});
}

async function getFavoriteDetails(req, res) {
	if (!req.user) {
		return res.status(401).json({ error: "Not authenticated" });
	}

	try {
		const user = await User.findById(req.user._id);

		const detailedFavorites = await Promise.all(
			user.favorites.map(async fav => {
				const Model = fav.itemType === "recipe" ? Recipe : Meal;
				const doc = await Model.findById(fav.itemId);

				return {
					itemId: fav.itemId,
					itemType: fav.itemType,
					data: doc || null
				};
			})
		);

		res.status(200).json(detailedFavorites);

	} catch (err) {
		res.status(500).json({ error: "Failed to fetch favorite details" });
	}
}

module.exports = {
	getAllUsers,
	getUserById,
	getCurrentUser,
	updateCurrentUser,
	addFavorite,
	removeFavorite,
	logoutUser,
	getFavoriteDetails,
	updateUserRole
};