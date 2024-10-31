
"use client";  // Indica que este componente es un Client Component

import React, { useState } from 'react';
import HeaderTop from './HeaderTop';
import HeaderMain from './HeaderMain';
import Navbar from './NavBar';
import Hero from './Slider';
import Footer from './Footer';
import ShoppingCart from './products/ShoppingCart';

const Start = () => {
  const [cartCount, setCartCount] = useState(0); // Estado para el total de productos



  return (
    <>
      <HeaderTop />
      <HeaderMain cartCount={cartCount} /> {/* Pasa el total de productos al Header */}
      <section className='bg-bgImage bg-repeat bg-cover bg-bottom w-full h-screen'>
        <Navbar />
        <Hero />
        <Footer />
        <ShoppingCart setCartCount={setCartCount}/>  {/* Pasa la función para actualizar total */}
      </section>
    </>
  );
}

export default Start;
