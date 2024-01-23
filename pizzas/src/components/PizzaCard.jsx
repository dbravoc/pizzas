import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const PizzaCard = ({ pizza }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className='card'>
            <div className='img'>
                <img src={pizza.img} alt={pizza.name} />
            </div>
            <div className='card2'>
                <h2>{pizza.name} - ${pizza.price}</h2>
                <p>{pizza.desc}</p>
                {pizza.ingredients && (
                    <ul>
                        {pizza.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                )}
                <div>
                    <button onClick={() => addToCart(pizza)}>Agregar</button>
                </div>
            </div>
        </div>
    );
};

export default PizzaCard;
