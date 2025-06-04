import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import IngredientsListPage from './modules/ingredients/components/pages/ingredientsListaPage';
import RecipesListPage from './modules/recipes/components/pages/recipesListPage';
import Sidebar from './lib/components/sidebar';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="app-container" style={{
      display: 'flex',
      transition: 'margin-left 0.3s ease',
      marginLeft: isSidebarOpen ? '150px' : '30px'
    }}>

      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
      <div style={{ flexGrow: 1, width: '100%' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/recetas" />} />
          <Route path="/ingredientes" element={<IngredientsListPage />} />
          <Route path="/recetas" element={<RecipesListPage />} />
          <Route path="*" element={<p>Página no encontrada</p>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
