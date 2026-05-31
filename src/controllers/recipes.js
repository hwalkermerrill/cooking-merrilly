// Imports
const Recipe = require("../models/Recipe");
const { isValidObjectId, validateRecipeBody } = require("../middleware/validation/recipes");

// GET /recipes
async function getAllRecipes(req, res) {
	try {
		const recipes = await Recipe.find({ isPublic: true });
		res.status(200).json(recipes);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch recipes" });
	}
}

// GET /recipes/hidden
async function getHiddenRecipes(req, res) {
	try {
		const recipes = await Recipe.find({ isPublic: false });
		res.status(200).json(recipes);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch hidden recipes" });
	}
}

// GET /recipes/id/:id
async function getRecipeById(req, res) {
	//Validation
	const { id } = req.params;

	if (!isValidObjectId(id)) {
		return res.status(400).json({ error: "Invalid ID format" });
	}

	try {
		const recipe = await Recipe.findById(req.params.id);

		if (!recipe) {
			return res.status(404).json({ error: "Recipe not found" });
		}
		res.status(200).json(recipe);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch recipe" });
	}
}

// Get /recipes/tag/:tag
async function getRecipesByTag(req, res) {
	const { tag } = req.params;

	// Validation
	if (!tag || typeof tag !== "string") {
		return res.status(400).json({ error: "Tag must be a non-empty string" });
	}

	const normalizedTag = tag.trim().toLowerCase();

	try {
		const recipes = await Recipe.find({
			isPublic: true,
			tags: { $in: [normalizedTag] }
		});

		if (!recipes || recipes.length === 0) {
			return res.status(404).json({ error: "Tag not found in recipes" });
		}
		res.status(200).json(recipes);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch recipes by tag" });
	}
}

// Get /recipes/name/:name
async function getRecipesByName(req, res) {
	const { name } = req.params;

	// Validation
	if (!name || typeof name !== "string") {
		return res.status(400).json({ error: "Name must be a non-empty string" });
	}

	const normalized = name.trim().toLowerCase().replace(/[-_]+/g, " ");

	try {
		const recipes = await Recipe.find({
			isPublic: true,
			title: { $regex: normalized, $options: "i" } // case-insensitive
		});

		if (!recipes || recipes.length === 0) {
			return res.status(404).json({ error: "Recipe not found" });
		}
		res.status(200).json(recipes);
	} catch (err) {
		res.status(500).json({ error: "Failed to search recipes by name" });
	}
}

// POST /recipes
async function createRecipe(req, res) {
	//Validation
	const validationError = validateRecipeBody(req.body);
	if (validationError) {
		return res.status(400).json({ error: validationError });
	}

	try {
		const recipe = new Recipe(req.body);
		await recipe.save();
		res.status(201).json(recipe);
	} catch (err) {
		res.status(500).json({ error: "Failed to create recipe", details: err.message });
	}
}

// PUT /recipes/:id
async function updateRecipe(req, res) {
	//Validation
	const { id } = req.params;

	if (!isValidObjectId(id)) {
		return res.status(400).json({ error: "Invalid ID format" });
	}

	const validationError = validateRecipeBody(req.body);
	if (validationError) {
		return res.status(400).json({ error: validationError });
	}

	try {
		const updated = await Recipe.findByIdAndUpdate(
			id,
			req.body,
			{ new: true }
		);

		if (!updated) {
			return res.status(404).json({ error: "Recipe not found" });
		}

		res.status(200).json(updated);
	} catch (err) {
		res.status(500).json({ error: "Failed to update recipe", details: err.message });
	}
}

// DELETE /recipes/:id
async function deleteRecipe(req, res) {
	//Validation
	const { id } = req.params;

	if (!isValidObjectId(id)) {
		return res.status(400).json({ error: "Invalid ID format" });
	}

	try {
		const deleted = await Recipe.findByIdAndDelete(id);

		if (!deleted) {
			return res.status(404).json({ error: "Recipe not found" });
		}

		res.status(200).json({ message: "Recipe deleted" });
	} catch (err) {
		res.status(500).json({ error: "Failed to delete recipe" });
	}
}

module.exports = {
	getAllRecipes,
	getHiddenRecipes,
	getRecipeById,
	getRecipesByName,
	getRecipesByTag,
	createRecipe,
	updateRecipe,
	deleteRecipe
};