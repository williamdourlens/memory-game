import React from 'react';
import MemoryGame from './components/MemoryGame';
import './App.css'; // Ajoutez cette ligne pour lier votre fichier CSS

function App() {
  return (
    <div className="page"> {/* Utilisez className au lieu de class pour définir la classe CSS */}
      <MemoryGame />
    </div>
  );
}

export default App;
