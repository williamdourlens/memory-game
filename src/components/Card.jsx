// Card.js
import React from 'react';

const Card = ({ image, onClick, flipped }) => {
  const imageUrl = flipped ? image : '/intero.jpg';
  
  return (
    <div onClick={onClick} style={{ display: 'inline', width:'100px',height:'100px', maxHeight:'100px', maxWidth:'100px'}}>
      <img src={'../'+imageUrl} alt="Card" style={{width:'100px',height:'100px'}} draggable="false" />
    </div>
  );
};

export default Card;
