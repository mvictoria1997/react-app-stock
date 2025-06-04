import { useState } from "react";
import { postRecipe } from "../services/communication";

/**
 * Hook para gestionar la creación de recetas
 * @returns Object
 * Object.recipes array Listado de recetas
 * Object.loading boolean Indica el estado de la carga de recetas
 */
export const useAddRecipe = (onSuccess, onClose) => {

    const [formData, setFormData] = useState({
        title: '',
        image: '',
        ingredients: '',
        instructions: '',
        price: '',
        time: '',
        difficulty: 0,
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const handleSubmit = async () => {
        setError('');
        if (!formData.title || !formData.ingredients || !formData.instructions) {
            setError('Por favor, rellena todos los campos obligatorios.');
            return;
        }

        try {
            setLoading(true);
            const dataToSend = {
                ...formData,
                ingredients: formData.ingredients.split('\n').map((i) => i.trim()),
                price: parseFloat(formData.price),
                time: parseInt(formData.time),
                difficulty: parseInt(formData.difficulty),
            };
            await postRecipe('recipes', dataToSend);
            onSuccess(); // Refrescar listado
            onClose();
        } catch (err) {
            setError('Error al guardar la receta.');
        } finally {
            setLoading(false);
        }
    };

    return { formData, setFormData, loading, error, handleChange, handleSubmit };
};