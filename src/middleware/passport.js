// Required Imports (Core-Middleware-Routes-Models-Utils)
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const User = require("../models/User");

// Google OAuth Strategy
passport.use(new GoogleStrategy(
	{
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackURL: "/auth/google/callback"
	},
	async (accessToken, refreshToken, profile, done) => {
		try {
			const existingUser = await User.findOne({
				provider: "google",
				providerId: profile.id
			});

			if (existingUser) {
				return done(null, existingUser);
			}

			const newUser = await User.create({
				provider: "google",
				providerId: profile.id,
				displayName: profile.displayName,
				email: profile.emails?.[0]?.value || "",
				avatar: profile.photos?.[0]?.value || ""
			});

			return done(null, newUser);

		} catch (err) {
			return done(err, null);
		}
	}
));

// GitHub OAuth Strategy
passport.use(new GitHubStrategy(
	{
		clientID: process.env.GITHUB_CLIENT_ID,
		clientSecret: process.env.GITHUB_CLIENT_SECRET,
		callbackURL: "/auth/github/callback"
	},
	async (accessToken, refreshToken, profile, done) => {
		try {
			const existingUser = await User.findOne({
				provider: "github",
				providerId: profile.id
			});

			if (existingUser) {
				return done(null, existingUser);
			}

			const newUser = await User.create({
				provider: "github",
				providerId: profile.id,
				displayName: profile.displayName || profile.username,
				email: profile.emails?.[0]?.value || "",
				avatar: profile.photos?.[0]?.value || ""
			});

			return done(null, newUser);

		} catch (err) {
			return done(err, null);
		}
	}
));

// Serialize & Deserialize User Sessions
passport.serializeUser((user, done) => {
	done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
	try {
		const user = await User.findById(id);
		done(null, user);
	} catch (err) {
		done(err, null);
	}
});

module.exports = passport;
