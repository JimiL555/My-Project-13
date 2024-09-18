const router = require('express').Router();
const apiRoutes = require('./api'); // Import the API routes

// Use API routes
router.use('/api', apiRoutes);

module.exports = router;