import React, { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useContext(PizzaContext);

  return (
    <div>
      <h1>Carrito</h1>
      {cart.map(item => (
        <div key={item.pizza.id}>
          <h2>{item.pizza.name}</h2>
          <p>Cantidad: {item.quantity}</p>
          <button onClick={() => incrementQuantity(item.pizza.id)}>+</button>
          <button onClick={() => decrementQuantity(item.pizza.id)}>-</button>
          <button onClick={() => removeFromCart(item.pizza.id)}>Eliminar</button>
        </div>
      ))}
      {/* Mostrar total */}
    </div>
  );
};

export default Cart;
