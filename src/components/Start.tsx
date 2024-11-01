
"use client";  

import React, { useState } from 'react';
import HeaderTop from './HeaderTop';
import HeaderMain from './HeaderMain';
import Navbar from './NavBar';
import Hero from './Slider';
import Footer from './Footer';
import ShoppingCart from './products/ShoppingCart';

const Start = () => {
  const [cartCount, setCartCount] = useState(0); 


  return (
    <>
      <HeaderTop />
      <HeaderMain cartCount={cartCount} />
      <section className='bg-bgImage bg-repeat bg-cover bg-bottom w-full h-screen'>
        <Navbar />
        <Hero />
        <Footer />
        <ShoppingCart setCartCount={setCartCount}/>  
      </section>
    </>
  );
}

export default Start;