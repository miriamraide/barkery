import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderMain from './HeaderMain';
import Navbar from './NavBar';
import Hero from './Slider';
import Footer from './Footer';
import Inicio from './Inicio';

const Start = () => {
  return (
    <>
    <HeaderTop/>
    <HeaderMain/>
    <section className=' bg-bgImage bg-repeat bg-cover bg-bottom w-full h-screen'>
      <Navbar/>
    <Hero/>
    <Footer/>
      {/*<Inicio/> */}
    </section>
    
    </>
  )
}

export default Start