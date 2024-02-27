// MemoryGame.js
import React, { useState } from 'react';
import Board from './Board';

const MemoryGame = () => {
  const [cards, setCards] = useState([
    { image: 'apple.jpg', flipped: false },
    { image: 'poire.jpg', flipped: false },
    { image: 'apple.jpg', flipped: false },


  ]);

  const handleCardClick = (index) => {
    const newCards = [...cards];
    newCards[index].flipped = !newCards[index].flipped;
    setCards(newCards);
  };

  return (
    <div className="memory-game">
      <h1>Memory Game</h1>
      <Board cards={cards} handleCardClick={handleCardClick} />
    </div>
  );
};

export default MemoryGame;
