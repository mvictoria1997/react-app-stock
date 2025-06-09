import { useState } from 'react';
import { Box, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Plus } from 'phosphor-react';

const Header = ({ title, subtitle, button }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box display="flex" flexDirection="column" mb={4}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                    <Typography variant="h4" fontWeight="bold">{title}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">{subtitle}</Typography>
                </Box>
                {button}
            </Box>
        </Box>
    );
}

export default Header;