import React from 'react';
import '/Users/yoonmin/Desktop/COMP229/Week8/Week8Code/src/assets/card.scss';
const Card = ({ name, dateofBirth, favoriteFood, favoriteEmoji, birthplace }) => {
  return (
    <div className="card">
      <div className="content">
        <h2>{name}</h2>
        <p>Date of Birth: {dateofBirth}</p>
        <p>Favorite Food: {favoriteFood}</p>
        <p>Favorite Emoji: {favoriteEmoji}</p>
        <p>Birth Place: {birthplace}</p>
      </div>
    </div>
  );
};



export default Card;
