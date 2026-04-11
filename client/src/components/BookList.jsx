import React, { useContext, useEffect } from 'react';
import { Box, Typography, Card, CardContent, IconButton, Grid, CircularProgress, Paper, Stack } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { BookContext } from '../context/BookContext';
import { motion, AnimatePresence } from 'framer-motion';

const BookList = () => {
    const { books, loading, getBooks, deleteBook, openModal } = useContext(BookContext);

    useEffect(() => {
        getBooks();
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress color="secondary" />
            </Box>
        );
    }

    if (books.length === 0) {
        return (
            <Paper sx={{ p: 4, textAlign: 'center', opacity: 0.7 }}>
                <Typography variant="body1">No books found. Start by adding one above!</Typography>
            </Paper>
        );
    }

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(auto-fill, minmax(200px, 1fr))'
                },
                gap: 4,
                width: '100%'
            }}
        >
            <AnimatePresence mode="popLayout">
                {books.map((book) => (
                    <motion.div
                        key={book._id}
                        layout
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 25,
                            opacity: { duration: 0.2 }
                        }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <Card
                            sx={{
                                height: '100%',
                                minHeight: '180px',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(15px)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '24px',
                                cursor: 'pointer',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    background: 'rgba(255, 255, 255, 0.06)',
                                    borderColor: 'rgba(247, 37, 133, 0.4)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(247, 37, 133, 0.1)',
                                }
                            }}
                        >
                            <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Typography variant="h5" component="div" sx={{ fontWeight: 900, mb: 1, letterSpacing: '-0.5px', wordBreak: 'break-word', color: '#fff' }}>
                                    {book.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500, opacity: 0.7 }}>
                                    by {book.author}
                                </Typography>
                                <Stack direction="row" spacing={1} sx={{ position: 'absolute', top: 16, right: 16 }}>
                                    <IconButton
                                        aria-label="edit"
                                        onClick={(e) => { e.stopPropagation(); openModal(book); }}
                                        size="medium"
                                        sx={{
                                            color: 'primary.main',
                                            background: 'rgba(247, 37, 133, 0.1)',
                                            backdropFilter: 'blur(5px)',
                                            '&:hover': { background: 'rgba(247, 37, 133, 0.2)', transform: 'scale(1.1)' }
                                        }}
                                    >
                                        <EditOutlinedIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton
                                        aria-label="delete"
                                        onClick={(e) => { e.stopPropagation(); deleteBook(book._id); }}
                                        size="medium"
                                        sx={{
                                            color: 'error.main',
                                            background: 'rgba(211, 47, 47, 0.1)',
                                            backdropFilter: 'blur(5px)',
                                            '&:hover': { background: 'rgba(211, 47, 47, 0.2)', transform: 'scale(1.1)' }
                                        }}
                                    >
                                        <DeleteOutlinedIcon fontSize="small" />
                                    </IconButton>
                                </Stack>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </AnimatePresence>
        </Box>
    );
};

export default BookList;
