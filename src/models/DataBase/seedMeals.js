const mealSeeds = [
	{
		title: "Fettuccine Alfredo",
		description: "Fettuccine pasta finished in Alfredo sauce and topped with sliced strip steak.",
		recipeTitles: ["Fettuccine Pasta", "Alfredo Sauce"],
		assemblySteps: [
			"Prepare Fettuccine Pasta according to its recipe until mostly done.",
			"Prepare Alfredo Sauce according to its recipe.",
			"Move mostly cooked fettuccine into the Alfredo sauce to finish cooking and coat thoroughly.",
			"Top with any desired proteins and serve immediately with bread."
		],
		tags: ["pasta", "alfredo", "italian"]
	},
	{
		title: "Steak Fettuccine Alfredo",
		description: "Fettuccine pasta finished in Alfredo sauce and topped with sliced strip steak.",
		recipeTitles: ["Fettuccine Pasta", "Alfredo Sauce", "Sliced Strip Steak"],
		assemblySteps: [
			"Prepare Fettuccine Pasta according to its recipe until mostly done.",
			"Prepare Alfredo Sauce according to its recipe.",
			"Prepare Strip Steak for Alfredo according to its recipe and slice.",
			"Move mostly cooked fettuccine into the Alfredo sauce to finish cooking and coat thoroughly.",
			"Top with sliced strip steak and serve immediately with bread."
		],
		tags: ["pasta", "alfredo", "steak", "italian"]
	},
	{
		title: "Gyros",
		description: "Gyros assembled with gyro meat, tzatziki sauce, and optional vegetables.",
		recipeTitles: ["Gyro Meat", "Tzatziki Sauce"],
		assemblySteps: [
			"Prepare Gyro Meat or Chicken according to its recipe and slice thinly.",
			"Prepare Tzatziki Sauce according to its recipe.",
			"Warm pita bread, and add gyro meat to pita. Top with tzatziki sauce, and add lettuce, tomato, onion, or other vegetables as desired."
		],
		tags: ["greek", "mediterranean", "gyro"]
	},
	{
		title: "Gyros with Hummus",
		description: "Gyros served with hummus and vegetables.",
		recipeTitles: ["Gyro Meat", "Tzatziki Sauce", "Hummus"],
		assemblySteps: [
			"Prepare Gyro Meat or Chicken according to its recipe and slice thinly.",
			"Prepare Tzatziki Sauce according to its recipe.",
			"Prepare Hummus according to its recipe.",
			"Warm pita bread, and add gyro meat to pita. Top with tzatziki sauce, and add lettuce, tomato, onion, or other vegetables as desired.",
			"Serve hummus on the side with pita or vegetables."
		],
		tags: ["greek", "mediterranean", "gyro", "hummus"]
	}
];

module.exports = { mealSeeds };