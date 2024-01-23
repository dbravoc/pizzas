// Importar CartContext en lugar de PizzaContext
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.quantity * item.pizza.price, 0);

    return (
      <div>
        <h1>Carrito de pizzas</h1>
        {cart.map(item => (
          <div className='card' key={item.pizza.id}>
            <div>
            <img className='img2' src={item.pizza.img}/>
            </div>
            <div>
            <h2>{item.pizza.name}</h2>
            <p>Cantidad: {item.quantity}</p>
            <button onClick={() => incrementQuantity(item.pizza.id)}>+</button>
            <button onClick={() => decrementQuantity(item.pizza.id)}>-</button>
            <button onClick={() => removeFromCart(item.pizza.id)}>Eliminar</button>
            <h3>Total: ${total}</h3>
            </div>
      </div>
          
        ))}
        {/* Mostrar total */}
      </div>
    );
  };

  export default Cart;
