/* 
	#swagger.basePath = '/'
*/

// Required Imports (Core-Middleware-Routes-Models-Utils)
const express = require("express");
const router = express.Router();

// Health check
router.get("/", (req, res) => {
	/* 
		#swagger.tags = ['General']
		#swagger.summary = 'API health check'
		#swagger.description = 'Returns a simple message confirming the API is running.'
	*/
	res.json({ message: "Cooking Merrill(y) API is running! To log in, go to https://cooking-merrilly.onrender.com/auth/google and to view api routes, go to https://cooking-merrilly.onrender.com/api-docs" });
});

// Sub-Routers
router.use("/recipes", require("./recipes"));
router.use("/meals", require("./meals"));
router.use("/users", require("./users"));
router.use("/auth", require("./auth"));

module.exports = router;