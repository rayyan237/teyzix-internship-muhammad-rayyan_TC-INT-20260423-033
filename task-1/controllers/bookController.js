const Book = require('../models/bookModel');

// @desc    Create a new book
// @route   POST /api/books
const createBook = async (req, res) => {
    try {
        // We take the data sent by the user (req.body)
        // and tell our Model to save it to MongoDB
        const book = await Book.create(req.body);

        res.status(201).json({
            success: true,
            data: book
        });
    } catch (error) {
        // If the user forgot a required field, Mongoose sends an error
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Get all books (with Pagination)
// @route   GET /api/books
const getBooks = async (req, res) => {
    try {
        // Get the numbers from the URL (e.g., ?page=2&limit=5)
        // If the user doesn't provide them, we default to Page 1 and 10 books 
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        
        // Calculate how many books to skip
        const skip = (page - 1) * limit;

        // Find the booksbut apply skip and limit
        const books = await Book.find().skip(skip).limit(limit);
        
        // Get total count
        const total = await Book.countDocuments();

        // SEND THE RESPONSE
        res.status(200).json({
            success: true,
            count: books.length,
            page: page,
            totalPages: Math.ceil(total / limit),
            totalBooks: total,
            data: books
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
};

// @desc    Get a single book by ID
// @route   GET /api/books/:id
const getBook = async (req, res) => {
    try {
        // req.params.id grabs the ID from the URL bar in Postman
        const book = await Book.findById(req.params.id);

        // If the ID format is correct but no book was found
        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'Book not found'
            });
        }

        res.status(200).json({
            success: true,
            data: book
        });
    } catch (error) {
        // If the ID format is totally wrong (e.g., too short)
        res.status(400).json({
            success: false,
            message: 'Invalid Book ID format'
        });
    }
};

// @desc    Update a book
// @route   PUT /api/books/:id
const updateBook = async (req, res) => {
    try {
        // findByIdAndUpdate takes 3 things:
        // 1. The ID of the book
        // 2. The new data (req.body)
        // 3. Options: { new: true } returns the updated book instead of the old one
        //             { runValidators: true } ensures the new data still follows our rules
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!book) {
            return res.status(404).json({ success: false, message: 'Book not found' });
        }

        res.status(200).json({
            success: true,
            data: book
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// @desc    Delete a book
// @route   DELETE /api/books/:id
const deleteBook = async (req, res) => {
    try {
        // We look for the ID and delete it in one move
        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'Book not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Book removed successfully',
            data: {} // We return an empty object because the data is gone
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Invalid Book ID format'
        });
    }
};

module.exports = { 
    createBook, 
    getBooks, 
    getBook, 
    updateBook, 
    deleteBook 
};