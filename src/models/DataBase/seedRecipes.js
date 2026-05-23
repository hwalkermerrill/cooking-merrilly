const fettuccineAlfredo = {
	title: "Fettuccine Alfredo",
	description: "Rich homemade Alfredo with optional steak, shrimp, or chicken.",
	tags: ["pasta", "alfredo", "italian", "comfort-food", "main", "sauce"],
	pairings: "Serve with breadsticks and salad.",
	ingredients: [
		{ text: "2 packages Fettuccine noodles" },
		{ text: "1 stick of butter" },
		{ text: "2 tbsp flour" },
		{ text: "3 cloves of garlic" },
		{ text: "2 cups heavy whipping cream" },
		{ text: "1 ½ cup Parmigiano Reggiano" },
		{ text: "1 ½ cup Pecorino Romano" },
		{ text: "¼ cup parsley" },
		{ text: "Salt" },
		{ text: "Pepper" },
		{ text: "Italian seasoning" },
		{ text: "Steak, shrimp, or chicken", optional: true }
	],
	sections: [
		{
			title: "Steak Preparation",
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
				"Heat pan with a small amount of grapeseed oil.",
				"Cook steak seasoning-side down, then season the other side with salt and pepper.",
				"Cook to preferred doneness and set aside to rest."
			]
		},
		{
			title: "Alfredo Sauce",
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
			]
		},
		{
			title: "Assembly",
			ingredients: [
				{ text: "2 packages mostly cooked fettuccine noodles" },
				{ text: "Prepared steak, sliced" }
			],
			steps: [
				"Move mostly cooked fettuccine into the sauce to finish cooking.",
				"Stir vigorously to coat.",
				"Slice steak and add to pasta."
			]
		}
	],
	steps: [],
	prepTimeMinutes: 20,
	cookTimeMinutes: 25,
	yield: "Serves 4-6"
};

const gyros = {
	title: "Gyros",
	description: "Homemade gyros with chilled tzatziki sauce.",
	tags: ["greek", "sauce", "main", "mediterranean", "tzatziki"],
	pairings: "Serve with hummus and julienned veggies.",
	ingredients: [
		// Gyro ingredients (if any beyond tzatziki)
		{ text: "Pita bread" },
		{ text: "Cooked gyro meat or chicken" },
		{ text: "Lettuce", optional: true },
		{ text: "Tomato", optional: true },
		{ text: "Onion", optional: true }
	],
	sections: [
		{
			title: "Tzatziki Sauce",
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
				"Mix all ingredients together well.",
				"Refrigerate for at least 3 hours before serving."
			]
		},
		{
			title: "Gyros Assembly",
			ingredients: [
				{ text: "Prepared tzatziki sauce" },
				{ text: "Pita bread" },
				{ text: "Gyro meat or chicken, roasted or smoked and then thinly sliced" },
				{ text: "Julienned vegetables", optional: true }
			],
			steps: [
				"Warm pita bread.",
				"Add gyro meat or chicken.",
				"Top with tzatziki sauce.",
				"Add vegetables if desired."
			]
		}
	],
	steps: [],
	prepTimeMinutes: 20,
	cookTimeMinutes: 180,
	yield: "Serves 4"
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
	sections: [],
	prepTimeMinutes: 5,
	cookTimeMinutes: 0,
	yield: "Serves 4–6"
};

module.exports = {
	fettuccineAlfredo,
	gyros,
	hummus
};