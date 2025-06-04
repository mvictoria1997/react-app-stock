import { CookingPot, ForkKnife } from 'phosphor-react';
import { Box, Typography, keyframes } from '@mui/material';

// Animación de giro
const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingPage = () => {
  return (
    <Box
      sx={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'primary.main',
        gap: 2,
      }}
    >
      <CookingPot
        size={64}
        weight="duotone"
        style={{
          animation: `${rotate} 2s linear infinite`,
        }}
      />
      <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        Cargando recetas deliciosas...
      </Typography>
    </Box>
  );
};

export default LoadingPage;
