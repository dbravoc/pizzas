import React, { createContext, useState } from 'react';
export const PizzaContext = createContext();
export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]); // Suponiendo que cargas las pizzas de alguna fuente
  const [cart, setCart] = useState([]);

  // Funciones para manejar el carrito aquí

  return (
    <PizzaContext.Provider value={{ pizzas, cart, /* tus funciones */ }}>
      {children}
    </PizzaContext.Provider>
  );
};