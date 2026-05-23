const Recipe = require("../models/Recipe");

// GET /recipes
async function getAllRecipes(req, res) {
	try {
		const recipes = await Recipe.find();
		res.json(recipes);
	} catch (err) {
		res.status(500).json({ error: "Failed to fetch recipes" });
	}
}

// GET /recipes/:id
async function getRecipeById(req, res) {
	try {
		const recipe = await Recipe.findById(req.params.id);
		if (!recipe) {
			return res.status(404).json({ error: "Recipe not found" });
		}
		res.json(recipe);
	} catch (err) {
		res.status(400).json({ error: "Invalid ID format" });
	}
}

// POST /recipes
async function createRecipe(req, res) {
	try {
		const recipe = new Recipe(req.body);
		await recipe.save();
		res.status(201).json(recipe);
	} catch (err) {
		res.status(400).json({ error: "Failed to create recipe", details: err.message });
	}
}

// PUT /recipes/:id
async function updateRecipe(req, res) {
	try {
		const updated = await Recipe.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);

		if (!updated) {
			return res.status(404).json({ error: "Recipe not found" });
		}

		res.json(updated);
	} catch (err) {
		res.status(400).json({ error: "Failed to update recipe", details: err.message });
	}
}

// DELETE /recipes/:id
async function deleteRecipe(req, res) {
	try {
		const deleted = await Recipe.findByIdAndDelete(req.params.id);

		if (!deleted) {
			return res.status(404).json({ error: "Recipe not found" });
		}

		res.json({ message: "Recipe deleted" });
	} catch (err) {
		res.status(400).json({ error: "Failed to delete recipe" });
	}
}

module.exports = {
	getAllRecipes,
	createRecipe,
	getRecipeById,
	updateRecipe,
	deleteRecipe
};
