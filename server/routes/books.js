const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Book = require('../models/Book');

// @route   GET /api/books
// @desc    Get all user books
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const books = await Book.find({ userId: req.user.id }).sort({ createdAt: -1 });
        res.json(books);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST /api/books
// @desc    Add new book
// @access  Private
router.post('/', [auth, [
    check('title', 'Title is required').not().isEmpty(),
    check('author', 'Author is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, author } = req.body;

    try {
        const newBook = new Book({
            title,
            author,
            userId: req.user.id
        });

        const book = await newBook.save();
        res.json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE /api/books/:id
// @desc    Delete book
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let book = await Book.findById(req.params.id);

        if (!book) return res.status(404).json({ msg: 'Book not found' });

        // Make sure user owns book
        if (book.userId.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await Book.findByIdAndDelete(req.params.id);

        res.json({ msg: 'Book removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT /api/books/:id
// @desc    Update book
// @access  Private
router.put('/:id', [auth, [
    check('title', 'Title is required').not().isEmpty(),
    check('author', 'Author is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, author } = req.body;

    try {
        let book = await Book.findById(req.params.id);

        if (!book) return res.status(404).json({ msg: 'Book not found' });

        // Make sure user owns book
        if (book.userId.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        book = await Book.findByIdAndUpdate(
            req.params.id,
            { $set: { title, author } },
            { new: true }
        );

        res.json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
