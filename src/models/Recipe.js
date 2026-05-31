const mongoose = require("mongoose");

// Ingredient structure with flags
const ingredientSchema = new mongoose.Schema({
	text: { type: String, required: true },
	optional: { type: Boolean, default: false },
	secret: { type: Boolean, default: false }
}, { _id: false });

// Variation structure
const variationSchema = new mongoose.Schema({
	author: { type: String, default: "" },
	notes: { type: String, default: "" },
	ingredients: { type: [ingredientSchema], default: [] },
	steps: { type: [String], default: [] }
}, { _id: false });

// Section structure for nested recipes
const sectionSchema = new mongoose.Schema({
	title: { type: String, required: true },
	ingredients: { type: [ingredientSchema], default: [] },
	steps: { type: [String], default: [] }
}, { _id: false });

// Main Recipe schema
const recipeSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true
	},

	description: {
		type: String,
		default: ""
	},

	ingredients: {
		type: [ingredientSchema],
		default: []
	},

	steps: {
		type: [String],
		default: []
	},

	// Complex recipes use sections instead:
	sections: {
		type: [sectionSchema],
		default: []
	},

	// Tags for filtering/searching
	tags: {
		type: [String],
		default: []
	},

	// Metadata
	prepTimeMinutes: {
		type: Number,
		default: null
	},

	cookTimeMinutes: {
		type: Number,
		default: null
	},

	yield: {
		type: String,
		default: ""
	},

	pairings: {
		type: String,
		default: ""
	},

	// Optional variations
	variations: {
		type: [variationSchema],
		default: []
	},

	// Flag to indicate private recipes that are ONLY displayed as part of a meal, not in the main recipe list
	isPublic: {
		type: Boolean,
		default: true
	}

}, { timestamps: true });

module.exports = mongoose.model("Recipe", recipeSchema);