// Card.js
import React from 'react';

const Card = ({ image, onClick, flipped }) => {
  const imageUrl = flipped ? image : '/intero.jpg';
  
  return (
    <div onClick={onClick} style={{ display: 'inline', width:'250px',height:'250px', maxHeight:'250px', maxWidth:'250px'}}>
      <img src={'../'+imageUrl} alt="Card" style={{width:'250px',height:'250px'}}/>
    </div>
  );
};

export default Card;
