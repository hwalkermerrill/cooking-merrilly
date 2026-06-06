const router = require("express").Router();
const passport = require("passport");

// Start Google login
router.get("/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google callback
router.get("/google/callback",
	passport.authenticate("google", { failureRedirect: "/auth/failure" }),
	(req, res) => {
		res.redirect("/auth/success");
	}
);

// Success
router.get("/success", (req, res) => {
	res.json({ message: "Logged in", user: req.user });
});

// Failure
router.get("/failure", (req, res) => {
	res.json({ message: "Login failed" });
});

module.exports = router;