const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const app = express();

// Import database connection
require('../database/db');

// Import routes
const authRoutes = require('./routes/authRoutes');
const taskRouter = require('./routes/taskRoutes');

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/task', taskRouter);

// Define port
const port = 3000;

// Start server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
