const express = require("express");
const router = express.Router();
const recipes = require("./recipes");

router.get("/", (req, res) => {
	/* 
		#swagger.tags = ['General']
		#swagger.summary = 'API health check'
		#swagger.description = 'Returns a simple message confirming the API is running.'
	*/
	res.json({ message: "Cooking Merrill(y) API is running!" });
});

// Recipe routes
router.get("/recipes", recipes.getAllRecipes);
/*
	#swagger.tags = ['Recipes']
	#swagger.summary = 'Get all recipes'
	#swagger.description = 'Returns a list of all recipes in the database.'
*/
router.get("/recipes/:id", recipes.getRecipeById);
/*
	#swagger.tags = ['Recipes']
	#swagger.summary = 'Get a recipe by ID'
	#swagger.description = 'Returns a single recipe based on its MongoDB ObjectId.'
	#swagger.parameters['id'] = {
			in: 'path',
			description: 'Recipe ID',
			required: true,
			type: 'string'
	}
*/
router.post("/recipes", recipes.createRecipe);
/*
	#swagger.tags = ['Recipes']
	#swagger.summary = 'Create a new recipe'
	#swagger.description = 'Creates a new recipe using the provided JSON body.'
	#swagger.parameters['recipe'] = {
			in: 'body',
			description: 'Recipe data',
			required: true,
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
	#swagger.responses[201] = {
			description: 'Recipe created successfully'
	}
*/
router.put("/recipes/:id", recipes.updateRecipe);
/*
	#swagger.tags = ['Recipes']
	#swagger.summary = 'Update a recipe'
	#swagger.description = 'Updates a recipe by its ID.'
	#swagger.parameters['id'] = {
			in: 'path',
			description: 'Recipe ID',
			required: true,
			type: 'string'
	}
	#swagger.parameters['recipe'] = {
			in: 'body',
			description: 'Updated recipe data',
			required: true,
			schema: {
				title: "Updated Recipe Title"
			}
	}
*/
router.delete("/recipes/:id", recipes.deleteRecipe);
/*
	#swagger.tags = ['Recipes']
	#swagger.summary = 'Delete a recipe'
	#swagger.description = 'Deletes a recipe by its ID.'
	#swagger.parameters['id'] = {
			in: 'path',
			description: 'Recipe ID',
			required: true,
			type: 'string'
	}
*/

module.exports = router;