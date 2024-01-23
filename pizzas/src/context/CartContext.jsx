import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    // Encuentra si la pizza ya está en el carrito
    const existingItem = cart.find(item => item.pizza.id === pizza.id);

    if (existingItem) {
      // Incrementa la cantidad si la pizza ya está en el carrito
      setCart(cart.map(item => item.pizza.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      // Añade la nueva pizza al carrito
      setCart([...cart, { pizza, quantity: 1 }]);
    }
  };

  const removeFromCart = (pizzaId) => {
    // Remueve la pizza del carrito
    setCart(cart.filter(item => item.pizza.id !== pizzaId));
  };

  const incrementQuantity = (pizzaId) => {
    // Incrementa la cantidad de una pizza específica
    setCart(cart.map(item => item.pizza.id === pizzaId ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrementQuantity = (pizzaId) => {
    // Decrementa la cantidad de una pizza específica
    setCart(cart.map(item => (item.pizza.id === pizzaId && item.quantity > 1) ? { ...item, quantity: item.quantity - 1 } : item));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
