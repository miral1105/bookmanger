import React, { useContext } from 'react';
import { Container, Box, Typography, Button, AppBar, Toolbar } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import LogoutIcon from '@mui/icons-material/Logout';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddIcon from '@mui/icons-material/Add';
import { BookContext } from '../context/BookContext';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const { logout } = useContext(AuthContext);
    const { openModal } = useContext(BookContext);

    return (
        <Box sx={{
            flexGrow: 1,
            minHeight: '100vh',
            background: 'radial-gradient(circle at top right, #16213e, #0b090a)',
            position: 'relative',
            '&::before': {
                content: '""',
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                background: 'radial-gradient(circle at 10% 10%, rgba(247, 37, 133, 0.05) 0%, transparent 50%), radial-gradient(circle at 90% 90%, rgba(67, 97, 238, 0.05) 0%, transparent 50%)',
                pointerEvents: 'none',
                zIndex: 0
            }
        }}>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    zIndex: 1100
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LibraryBooksIcon sx={{ mr: { xs: 1, sm: 2 }, color: 'primary.main', filter: 'drop-shadow(0 0 8px rgba(247, 37, 133, 0.5))' }} />
                        <Typography 
                            variant="h6" 
                            component="div" 
                            sx={{ 
                                fontWeight: 900, 
                                letterSpacing: '-0.5px',
                                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                                display: { xs: 'none', sm: 'block' }
                            }}
                        >
                            BookManager <Box component="span" sx={{ color: 'primary.main' }}>Pro</Box>
                        </Typography>
                    </Box>
                    <Button
                        color="inherit"
                        onClick={logout}
                        startIcon={<LogoutIcon />}
                        sx={{
                            borderRadius: '12px',
                            // '&:hover': { background: 'inherit' }
                        }}
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg" sx={{ mt: 8, pb: 8, position: 'relative', zIndex: 1 }}>
                <Box sx={{ mb: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography variant="h2" gutterBottom sx={{ fontWeight: 900, textAlign: 'center', mb: 2, letterSpacing: '-2px' }}>
                            Your Digital Library
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 5, maxWidth: '600px', margin: '0 auto 40px' }}>
                            A curated space for your favorite stories and knowledge. Organize your collection with elegance.
                        </Typography>
                    </motion.div>

                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<AddIcon />}
                        onClick={() => openModal()}
                        sx={{
                            borderRadius: '20px',
                            px: 5,
                            py: 2,
                            fontSize: '1.1rem',
                            fontWeight: 800,
                            background: 'linear-gradient(45deg, #f72585, #7209b7)',
                            boxShadow: '0 10px 30px rgba(247, 37, 133, 0.4)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            // '&:hover': {
                            //     background: 'linear-gradient(90deg, #ff4d94, #8a2be2)',
                            //     transform: 'translateY(-2px) scale(1.02)',
                            //     boxShadow: '0 15px 40px rgba(247, 37, 133, 0.5)',
                            // }
                        }}
                    >
                        Add New Book
                    </Button>
                </Box>

                <Box sx={{ position: 'relative' }}>
                    <BookForm />
                    <BookList />
                </Box>
            </Container>
        </Box>
    );
};

export default Dashboard;
