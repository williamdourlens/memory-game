// MemoryGame.js
import React, { useState } from 'react';
import Board from './Board';

const MemoryGame = () => {
  const [cards, setCards] = useState(() => {
    const initialCards = [
      { image: 'apple.jpg', flipped: false },
      { image: 'poire.jpg', flipped: false },
      { image: 'apple.jpg', flipped: false },
      { image: 'poire.jpg', flipped: false },
      { image: 'apple.jpg', flipped: false },
      { image: 'poire.jpg', flipped: false },
      { image: 'apple.jpg', flipped: false },
    ];

    const shuffledCards = shuffle(initialCards);
    return shuffledCards;
  });

  function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

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
