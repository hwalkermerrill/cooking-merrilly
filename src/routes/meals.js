/* 
	#swagger.basePath = '/meals'
*/

// Required Imports (Core-Middleware-Routes-Models-Utils)
const express = require("express");
const router = express.Router();
const meals = require("../controllers/meals");

// GET all meals
router.get("/", (req, res) => {
	/* 
		#swagger.tags = ['Meals']
		#swagger.summary = 'Get all meals'
		#swagger.description = 'Returns all meals.'
	*/
	return meals.getAllMeals(req, res);
});

// GET meal by ID
router.get("/:id", (req, res) => {
	/* 
		#swagger.tags = ['Meals']
		#swagger.summary = 'Get meal by ID'
		#swagger.description = 'Returns a meal by its MongoDB ObjectId.'
	*/
	return meals.getMealById(req, res);
});

// GET meals by tag
router.get("/tag/:tag", (req, res) => {
	/* 
		#swagger.tags = ['Meals']
		#swagger.summary = 'Get meals by tag'
		#swagger.description = 'Returns meals that contain the specified tag.'
	*/
	return meals.getMealsByTag(req, res);
});

// GET meals by name
router.get("/name/:name", (req, res) => {
	/* 
		#swagger.tags = ['Meals']
		#swagger.summary = 'Search meals by name'
		#swagger.description = 'Returns meals whose title matches the search term.'
	*/
	return meals.getMealsByName(req, res);
});

// POST create meal
router.post("/", (req, res) => {
	/* 
		#swagger.tags = ['Meals']
		#swagger.summary = 'Create a new meal'
		#swagger.description = 'Creates a new meal.'
		#swagger.parameters['meal'] = {
			in: 'body',
			required: true,
			description: 'Meal data',
			schema: {
				title: 'Test Fettuccine Alfredo Computer Chips',
				description: 'Test - Fettuccine pasta finished in Alfredo sauce and topped with sliced strip steak.',
				recipeIds: ['60f7c2b5e1a4c12a34abcd12', '60f7c2b5e1a4c12a34abcd34'],
				assemblySteps: [
					'Prepare Fettuccine Pasta according to its recipe.',
					'Prepare Alfredo Sauce according to its recipe.',
					'Prepare Strip Steak for Alfredo and slice.',
					'Combine with computer chips and serve.'
				],
				tags: ['test', 'pasta', 'alfredo', 'cpu', 'italian']
			}
		}
	*/
	return meals.createMeal(req, res);
});

// PUT update meal
router.put("/:id", (req, res) => {
	/* 
			#swagger.tags = ['Meals']
			#swagger.summary = 'Update a meal'
			#swagger.description = 'Updates an existing meal by ID.'
			#swagger.parameters['id'] = {
				in: 'path',
				required: true,
				type: 'string',
				description: 'Meal ID'
			}
			#swagger.parameters['meal'] = {
				in: 'body',
				required: true,
				description: 'Updated meal data (partial or full)',
				schema: {
					title: 'Updated Meal Title',
					description: 'Optional updated description',
					tags: ['meal', 'updated'],
					assemblySteps: [
						'Updated assembly step'
					],
					recipeIds: ['60f7c2b5e1a4c12a34abcd12']
				}
			}
		*/
	return meals.updateMeal(req, res);
});

// DELETE meal
router.delete("/:id", (req, res) => {
	/* 
		#swagger.tags = ['Meals']
		#swagger.summary = 'Delete a meal'
		#swagger.description = 'Deletes a meal by ID.'
	*/
	return meals.deleteMeal(req, res);
});

module.exports = router;