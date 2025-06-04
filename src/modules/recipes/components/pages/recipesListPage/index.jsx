import React, { useState } from 'react';
import { useRecipes } from '../../../hooks/useRecipes';
import RecipeCard from '../../organism/recipeCard';
import { Box, Button } from '@mui/material';
import BasePage from '../../../../../lib/components/basePage';
import LoadingPage from '../../../../../lib/components/loadingPage';
import CardAddTemplate from '../../templates/cardAddTemplate';
import { Plus } from 'phosphor-react';

const RecipesListPage = () => {
  const { recipes, loading } = useRecipes();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <BasePage headerButton={
      <Button
        variant="contained"
        startIcon={<Plus size={20} />}
        onClick={handleOpen}
        sx={{ borderRadius: 2 }}
      >
        Añadir receta
      </Button>}>
      <>
        {loading ? <LoadingPage />
          : <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}>
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>}
        <CardAddTemplate open={open} handleClose={handleClose} />
      </>
    </BasePage>
  );
};

export default RecipesListPage;
