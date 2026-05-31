const swaggerAutogen = require("swagger-autogen")();

const doc = {
	info: {
		title: "Cooking Merrill(y) API",
		description: "API documentation for the Cooking Merrill(y) project"
	},
	host: "cooking-merrilly.onrender.com",
	schemes: ["https"]
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./src/routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);