import React from 'react';
import Card from './Card';
// import './App.css';

function App() {
  const cardData = [
    {
      name: 'Alice Johnson',
      dateofBirth: '1995-01-01',
      favoriteFood: 'Pizza',
      favoriteEmoji: '🍕',
      birthplace: 'Toronto',
    },
    {
      name: 'Bob Smith',
      dateofBirth: '1997-03-15',
      favoriteFood: 'Sushi',
      favoriteEmoji: '🍣',
      birthplace: 'Vancouver', 
    },
  ];

  return (
    <div>
      <h3>Team Member Profiles</h3>
      <div style={styles.cardContainer}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            dateofBirth={card.dateofBirth}
            favoriteFood={card.favoriteFood}
            favoriteEmoji={card.favoriteEmoji}
            birthplace={card.birthplace} 
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
  },
};

export default App;
