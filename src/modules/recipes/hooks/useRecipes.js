import { useEffect, useState } from 'react';
import { fetchRecipes } from '../services/communication';

/**
 * Hook para gestionar la petición para obtener las recetas
 * @returns Object
 * Object.recipes array Listado de recetas
 * Object.loading boolean Indica el estado de la carga de recetas
 */
export const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipes().then((data) => {
      setRecipes(data);
      setLoading(false);
    });
  }, []);

  return { recipes, loading };
};
