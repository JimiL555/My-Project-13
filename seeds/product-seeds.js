const { Product } = require('../models');

const productData = [
  {
    product_name: 'T-Shirt',
    price: 19.99,
    stock: 100,
    category_id: 1,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 50,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;