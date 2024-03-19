import React from 'react';
import Indian from './Images/Indian.jpg';
import Spain from './Images/Spain.jpg';
import Iran from './Images/Iran.jpg';

const cardData = [
  {
    id: 1,
    title: 'Indian Saffron',
    image: Indian,
    description: 'Premium Indian Saffron (5 grams)',
    oldprice: 'Rs.3625',
    newprice:'Rs.2538',
  },
  {
    id: 2,
    title: 'Spain Saffron',
    image: Spain,
    description: 'Premium Spain Saffron (5 grams)',
    newprice:'Rs.2875',
  },
  {
    id: 3,
    title: 'Iran Saffron',
    image: Iran,
    description: 'Premium Iran Saffron (5 grams)',
    newprice:'Rs.3375',
  }
];

const Section = () => {
  return (
    <div id="section">
      {cardData.map(card => (
        <div className="card" key={card.id}>
             <p className='Card_title'>{card.title}</p>
          <div className='Imagearea'>
          <img className='card_img' src={card.image} alt={card.title} />
          </div>
       
          <p className='description'>{card.description}</p>
          <div className='price_description'>
            {card.oldprice &&  <div className="oldprice">{card.oldprice}</div>}
          <div className="price">{card.newprice}</div>
          </div>
          <div className='div_btn'>
          <button className='Sectionbtn'>Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Section;

