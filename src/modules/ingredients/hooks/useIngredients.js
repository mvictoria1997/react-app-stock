import { useEffect, useState } from 'react';
import { fetchIngredients } from '../services/communication';

/**
 * Hook para gestionar la petición para obtener las recetas
 * @returns Object
 * Object.ingredients array Listado de recetas
 * Object.loading boolean Indica el estado de la carga de recetas
 */
export const useIngredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIngredients().then((data) => {
      setIngredients(data);
      setLoading(false);
    });
  }, []);

  return { ingredients, loading };
};
