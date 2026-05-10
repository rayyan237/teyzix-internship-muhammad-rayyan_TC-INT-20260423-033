const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a book title'], // Validation check 
        trim: true
    },
    author: {
        type: String,
        required: [true, 'Please add an author'],
        trim: true
    },
    isbn: {
        type: String,
        required: [true, 'Please add an ISBN'],
        unique: true, // Prevents duplicate books
        trim: true
    },
    genre: {
        type: String,
        required: [true, 'Please specify a genre']
    },
    availableCopies: {
        type: Number,
        required: [true, 'Please specify the number of available copies'],
        default: 1,
        min: [0, 'Available copies cannot be negative']
    }
}, {
    timestamps: true // Automatically tracks when a book was added
});

module.exports = mongoose.model('Book', bookSchema);