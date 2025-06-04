import { useState } from 'react';
import { Box, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Plus } from 'phosphor-react';

const Header = ({ button }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box display="flex" flexDirection="column" mb={4}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                    <Typography variant="h4" fontWeight="bold">Nuestras Recetas</Typography>
                    <Typography variant="subtitle1" color="text.secondary">Descubre platos deliciosos y fáciles para cada ocasión.</Typography>
                </Box>
                {button}
            </Box>
        </Box>
    );
}

export default Header;