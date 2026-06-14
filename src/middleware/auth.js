function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated && req.isAuthenticated()) {
		return next();
	}

	return res.status(401).json({
		error: "Not authenticated. Please log in first."
	});
}

function requireAuth(req, res, next) {
	if (!req.user) {
		return res.status(401).json({ error: "Unauthorized. Please log in with OAuth." });
	}
	next();
}

module.exports = { requireAuth, ensureAuthenticated };