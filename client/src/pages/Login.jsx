import React, { useState, useContext } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Box, Button, TextField, Typography, Paper, Link, Container } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            // Toast is handled in context
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'radial-gradient(circle at 20% 30%, #16213e 0%, #0b090a 100%)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '300px',
                    height: '300px',
                    background: 'linear-gradient(45deg, #f72585, #b5179e)',
                    borderRadius: '50%',
                    top: '-100px',
                    right: '-50px',
                    filter: 'blur(80px)',
                    opacity: 0.4,
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '400px',
                    height: '400px',
                    background: 'linear-gradient(45deg, #4361ee, #4cc9f0)',
                    borderRadius: '50%',
                    bottom: '-150px',
                    left: '-100px',
                    filter: 'blur(100px)',
                    opacity: 0.3,
                }
            }}
        >
            <Container maxWidth="xs">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <Paper 
                        elevation={0}
                        sx={{ 
                            p: 6, 
                            textAlign: 'center',
                            background: 'rgba(255, 255, 255, 0.03)',
                            backdropFilter: 'blur(30px) saturate(150%)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '32px',
                        }}
                    >
                        <Box sx={{ mb: 4 }}>
                            <Typography variant="h4" sx={{ mb: 1, fontWeight: 900, letterSpacing: '-1px', background: 'linear-gradient(45deg, #fff, #aaa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                BookManager
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Secure access to your personal library
                            </Typography>
                        </Box>
                        
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{ mb: 2 }}
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{ mb: 4 }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="large"
                                sx={{ 
                                    py: 2, 
                                    borderRadius: '16px',
                                    background: 'linear-gradient(45deg, #f72585, #7209b7)',
                                    boxShadow: '0 8px 25px rgba(247, 37, 133, 0.4)',
                                    fontSize: '1rem',
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, #ff4d94, #8a2be2)',
                                        transform: 'translateY(-3px)',
                                        transition: '0.3s'
                                    }
                                }}
                            >
                                Sign In
                            </Button>
                            
                            <Box sx={{ mt: 4 }}>
                                <Typography variant="body2" color="text.secondary">
                                    New collector?{' '}
                                    <Link component={RouterLink} to="/register" sx={{ color: 'primary.main', fontWeight: 700, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                        Create an account
                                    </Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Login;
