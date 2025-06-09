import React, { useState } from 'react';
import BasePage from '../../../../../lib/components/basePage';
import { Button } from '@mui/material';
import LoadingPage from '../../../../../lib/components/loadingPage';
import { Plus } from 'phosphor-react';
import { useIngredients } from '../../../hooks/useIngredients';
import IngredientsTable from '../../organism/ingredientsTable';

const Ingredients = () => {
  const { ingredients, loading } = useIngredients();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <BasePage
      headerTitle="Ingredientes disponibles"
      headerSubtitle="Consulta, organiza y añade los ingredientes necesarios para tus recetas favoritas"
      headerButton={
        <Button
          variant="contained"
          startIcon={<Plus size={20} />}
          onClick={handleOpen}
          sx={{ borderRadius: 2 }}
        >
          Añadir ingrediente
        </Button>}>
      <>
        {loading ? <LoadingPage />
          : <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}>
            {ingredients.map((ingredient) => (
              // <RecipeCard key={recipe.id} recipe={recipe} />
              <IngredientsTable ingredients={ingredients}/>
            ))}
          </div>}
        {/* <CardAddTemplate open={open} handleClose={handleClose} /> */}
      </>
    </BasePage>
  );
};

export default Ingredients;
