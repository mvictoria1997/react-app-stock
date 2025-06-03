import React from 'react';
import { useRecipes } from '../../../hooks/useRecipes';
import RecipeCard from '../../organism/recipeCard';

const RecipesListPage = () => {
  const { recipes, loading } = useRecipes();
  console.log(recipes, loading);
  return (
    <>
      <h1 style={{ color: '#4a3f35' }}>Bienvenido al módulo de Recetas</h1>
      {/* <>loading</> */}
      {/* {!loading && */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      {/* } */}
    </>
  );
};

export default RecipesListPage;
