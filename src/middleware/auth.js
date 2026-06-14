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

function requireAdmin(req, res, next) {
	if (!req.user) {
		return res.status(401).json({ error: "Unauthorized. Please log in with OAuth." });
	}

	if (req.user.role !== "admin") {
		return res.status(403).json({ error: "Forbidden. Admin access required." });
	}

	next();
}

module.exports = { requireAuth, ensureAuthenticated, requireAdmin };