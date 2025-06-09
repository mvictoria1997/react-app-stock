import React from 'react';
import { Container } from '@mui/material';
import Header from '../header';

const BasePage = ({ children, headerTitle, headerSubtitle, headerButton }) => {

    return (
        <main sx={{ flexGrow: 1, p: 3 }}>
            <Container maxWidth="lg">
                <Header title={headerTitle} subtitle={headerSubtitle} button={headerButton} />
                {children}
            </Container>
        </main>
    );
};

export default BasePage;
