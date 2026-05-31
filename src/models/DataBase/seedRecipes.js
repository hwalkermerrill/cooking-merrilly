const fettuccinePasta = {
	title: "Fettuccine Pasta",
	description: "Basic fettuccine noodles cooked until mostly done.",
	tags: ["pasta", "base"],
	pairings: "Use as a base for Alfredo or other pasta dishes.",
	ingredients: [
		{ text: "2 packages fettuccine noodles" }
	],
	steps: [
		"Cook fettuccine noodles in salted boiling water according to package directions until mostly done.",
		"Drain and reserve for finishing in sauce."
	],
	prepTimeMinutes: 5,
	cookTimeMinutes: 10,
	yield: "Pasta for 4–6 servings",
	isPublic: false
};

const stripSteak = {
	title: "Sliced Strip Steak",
	description: "Seasoned strip steak cooked to preferred doneness for serving with pasta or salad.",
	tags: ["steak", "main", "protein", "pasta", "salad"],
	pairings: "Serve over pasta, with Alfredo sauce, or alongside vegetables.",
	ingredients: [
		{ text: "1 ½ inch thick strip steak" },
		{ text: "Salt" },
		{ text: "Pepper" },
		{ text: "Balsamic vinegar" },
		{ text: "Garlic powder" },
		{ text: "Onion powder" },
		{ text: "Paprika" },
		{ text: "Montreal steak seasoning", optional: true },
		{ text: "Grapeseed oil" }
	],
	steps: [
		"Score steak diagonally and season with salt, pepper, balsamic vinegar, garlic powder, onion powder, and paprika.",
		"Heat a pan with a small amount of grapeseed oil.",
		"Cook steak seasoning-side down, then season the other side with salt and pepper.",
		"Cook to preferred doneness and set aside to rest before slicing."
	],
	prepTimeMinutes: 10,
	cookTimeMinutes: 15,
	yield: "Serves 2-4 depending on portion size",
	isPublic: true
};

const alfredoSauce = {
	title: "Alfredo Sauce",
	description: "Rich, creamy Alfredo sauce for pasta or other dishes.",
	tags: ["sauce", "alfredo", "italian"],
	pairings: "Serve over fettuccine, bow-tie pasta, or as a base for other dishes.",
	ingredients: [
		{ text: "1 stick butter" },
		{ text: "3 cloves garlic" },
		{ text: "1 tsp pepper" },
		{ text: "½ tsp salt" },
		{ text: "2 tbsp flour" },
		{ text: "1 ½ cup Parmigiano Reggiano" },
		{ text: "1 ½ cup Pecorino Romano" },
		{ text: "¼ cup parsley" },
		{ text: "Italian seasoning" },
		{ text: "2 cups heavy cream" }
	],
	steps: [
		"On low heat, melt butter with garlic, pepper, and salt.",
		"Slowly whisk in flour until smooth.",
		"Add cheeses, parsley, and Italian seasoning.",
		"Increase to medium heat and whisk in heavy cream until fully combined."
	],
	prepTimeMinutes: 10,
	cookTimeMinutes: 15,
	yield: "Sauce for 4-6 servings of pasta",
	isPublic: true
};

const gyroMeat = {
	title: "Gyro Meat",
	description: "Roasted or smoked lamb or chicken, sliced thinly for gyros.",
	tags: ["gyro", "meat", "greek", "protein", "chicken", "lamb"],
	pairings: "Serve in pita with tzatziki, vegetables, or over rice.",
	ingredients: [
		{ text: "Gyro meat or chicken" }
	],
	steps: [
		"Roast or smoke gyro meat or chicken until fully cooked.",
		"Let rest briefly, then slice thinly for serving in gyros."
	],
	prepTimeMinutes: 10,
	cookTimeMinutes: 60,
	yield: "Enough meat for about 4 gyros",
	isPublic: true
};

const tzatzikiSauce = {
	title: "Tzatziki Sauce",
	description: "Chilled Greek yogurt and cucumber sauce.",
	tags: ["sauce", "greek", "mediterranean", "tzatziki"],
	pairings: "Serve with gyros, pita, grilled meats, or veggies.",
	ingredients: [
		{ text: "16 oz Greek yogurt" },
		{ text: "1 medium cucumber (or 3 Japanese cucumbers)" },
		{ text: "1 tbsp finely minced garlic" },
		{ text: "1 tbsp olive oil" },
		{ text: "Salt" },
		{ text: "Onion powder" },
		{ text: "Garlic powder" }
	],
	steps: [
		"Peel and grate the cucumber, sprinkle with salt, and place on a plate.",
		"Add a weight to press out liquid for 20-30 minutes.",
		"Drain and squeeze cucumber in a kitchen towel.",
		"Mix yogurt, cucumber, garlic, olive oil, salt, onion powder, and garlic powder together well.",
		"Refrigerate for at least 3 hours before serving."
	],
	prepTimeMinutes: 20,
	cookTimeMinutes: 0,
	yield: "Serves 4",
	isPublic: true
};

const hummus = {
	title: "Hummus",
	description: "Quick homemade hummus with optional sweet or spicy additions.",
	tags: ["dip", "mediterranean", "sauce", "dairy-free", "vegan"],
	pairings: "Serve with pita, veggies, or as a side to gyros.",
	ingredients: [
		{ text: "8 oz store-bought hummus" },
		{ text: "1 tbsp olive oil" },
		{ text: "1 tbsp garlic paste or powder" },
		{ text: "1/2 tbsp lemon juice" },
		{ text: "1/2 tbsp crushed red pepper" },
		{ text: "1/2 tbsp honey", secret: true },
		{ text: "1-2 oz feta cheese", optional: true },
		{ text: "Dates", optional: true }
	],
	steps: [
		"Mix all ingredients together.",
		"Adjust measurements to taste."
	],
	prepTimeMinutes: 5,
	cookTimeMinutes: 0,
	yield: "Serves 4-6",
	isPublic: true
};

module.exports = {
	fettuccinePasta,
	stripSteak,
	alfredoSauce,
	gyroMeat,
	tzatzikiSauce,
	hummus
};