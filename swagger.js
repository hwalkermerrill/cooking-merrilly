const swaggerAutogen = require("swagger-autogen")();

const doc = {
	info: {
		title: "Cooking Merrill(y) API",
		description: "API documentation for the Cooking Merrill(y) project"
	},
	host: "cooking-merrilly.onrender.com",
	schemes: ["https"],

	// OAuth
	securityDefinitions: {
		googleOAuth: {
			type: "oauth2",
			flow: "accessCode",
			authorizationUrl: "https://accounts.google.com/o/oauth2/v2/auth",
			tokenUrl: "https://oauth2.googleapis.com/token",
			scopes: {
				profile: "Access your basic profile info",
				email: "Access your email address"
			}
		},
		githubOAuth: {
			type: "oauth2",
			flow: "accessCode",
			authorizationUrl: "https://github.com/login/oauth/authorize",
			tokenUrl: "https://github.com/login/oauth/access_token",
			scopes: {
				user: "Read your GitHub profile"
			}
		}
	}
};

const outputFile = "./swagger-output.json";
const endpointsFiles = [
	"./src/routes/index.js"
];

swaggerAutogen(outputFile, endpointsFiles, doc);