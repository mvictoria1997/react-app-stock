import React from 'react';
import { useRecipes } from '../../../hooks/useRecipes';

const RecipesListPage = () => {
  const { recipes, loading } = useRecipes();
  console.log(recipes, loading);
  return <h1 style={{ color: '#4a3f35' }}>Bienvenido al módulo de Recetas</h1>;
};

export default RecipesListPage;
