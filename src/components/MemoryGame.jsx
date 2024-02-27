
import React, { useState, useEffect } from 'react';
import Board from './Board';



const MemoryGame = () => {
  const [timer, setTimer] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const selectionNiveau = (level) => {
    let initialCards = [];
    if (level === 1) {
      initialCards = [
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
      ];
    } else if (level === 2) {
      initialCards = [
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
    } else if (level === 3) {
      initialCards = [
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
        { image: 'mure.png', flipped: false },
        { image: 'mure.png', flipped: false },
        { image: 'fraise.png', flipped: false },
        { image: 'fraise.png', flipped: false },
      ];
    }
    const shuffledCards = shuffle(initialCards);
    setCards(shuffledCards);
  };

  const [siPremiereCarte, setsiPremiereCarte] = useState(null);
  const [double, setdouble] = useState(0);

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
    if (siPremiereCarte === null) {
      newCards[index].flipped = true;
      setsiPremiereCarte(index);
    } else {
      if (newCards[siPremiereCarte].image === newCards[index].image) {
        newCards[index].flipped = true;
        newCards[siPremiereCarte].flipped = true;
        setdouble(double + 1);
      } else {
        newCards[index].flipped = true;
        setTimeout(() => {
          newCards[siPremiereCarte].flipped = false;
          newCards[index].flipped = false;
          setCards(newCards);
        }, 1000);
      }
      setsiPremiereCarte(null);
    }
    setCards(newCards);
  };


  const handleFlipAllCards = () => {
    const newCards = cards.map((card) => ({ ...card, flipped: !card.flipped }));
    setCards(newCards);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isGameOver) {
        setTimer((prevTimer) => prevTimer + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isGameOver]);

  useEffect(() => {
    const allFlipped = cards.every((card) => card.flipped);
    if (allFlipped) {
      setIsGameOver(true);
      console.log('Game Over!');
	  setScore(double * 100 - timer);
    }
  }, [cards]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="memory-game">
      <h1>Memory Game</h1>
      <div className="card-row" style={{ display: 'flex', justifyContent: 'center' }}>
        <Board cards={cards} handleCardClick={handleCardClick} style={{ width: 50, height: 50 }} />
      </div>
      <button onClick={() => selectionNiveau(1)}>Facile</button>
      <button onClick={() => selectionNiveau(2)}>Moyen</button>
      <button onClick={() => selectionNiveau(3)}>Difficile</button>
      <button onClick={handleFlipAllCards}>Flip all cards</button>
      <div style={{ fontSize: "3em" }}>Timer: {timer}</div>
	  {isGameOver && <div style={{ fontSize: "2em" }}>Score: {score}</div>}
    </div>
  );
};

export default MemoryGame;

