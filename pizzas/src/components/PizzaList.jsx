import React, { useState, useEffect } from 'react';

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('/pizzas.json')
      .then(response => response.json())
      .then(data => {
        console.log(data.pizzas); // Para verificar la estructura de los datos
        if (Array.isArray(data.pizzas)) {
          setPizzas(data.pizzas);
        }
      })
      .catch(error => {
        console.error("Error fetching pizzas:", error);
      });
  }, []);

  return (
    <div>
      <h1>Pizzas Disponibles</h1>
      <ul>
        {pizzas.map(pizza => (
          <li key={pizza.id}>{pizza.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaList;
