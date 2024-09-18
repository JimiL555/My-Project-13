const express = require('express');
const routes = require('./routes'); // Import routes
const sequelize = require('./config/connection'); // Import Sequelize

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes under the /api path
app.use('/api', routes);

// Sync Sequelize models and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App running on port ${PORT}`));
});

app.use((req, res, next) => {
  console.log(`Request made to: ${req.url}`);
  next();
});