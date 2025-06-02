import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Recipes from './modules/recipes/Recipes';
import Ingredients from './modules/ingredients/Ingredients';

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
        <main
          style={{
            padding: '20px',
            background: '#fff',
            minHeight: '100vh',
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/recetas" />} />
            <Route path="/ingredientes" element={<Ingredients />} />
            <Route path="/recetas" element={<Recipes />} />
            <Route path="*" element={<p>Página no encontrada</p>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
