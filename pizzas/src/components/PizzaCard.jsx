import React from 'react';
import { Link } from 'react-router-dom';

const PizzaCard = ({ pizza }) => {
  return (
    <div className='card'>
      <div>
      <img src={pizza.img} alt={pizza.name} />
      </div>
      <div className='card2'>
        <h1>{pizza.name} - ${pizza.price}</h1>
        <p>{pizza.desc}</p>
        {pizza.ingredients && (
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        )}
        <Link className='boton' to={`/pizza/${pizza.id}`}>Agregar</Link>

      </div>
    </div>
  );
};

export default PizzaCard;
