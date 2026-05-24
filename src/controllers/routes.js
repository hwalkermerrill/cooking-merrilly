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
			"201": { "description": "Created" },
			"400": { "description": "Bad Request" }
		}

		#swagger.parameters = [
			{
				"name": "recipe",
				"in": "body",
				"required": true,
				"description": "Recipe data",
				"schema": {
					"type": "object",
					"properties": {
						"title": { "type": "string", "example": "Example Recipe" },
						"description": { "type": "string" },
						"ingredients": {
							"type": "array",
							"items": {
								"type": "object",
								"properties": {
									"text": { "type": "string" },
									"optional": { "type": "boolean" },
									"secret": { "type": "boolean" }
								}
							},
							"example": [
								{ "text": "1 cup flour" },
								{ "text": "2 eggs", "optional": true }
							]
						},
						"steps": {
							"type": "array",
							"items": { "type": "string" },
							"example": ["Mix ingredients", "Bake at 350F for 20 minutes"]
						},
						"tags": {
							"type": "array",
							"items": { "type": "string" },
							"example": ["baking", "dessert"]
						},
						"sections": {
							"type": "array",
							"items": {
								"type": "object",
								"properties": {
									"title": { "type": "string" },
									"ingredients": {
										"type": "array",
										"items": {
											"type": "object",
											"properties": {
												"text": { "type": "string" },
												"optional": { "type": "boolean" },
												"secret": { "type": "boolean" }
											}
										}
									},
									"steps": {
										"type": "array",
										"items": { "type": "string" }
									}
								}
							}
						},
						"pairings": { "type": "string" },
						"prepTimeMinutes": { "type": "number" },
						"cookTimeMinutes": { "type": "number" },
						"yield": { "type": "string" },
						"variations": {
							"type": "array",
							"items": {
								"type": "object",
								"properties": {
									"author": { "type": "string" },
									"notes": { "type": "string" },
									"ingredients": {
										"type": "array",
										"items": {
											"type": "object",
											"properties": {
												"text": { "type": "string" },
												"optional": { "type": "boolean" },
												"secret": { "type": "boolean" }
											}
										}
									},
									"steps": {
										"type": "array",
										"items": { "type": "string" }
									}
								}
							}
						}
					}
				}
			}
		]
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
				"name": "id",
				"in": "path",
				"required": true,
				"type": "string",
				"description": "Recipe ID"
			},
			{
				"name": "recipe",
				"in": "body",
				"required": true,
				"description": "Updated recipe data",
				"schema": {
					"type": "object",
					"properties": {
						"title": { "type": "string", "example": "Updated Recipe Title" },
						"description": { "type": "string" },
						"ingredients": {
							"type": "array",
							"items": {
								"type": "object",
								"properties": {
									"text": { "type": "string" },
									"optional": { "type": "boolean" },
									"secret": { "type": "boolean" }
								}
							}
						},
						"steps": {
							"type": "array",
							"items": { "type": "string" }
						},
						"sections": {
							"type": "array",
							"items": {
								"type": "object",
								"properties": {
									"title": { "type": "string" },
									"ingredients": {
										"type": "array",
										"items": {
											"type": "object",
											"properties": {
												"text": { "type": "string" },
												"optional": { "type": "boolean" },
												"secret": { "type": "boolean" }
											}
										}
									},
									"steps": {
										"type": "array",
										"items": { "type": "string" }
									}
								}
							}
						},
						"tags": {
							"type": "array",
							"items": { "type": "string" }
						},
						"pairings": { "type": "string" },
						"prepTimeMinutes": { "type": "number" },
						"cookTimeMinutes": { "type": "number" },
						"yield": { "type": "string" },
						"variations": {
							"type": "array",
							"items": {
								"type": "object",
								"properties": {
									"author": { "type": "string" },
									"notes": { "type": "string" },
									"ingredients": {
										"type": "array",
										"items": {
											"type": "object",
											"properties": {
												"text": { "type": "string" },
												"optional": { "type": "boolean" },
												"secret": { "type": "boolean" }
											}
										}
									},
									"steps": {
										"type": "array",
										"items": { "type": "string" }
									}
								}
							}
						}
					}
				}
			}
		]
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