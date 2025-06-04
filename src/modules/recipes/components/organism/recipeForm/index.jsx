import { TextField, Stack, Typography, Rating } from '@mui/material';

const RecipeForm = ({ formData, setFormData, error, handleChange }) => {


    return (
        <Stack spacing={2}>
            <TextField
                label="Título"
                fullWidth
                value={formData.title}
                onChange={handleChange('title')}
                required
            />
            <TextField
                label="URL Imagen"
                fullWidth
                value={formData.image}
                onChange={handleChange('image')}
            />
            <TextField
                label="Ingredientes (uno por línea)"
                fullWidth
                multiline
                minRows={3}
                value={formData.ingredients}
                onChange={handleChange('ingredients')}
                required
            />
            <TextField
                label="Instrucciones"
                fullWidth
                multiline
                minRows={4}
                value={formData.instructions}
                onChange={handleChange('instructions')}
                required
            />
            <TextField
                label="Precio (€)"
                type="number"
                fullWidth
                value={formData.price}
                onChange={handleChange('price')}
            />
            <TextField
                label="Tiempo (min)"
                type="number"
                fullWidth
                value={formData.time}
                onChange={handleChange('time')}
            />
            <Stack direction="row" alignItems="center" spacing={2}>
                <Typography>Dificultad:</Typography>
                <Rating
                    name="difficulty"
                    value={Number(formData.difficulty)}
                    onChange={(_, newValue) =>
                        setFormData({ ...formData, difficulty: newValue })
                    }
                    max={5}
                />
            </Stack>
            {error && (
                <Typography color="error" variant="body2">
                    {error}
                </Typography>
            )}
        </Stack>
    );
};

export default RecipeForm;
