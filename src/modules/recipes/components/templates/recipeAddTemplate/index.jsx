import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import RecipeForm from "../../organism/recipeForm";
import { useAddRecipe } from "../../../hooks/useAddRecipe";

const RecipeAddTemplate = ({ open, handleClose }) => {

    const { formData, setFormData, error, loading, handleChange, handleSubmit } = useAddRecipe(() => { console.log("Refresca") }, handleClose);
    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Añadir nueva receta</DialogTitle>
            <DialogContent>
                {/* Aquí iría tu formulario o contenido */}
                <Typography variant="body2">Aquí irá el formulario de nueva receta.</Typography>
                <RecipeForm formData={formData} setFormData={setFormData} error={error} handleChange={handleChange} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">Cancelar</Button>
                <Button onClick={handleSubmit} variant="contained" disabled={loading}>
                    {loading ? 'Guardando...' : 'Guardar'}
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default RecipeAddTemplate;