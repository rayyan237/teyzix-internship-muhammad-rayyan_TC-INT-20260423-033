const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

// 1. Bring in the tools we need
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// 2. Tell the app to read our .env file
dotenv.config();

// 3. Connect to the database
connectDB();

// 4. Initialize the Express application
const app = express();

// 5. Middleware: This allows our app to read JSON data sent from users
app.use(express.json());

app.use('/api/books', require('./routes/bookRoutes'));

// 7. Find the port, and turn the server on
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});