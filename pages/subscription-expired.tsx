import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

const SubscriptionExpired = () => {
    const handleContactClick = () => {
        alert('Contact us for subscription renewal.');
    };

    return (
        <Container maxWidth="sm">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100vh"
                textAlign="center"
            >
                <Typography variant="h4" gutterBottom>
                    الموقع متوقف
                </Typography>
                <Typography variant="body1" paragraph>
                    يرجى الاتصال بالشركة لتجديد الاشتراك.
                </Typography>
                <Button variant="contained" color="primary" onClick={handleContactClick}>
                    اتصل بنا
                </Button>
            </Box>
        </Container>
    );
};

export default SubscriptionExpired;
