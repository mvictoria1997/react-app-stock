import data from './data';

/**
 * Obtiene el listado de recetas
 * 
 * @returns array Listado de recetas
 */
export const fetchRecipes = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

/**
 * Crea una receta
 * 
 * @returns array Listado de recetas
 */
export const postRecipe = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

