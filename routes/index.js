const router = require('express').Router();
const apiRoutes = require('./api'); // Import the API routes

// Use the API routes under the /api path
router.use('/api', apiRoutes);

module.exports = router;