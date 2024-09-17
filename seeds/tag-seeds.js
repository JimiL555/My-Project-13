const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Cotton',
  },
  {
    tag_name: 'Polyester',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;