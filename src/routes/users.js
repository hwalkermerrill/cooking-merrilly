/* 
	#swagger.basePath = '/users'
*/

/* 
	NOTE: All user routes require OAuth session authentication.
	Log in via /auth/google or /auth/github before calling these routes.
*/

// Required Imports (Core-Middleware-Routes-Models-Utils)
const express = require("express");
const router = express.Router();
const { requireAuth, requireAdmin } = require("../middleware/auth");
const users = require("../controllers/users");

// GET all users
router.get("/", requireAdmin, (req, res) => {
	/* 
		#swagger.tags = ['Users']
		#swagger.summary = 'Get all users'
		#swagger.security = [{
			"googleOAuth": [],
			"githubOAuth": []
		}]
		#swagger.description = 'Returns all users in the system. Admin access required.'
	*/
	return users.getAllUsers(req, res);
});

// GET user by ID
router.get("/:id", requireAdmin, (req, res) => {
	/* 
		#swagger.tags = ['Users']
		#swagger.summary = 'Get user by ID'
		#swagger.security = [{
			"googleOAuth": [],
			"githubOAuth": []
		}]
		#swagger.description = 'Returns a user by their MongoDB ObjectId. Admin access required.'
	*/
	return users.getUserById(req, res);
});

// GET current authenticated user
router.get("/me/info", requireAuth, (req, res) => {
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
router.put("/me", requireAuth, (req, res) => {
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

// UPDATE user role (admin only)
router.put("/:id/role", requireAdmin, (req, res) => {
	/* 
			#swagger.tags = ['Users']
			#swagger.summary = 'Update a user’s role (admin only)'
			#swagger.description = 'Allows an admin to change a user’s role to user or admin.'
			#swagger.security = [{
					"googleOAuth": [],
					"githubOAuth": []
			}]
			#swagger.parameters['id'] = {
					in: 'path',
					required: true,
					type: 'string',
					description: 'User ID'
			}
			#swagger.parameters['role'] = {
					in: 'body',
					required: true,
					description: 'New role for the user',
					schema: {
							role: "admin"
					}
			}
	*/
	return users.updateUserRole(req, res);
});

// ADD favorite recipe
router.post("/me/favorites/:recipeId", requireAuth, (req, res) => {
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
router.delete("/me/favorites/:recipeId", requireAuth, (req, res) => {
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

router.get("/me/favorites/details", requireAuth, (req, res) => {
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