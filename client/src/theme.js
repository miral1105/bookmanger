import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#f72585', // Electric Pink
        },
        secondary: {
            main: '#7209b7', // Grape Purple
        },
        info: {
            main: '#4361ee', // Neon Blue
        },
        background: {
            default: '#0b090a', // Deep Matte Black
            paper: 'rgba(255, 255, 255, 0.05)', // Glass transparency
        },
    },
    typography: {
        fontFamily: "'Outfit', 'Inter', sans-serif",
        h3: { fontWeight: 800 },
        h4: { fontWeight: 800 },
        h6: { fontWeight: 700 },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backdropFilter: 'blur(20px) saturate(180%)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.125)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                    borderRadius: '24px',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '16px',
                    textTransform: 'none',
                    fontWeight: 700,
                    padding: '12px 28px',
                    transition: 'all 0.3s ease-in-out',
                    // '&:hover': {
                    //     transform: 'translateY(-2px)',
                    //     boxShadow: '0 4px 15px rgba(247, 37, 133, 0.3)',
                    // },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        transition: '0.3s',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        },
                        '&.Mui-focused': {
                            backgroundColor: 'rgba(255, 255, 255, 0.07)',
                        }
                    },
                },
            },
        },
    },
});

export default theme;
