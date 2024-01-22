import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className='navbar'>
        <li>
          <Link className='navbar2' to="/">Pizzas</Link>
        </li>
        <li>
          <img src="./public/carmen.png" alt="carmen" />
        </li>
        <li>
          <Link className='navbar2' to="/cart">Carrito</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
