const router = require('express').Router();
const categoryRoutes = require('./category-routes'); // Import category routes
const productRoutes = require('./product-routes'); // Import product routes
const tagRoutes = require('./tag-routes'); // Import tag routes

// Use the individual routes with their respective paths
router.use('/categories', categoryRoutes); // Routes for categories
router.use('/products', productRoutes); // Routes for products
router.use('/tags', tagRoutes); // Routes for tags

module.exports = router;