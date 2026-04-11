import React, { useState, useContext, useEffect } from 'react';
import { 
    Box, 
    TextField, 
    Button, 
    Typography, 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions,
    IconButton
} from '@mui/material';
import { BookContext } from '../context/BookContext';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const { addBook, updateBook, editingBook, isModalOpen, closeModal } = useContext(BookContext);

    useEffect(() => {
        if (editingBook) {
            setTitle(editingBook.title);
            setAuthor(editingBook.author);
        } else {
            setTitle('');
            setAuthor('');
        }
    }, [editingBook, isModalOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && author) {
            if (editingBook) {
                updateBook(editingBook._id, title, author);
            } else {
                addBook(title, author);
            }
        }
    };

    return (
        <Dialog 
            open={isModalOpen} 
            onClose={closeModal}
            fullWidth
            maxWidth="sm"
            PaperProps={{
                sx: {
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 4
                }
            }}
        >
            <DialogTitle sx={{ fontWeight: 800, fontSize: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {editingBook ? 'Edit Book' : 'Add New Book'}
                <IconButton onClick={closeModal} sx={{ color: 'text.secondary' }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <Box component="form" onSubmit={handleSubmit}>
                <DialogContent>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        {editingBook ? 'Update the details of your book below.' : 'Fill in the information to add a new book to your collection.'}
                    </Typography>
                    <TextField
                        fullWidth
                        label="Book Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        sx={{ mb: 3 }}
                        autoFocus
                    />
                    <TextField
                        fullWidth
                        label="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                        sx={{ mb: 1 }}
                    />
                </DialogContent>
                <DialogActions sx={{ p: 3, pt: 0 }}>
                    <Button onClick={closeModal} color="inherit">
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        startIcon={editingBook ? <SaveIcon /> : <AddIcon />}
                        sx={{ 
                            px: 4, 
                            py: 1.5, 
                            borderRadius: '12px',
                            background: editingBook ? 'linear-gradient(45deg, #00b4d8, #0077b6)' : 'linear-gradient(45deg, #f72585, #7209b7)'
                        }}
                    >
                        {editingBook ? 'Save Changes' : 'Add Book'}
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};

export default BookForm;
