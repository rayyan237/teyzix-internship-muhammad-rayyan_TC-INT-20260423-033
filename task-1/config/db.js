const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // We use mongoose to connect using the secret URI from our .env
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected successfully!`);
    } catch (error) {
        // If it fails, error and shut down
        console.error(`Database Connection Error: ${error.message}`);
        process.exit(1); 
    }
};

module.exports = connectDB;