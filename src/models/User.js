const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	provider: {
		type: String,
		required: true,
		enum: ["google", "github"]
	},

	providerId: {
		type: String,
		required: true
	},

	displayName: {
		type: String,
		required: true,
		trim: true
	},

	email: {
		type: String,
		lowercase: true,
		trim: true
	},

	avatar: {
		type: String,
		default: ""
	},

	role: {
		type: String,
		default: "user",
		enum: ["user", "admin"]
	},

	favorites: [{
		itemId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true
		},
		itemType: {
			type: String,
			required: true,
			enum: ["recipe", "meal"]
		}
	}],

}, { timestamps: true });

// Prevent duplicate users from same provider
userSchema.index({ provider: 1, providerId: 1 }, { unique: true });

module.exports = mongoose.model("User", userSchema);