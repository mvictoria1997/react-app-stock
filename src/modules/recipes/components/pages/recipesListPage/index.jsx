import React from 'react';
import { useRecipes } from '../../../hooks/useRecipes';
import RecipeCard from '../../organism/recipeCard';

const RecipesListPage = () => {
  const { recipes, loading } = useRecipes();
  console.log(recipes, loading);
  return (
    <>
      <h1 style={{ color: '#4a3f35' }}>Nuestras Recetas</h1>
      <h2 style={{ color: '#4a3f35' }}>Descubre platos deliciosos y fáciles para cada ocasión.</h2>
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
