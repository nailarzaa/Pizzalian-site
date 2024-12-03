import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from '../src/pages/Home';
import Menu from '../src/pages/Menu';
import Shop from '../src/pages/Shop';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import NotFoundPage from './pages/NotFoundPage';

import ProductDetails from './pages/ProductDetails';
import Basket from './pages/Basket';
import { ThemeContext } from './context/ThemeContext';
// import ModeContext from './context/ModeContext';

const App = () => {
  return (

    <BrowserRouter>
      <Header />
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/shop/:urlid' element={<ProductDetails />}></Route>
        <Route path='/basket' element={<Basket />}></Route>

        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>


  );
};

export default App;
