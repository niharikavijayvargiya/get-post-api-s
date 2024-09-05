const express = require('express');
const jokeRoutes = require('./routes/jokeRoutes');
const imageRoutes = require('./routes/imageRoutes');
const mathRoutes = require('./routes/mathRoutes');
const userRoutes = require('./routes/userRoutes');
const { unsplash } = require('../config/unsplashConfig');

// Create the Express app
const app = express();

// Middleware
app.use(express.json());

// Register routes
app.use(jokeRoutes);
app.use(imageRoutes);
app.use(mathRoutes);
app.use(userRoutes);

// Start the server
app.listen(8080, () => {
  console.log('Server running on port 8080');
});
