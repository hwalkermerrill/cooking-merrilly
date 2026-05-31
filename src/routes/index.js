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
	res.json({ message: "Cooking Merrill(y) API is running!" });
});

// Sub-Routers
router.use("/recipes", require("./recipes"));
router.use("/meals", require("./meals"));
// router.use("/users", require("./users"));

module.exports = router;