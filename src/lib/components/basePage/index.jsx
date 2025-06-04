import React from 'react';
import { Container } from '@mui/material';
import Header from '../header';

const BasePage = ({ children, headerButton }) => {

    return (
        <main sx={{ flexGrow: 1, p: 3 }}>
            <Container maxWidth="lg">
                <Header button={headerButton} />
                {children}
            </Container>
        </main>
    );
};

export default BasePage;
