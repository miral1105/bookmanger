import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from './AuthContext';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingBook, setEditingBook] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { token } = useContext(AuthContext);
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const getBooks = async () => {
        if (!token) return;
        setLoading(true);
        try {
            const res = await axios.get(`${baseUrl}/api/books`);
            setBooks(res.data);
        } catch (err) {
            toast.error('Failed to fetch books');
        } finally {
            setLoading(false);
        }
    };

    const addBook = async (title, author) => {
        try {
            const res = await axios.post('http://localhost:5000/api/books', { title, author });
            setBooks([res.data, ...books]);
            closeModal();
            toast.success('Book added to your library!');
        } catch (err) {
            toast.error('Could not add book');
        }
    };

    const updateBook = async (id, title, author) => {
        try {
            const res = await axios.put(`${baseUrl}/api/books/${id}`, { title, author });
            setBooks(books.map(book => book._id === id ? res.data : book));
            closeModal();
            toast.success('Book updated successfully');
        } catch (err) {
            toast.error('Failed to update book');
        }
    };

    const deleteBook = async (id) => {
        try {
            await axios.delete(`${baseUrl}/api/books/${id}`);
            setBooks(books.filter(book => book._id !== id));
            toast.success('Book removed from collection');
        } catch (err) {
            toast.error('Could not delete book');
        }
    };

    const openModal = (book = null) => {
        setEditingBook(book);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setEditingBook(null);
        setIsModalOpen(false);
    };

    return (
        <BookContext.Provider value={{ 
            books, 
            loading, 
            getBooks, 
            addBook, 
            updateBook, 
            deleteBook, 
            editingBook, 
            isModalOpen, 
            openModal, 
            closeModal 
        }}>
            {children}
        </BookContext.Provider>
    );
};
