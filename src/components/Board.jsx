// Board.js
import React from 'react';
import Card from './Card';

const Board = ({ cards, handleCardClick }) => {
  return (
    <div className="board">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          onClick={() => handleCardClick(index)}
          flipped={card.flipped}
        />
      ))}
    </div>
  );
};

export default Board;
