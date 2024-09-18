const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Use category routes under /categories
router.use('/categories', categoryRoutes);

// Use product and tag routes
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;