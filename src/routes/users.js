/* 
	#swagger.basePath = '/users'
*/

// Required Imports
const express = require("express");
const router = express.Router();
const users = require("../controllers/users");
const { ensureAuthenticated } = require("../middleware/auth");

// GET all users
router.get("/", (req, res) => {
	/* 
		#swagger.tags = ['Users']
		#swagger.summary = 'Get all users'
		#swagger.description = 'Returns all users in the system.'
	*/
	return users.getAllUsers(req, res);
});

// GET user by ID
router.get("/:id", (req, res) => {
	/* 
		#swagger.tags = ['Users']
		#swagger.summary = 'Get user by ID'
		#swagger.description = 'Returns a user by their MongoDB ObjectId.'
	*/
	return users.getUserById(req, res);
});

// GET current authenticated user
router.get("/me/info", (req, res) => {
	/* 
		#swagger.tags = ['Users']
		#swagger.summary = 'Get current user'
		#swagger.description = 'Returns the currently authenticated user.'
		#swagger.security = [{
			"googleOAuth": [],
			"githubOAuth": []
		}]
	*/
	return users.getCurrentUser(req, res);
});

// UPDATE current user
router.put("/me", (req, res) => {
	/* 
		#swagger.tags = ['Users']
		#swagger.summary = 'Update current user'
		#swagger.description = 'Updates the authenticated user’s profile information.'
		#swagger.security = [{
			"googleOAuth": [],
			"githubOAuth": []
		}]
		#swagger.parameters['user'] = {
			in: 'body',
			required: true,
			description: 'User description',
			schema: {
				displayName: 'Display Name',
				avatar: 'https://example.com/avatar.png'
			}
		}
	*/
	return users.updateCurrentUser(req, res);
});

// ADD favorite recipe
router.post("/me/favorites/:recipeId", (req, res) => {
	/* 
		#swagger.tags = ['Users']
		#swagger.summary = 'Add favorite recipe'
		#swagger.description = 'Adds a recipe to the user’s favorites list.'
		#swagger.security = [{
			"googleOAuth": [],
			"githubOAuth": []
		}]
		#swagger.parameters['type'] = {
			in: 'query',
			required: true,
			type: 'string',
			description: "Type of item to favorite: 'recipe' or 'meal'"
		}
	*/
	return users.addFavorite(req, res);
});

// REMOVE favorite recipe
router.delete("/me/favorites/:recipeId", (req, res) => {
	/* 
		#swagger.tags = ['Users']
		#swagger.summary = 'Remove favorite recipe'
		#swagger.description = 'Removes a recipe from the user’s favorites list.'
		#swagger.security = [{
			"googleOAuth": [],
			"githubOAuth": []
		}]
		#swagger.parameters['type'] = {
			in: 'query',
			required: true,
			type: 'string',
			description: "Type of item to remove: 'recipe' or 'meal'"
		}
	*/
	return users.removeFavorite(req, res);
});

router.get("/me/favorites/details", ensureAuthenticated, (req, res) => {
	/* 
		#swagger.tags = ['Users']
		#swagger.summary = 'Get detailed favorites'
		#swagger.description = 'Returns full details for each favorite recipe or meal.'
		#swagger.security = [{
			"googleOAuth": [],
			"githubOAuth": []
		}]
	*/
	return users.getFavoriteDetails(req, res);
});


// LOGOUT user
router.post("/logout", (req, res) => {
	/* 
		#swagger.tags = ['Users']
		#swagger.summary = 'Logout current user'
		#swagger.description = 'Logs out the currently authenticated user and destroys their session.'
		#swagger.security = [{
			"googleOAuth": [],
			"githubOAuth": []
		}]
	*/
	return users.logoutUser(req, res);
});

module.exports = router;