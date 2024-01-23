import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // Asegúrate de que la ruta es correcta

const Navbar = () => {
  const { cart } = useContext(CartContext);

  // Calcula la cantidad total de pizzas en el carrito
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav>
      <ul className='navbar'>
        <li>
          <Link className='navbar2' to="/">Pizzas</Link>
        </li>
        <li>
          <img src="./carmen.png" alt="carmen" />
        </li>
        <li>
          <Link className='navbar2' to="/cart">Carrito ({totalItems})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
