const express = require('express');
const sequelize = require('./config/connection'); // This is your Sequelize instance
const routes = require('./routes'); // Your routes go here

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes); // Include the API routes

// Sync the Sequelize models to the PostgreSQL database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App running on port ${PORT}`));
});