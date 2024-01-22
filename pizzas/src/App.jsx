import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PizzaContext } from './context/PizzaContext';
import PizzaDetail from './components/PizzaDetail';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  );
};

export default App;
