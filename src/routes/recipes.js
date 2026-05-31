// Required Imports (Core-Middleware-Routes-Models-Utils)
const express = require("express");
const router = express.Router();
const recipes = require("../controllers/recipes");

// GET all recipes
router.get("/", (req, res) => {
	/* 
		#swagger.tags = ['Recipes']
		#swagger.summary = 'Get all recipes'
		#swagger.description = 'Returns all public recipes.'
	*/
	return recipes.getAllRecipes(req, res);
});

// GET hidden recipes
router.get("/hidden", (req, res) => {
	/* 
		#swagger.tags = ['Recipes']
		#swagger.summary = 'Get hidden recipes'
		#swagger.description = 'Returns recipes where isPublic is false.'
	*/
	return recipes.getHiddenRecipes(req, res);
});

// GET recipe by ID
router.get("/id/:id", (req, res) => {
	/* 
		#swagger.tags = ['Recipes']
		#swagger.summary = 'Get recipe by ID'
		#swagger.description = 'Returns a recipe by its MongoDB ObjectId.'
		#swagger.parameters['id'] = {
			in: 'path',
			required: true,
			type: 'string',
			description: 'Recipe ID'
		}
	*/
	return recipes.getRecipeById(req, res);
});

// GET recipes by tag
router.get("/tag/:tag", (req, res) => {
	/* 
		#swagger.tags = ['Recipes']
		#swagger.summary = 'Get recipes by tag'
		#swagger.description = 'Returns recipes that contain the specified tag.'
	*/
	return recipes.getRecipesByTag(req, res);
});

// GET recipes by name
router.get("/name/:name", (req, res) => {
	/* 
		#swagger.tags = ['Recipes']
		#swagger.summary = 'Search recipes by name'
		#swagger.description = 'Returns recipes whose title matches the search term.'
	*/
	return recipes.getRecipesByName(req, res);
});

// POST create recipe
router.post("/", (req, res) => {
	/* 
		#swagger.tags = ['Recipes']
		#swagger.summary = 'Create a new recipe'
		#swagger.description = 'Creates a new recipe.'
		#swagger.parameters['recipe'] = {
			in: 'body',
			required: true,
			description: 'Recipe data'
		}
	*/
	return recipes.createRecipe(req, res);
});

// PUT update recipe
router.put("/:id", (req, res) => {
	/* 
		#swagger.tags = ['Recipes']
		#swagger.summary = 'Update a recipe'
		#swagger.description = 'Updates an existing recipe by ID.'
	*/
	return recipes.updateRecipe(req, res);
});

// DELETE recipe
router.delete("/:id", (req, res) => {
	/* 
		#swagger.tags = ['Recipes']
		#swagger.summary = 'Delete a recipe'
		#swagger.description = 'Deletes a recipe by ID.'
	*/
	return recipes.deleteRecipe(req, res);
});

module.exports = router;