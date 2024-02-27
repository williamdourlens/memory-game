// Card.js
import React from 'react';

const Card = ({ image, onClick, flipped }) => {
  const imageUrl = flipped ? image : '/intero.jpg';
  
  return (
    <div onClick={onClick}>
      <img src={'../'+imageUrl} alt="Card"/>
    </div>
  );
};

export default Card;
