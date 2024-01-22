import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PizzaContext } from '../context/PizzaContext';

const PizzaDetail = () => {
  const { id } = useParams();
  const { pizzas } = useContext(PizzaContext);
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const foundPizza = pizzas.find(p => p.id === parseInt(id));
    setPizza(foundPizza);
  }, [id, pizzas]);

  if (!pizza) return <div>Cargando...</div>;

  return (
    <div>
      <h1>{pizza.name}</h1>
      <img src={pizza.image} alt={pizza.name} />
      <p>{pizza.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PizzaDetail;
