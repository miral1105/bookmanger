const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const BookSchema = new mongoose.Schema({
    _id: { type: String, default: uuidv4 },
    title: { type: String, required: true },
    author: { type: String, required: true },
    userId: { type: String, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);
