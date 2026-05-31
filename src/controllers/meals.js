// Imports
const Meal = require("../models/Meal");
const { isValidObjectId, validateMealBody } = require("../middleware/validation/meals");

// GET /meals
async function getAllMeals(req, res) {
	try {
		const meals = await Meal.find();
		res.status(200).json(meals);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch meals" });
	}
}

// GET /meals/id/:id
async function getMealById(req, res) {
	//Validation
	const { id } = req.params;

	if (!isValidObjectId(id)) {
		return res.status(400).json({ error: "Invalid ID format" });
	}

	try {
		const meal = await Meal.findById(req.params.id);

		if (!meal) {
			return res.status(404).json({ error: "Meal not found" });
		}
		res.status(200).json(meal);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch meal" });
	}
}

// Get /meals/tag/:tag
async function getMealsByTag(req, res) {
	const { tag } = req.params;

	// Validation
	if (!tag || typeof tag !== "string") {
		return res.status(400).json({ error: "Tag must be a non-empty string" });
	}

	const normalizedTag = tag.trim().toLowerCase();

	try {
		const meals = await Meal.find({ tags: { $in: [normalizedTag] } });

		if (!meals || meals.length === 0) {
			return res.status(404).json({ error: "Tag not found in meals" });
		}
		res.status(200).json(meals);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch meals by tag" });
	}
}

// Get /meals/name/:name
async function getMealsByName(req, res) {
	const { name } = req.params;

	// Validation
	if (!name || typeof name !== "string") {
		return res.status(400).json({ error: "Name must be a non-empty string" });
	}

	const normalized = name.trim().toLowerCase().replace(/[-_]+/g, " ");

	try {
		const meals = await Meal.find({ title: { $regex: normalized, $options: "i" } });

		if (!meals || meals.length === 0) {
			return res.status(404).json({ error: "Meal not found" });
		}
		res.status(200).json(meals);
	} catch (err) {
		res.status(500).json({ error: "Failed to search meals by name" });
	}
}

// POST /meals
async function createMeal(req, res) {
	//Validation
	const validationError = validateMealBody(req.body);
	if (validationError) {
		return res.status(400).json({ error: validationError });
	}

	try {
		const meal = new Meal(req.body);
		await meal.save();
		res.status(201).json(meal);
	} catch (err) {
		res.status(500).json({ error: "Failed to create meal", details: err.message });
	}
}

// PUT /meals/:id
async function updateMeal(req, res) {
	//Validation
	const { id } = req.params;

	if (!isValidObjectId(id)) {
		return res.status(400).json({ error: "Invalid ID format" });
	}

	const validationError = validateMealBody(req.body);
	if (validationError) {
		return res.status(400).json({ error: validationError });
	}

	try {
		const updated = await Meal.findByIdAndUpdate(
			id,
			req.body,
			{ new: true }
		);

		if (!updated) {
			return res.status(404).json({ error: "Meal not found" });
		}

		res.status(200).json(updated);
	} catch (err) {
		res.status(500).json({ error: "Failed to update meal", details: err.message });
	}
}

// DELETE /meals/:id
async function deleteMeal(req, res) {
	//Validation
	const { id } = req.params;

	if (!isValidObjectId(id)) {
		return res.status(400).json({ error: "Invalid ID format" });
	}

	try {
		const deleted = await Meal.findByIdAndDelete(id);

		if (!deleted) {
			return res.status(404).json({ error: "Meal not found" });
		}

		res.status(200).json({ message: "Meal deleted" });
	} catch (err) {
		res.status(500).json({ error: "Failed to delete meal" });
	}
}

module.exports = {
	getAllMeals,
	getMealById,
	getMealsByName,
	getMealsByTag,
	createMeal,
	updateMeal,
	deleteMeal
};