import React, { useState, useEffect } from 'react';
import PizzaCard from './PizzaCard';


const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('/pizzas.json')
      .then(response => response.json())
      .then(data => setPizzas(data))
      .catch(error => console.error('Error al cargar pizzas:', error));
  }, []);

  return (
    <div>
      <div className=''>
        {pizzas.map(pizza => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default Home;
