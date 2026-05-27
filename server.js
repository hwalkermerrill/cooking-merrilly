// Required Imports (Core-Middleware-Routes-Models-Utils)
const dotenv = require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("./src/models/connection");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");

// Constants
const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || "production";

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Dev Logging
const devLogs = (req, res, next) => {
	const isDev = NODE_ENV === "development";

	if (isDev && !req.path.startsWith("/.")) {
		console.log(`INCOMING: ${req.method} ${req.url}`);
	}

	res.on("finish", () => {
		if (!isDev) return;

		if (Object.keys(req.query).length > 0) {
			console.log("Query:", req.query);
		}
		if (Object.keys(req.params).length > 0) {
			console.log("Params:", req.params);
		}
		console.log(`Response Status: ${res.statusCode}`);
	});

	next();
};

app.use(devLogs);

// Swagger Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Routes
app.use("/", require("./src/routes"));

// Start Server After DB Connects
mongoose.connection.once("open", () => {
	app.listen(PORT, () => {
		console.log(`Server is running on http://127.0.0.1:${PORT}`);
	});
});
