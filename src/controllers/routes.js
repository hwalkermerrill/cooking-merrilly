// Required Imports (Core-Middleware-Routes-Models-Utils)
const express = require("express");
const router = express.Router();
const recipes = require("./recipes");

// Health check
router.get("/", (req, res) => {
	/* 
		#swagger.tags = ['General']
		#swagger.summary = 'API health check'
		#swagger.description = 'Returns a simple message confirming the API is running.'
	*/
	res.json({ message: "Cooking Merrill(y) API is running!" });
});

// GET all recipes
router.get("/recipes", (req, res) => {
	/* 
		#swagger.tags = ['Recipes']
		#swagger.summary = 'Get all recipes'
		#swagger.description = 'Returns a list of all recipes in the database.'
	*/
	return recipes.getAllRecipes(req, res);
});

// GET recipe by ID
router.get("/recipes/:id", (req, res) => {
	/* 
		#swagger.tags = ['Recipes']
		#swagger.summary = 'Get a recipe by ID'
		#swagger.description = 'Returns a single recipe based on its MongoDB ObjectId.'
		#swagger.parameters = [
			{
				name: 'id',
				in: 'path',
				required: true,
				type: 'string',
				description: 'Recipe ID'
			}
		]
	*/
	return recipes.getRecipeById(req, res);
});

// POST create recipe
router.post("/recipes", (req, res) => {
	/* 
		#swagger.tags = ['Recipes']
		#swagger.summary = 'Create a new recipe'
		#swagger.description = 'Creates a new recipe using the provided JSON body.'
		#swagger.responses = {
			201: { description: 'Recipe created successfully' },
			400: { description: 'Bad Request' }
		}
		#swagger.requestBody = {
			required: true,
			content: {
				"application/json": {
					schema: {
						title: "Example Recipe",
						ingredients: [
							{ text: "1 cup flour" },
							{ text: "2 eggs", optional: true }
						],
						steps: ["Mix ingredients", "Bake at 350F for 20 minutes"],
						tags: ["baking", "dessert"]
					}
				}
			}
		}
	*/
	return recipes.createRecipe(req, res);
});


// PUT update recipe
router.put("/recipes/:id", (req, res) => {
	/* 
		#swagger.tags = ['Recipes']
		#swagger.summary = 'Update a recipe'
		#swagger.description = 'Updates a recipe by its ID.'
		#swagger.parameters = [
			{
				name: 'id',
				in: 'path',
				required: true,
				type: 'string',
				description: 'Recipe ID'
			}
		]
		#swagger.requestBody = {
			required: true,
			content: {
				"application/json": {
					schema: {
						title: "Updated Recipe Title"
					}
				}
			}
		}
	*/
	return recipes.updateRecipe(req, res);
});

// DELETE recipe
router.delete("/recipes/:id", (req, res) => {
	/* 
		#swagger.tags = ['Recipes']
		#swagger.summary = 'Delete a recipe'
		#swagger.description = 'Deletes a recipe by its ID.'
		#swagger.parameters = [
			{
				name: 'id',
				in: 'path',
				required: true,
				type: 'string',
				description: 'Recipe ID'
			}
		]
	*/
	return recipes.deleteRecipe(req, res);
});

module.exports = router;