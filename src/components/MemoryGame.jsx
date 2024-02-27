
import React, { useState } from 'react';
import Board from './Board';


const MemoryGame = () => {
  const [cards, setCards] = useState(() => {
    const initialCards = [
      { image: 'pomme.png', flipped: false },
      { image: 'pomme.png', flipped: false },
      { image: 'poire.png', flipped: false },
      { image: 'poire.png', flipped: false },
      { image: 'orange.png', flipped: false },
      { image: 'orange.png', flipped: false },
      { image: 'citron.png', flipped: false },
      { image: 'citron.png', flipped: false },
      { image: 'peche.png', flipped: false },
      { image: 'peche.png', flipped: false },
      { image: 'kiwi.png', flipped: false },
      { image: 'kiwi.png', flipped: false },
      { image: 'cerise.png', flipped: false },
      { image: 'cerise.png', flipped: false },
      { image: 'banane.png', flipped: false },
      { image: 'banane.png', flipped: false },
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
  const handleFlipAllCards = () => {
    const newCards = cards.map((card) => ({ ...card, flipped: !card.flipped }));
    setCards(newCards);
  }

  return (
    <div className="memory-game">
      <h1>Memory Game</h1>
      <div className="card-row">
        <Board cards={cards} handleCardClick={handleCardClick} style={{ width: 50, height: 50 }} />
      </div>
      <button onClick={handleFlipAllCards}>Flip all cards</button>
    </div>
  );
};

export default MemoryGame;
