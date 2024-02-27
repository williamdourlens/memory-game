// Card.js
import React from 'react';

const Card = ({ image, onClick, flipped }) => {
  const imageUrl = flipped ? image : '/intero.jpg';
  
  return (
    <div onClick={onClick} style={{ display: 'inline-block', width:'200',height:'200', maxHeight:'800'}}>
      <img src={'../'+imageUrl} alt="Card"/>
    </div>
  );
};

export default Card;
