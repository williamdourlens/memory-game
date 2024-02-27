// Card.js
import React from 'react';

const Card = ({ image, onClick, flipped }) => {
  const imageUrl = flipped ? image : '/intero.jpg';
  
  return (
    <div onClick={onClick} style={{ display: 'inline', width:'200',height:'200', maxHeight:'200'}}>
      <img src={'../'+imageUrl} alt="Card"/>
    </div>
  );
};

export default Card;
