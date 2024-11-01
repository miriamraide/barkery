
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-blue-500 py-5">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center px-4">
        
        {/* Botón de menú para pantallas pequeñas */}
        <button 
          className="lg:hidden text-white text-3xl" 
          onClick={toggleMenu}
          aria-label="Abrir menú">
          ☰
        </button>
        
        {/* Links de la navbar */}
        <div 
          className={`flex-col lg:flex-row flex ${isOpen ? 'block' : 'hidden'} lg:flex items-center gap-4 lg:gap-10 font-bold text-white text-lg md:text-xl lg:text-2xl xl:text-3xl text-center mt-4 lg:mt-0`}>
          <Link className="navbar_link" href="inicio">Inicio</Link>
          <Link className="navbar_link" href="productos">Productos</Link>
          <Link className="navbar_link" href="perros">Perros</Link>
          <Link className="navbar_link" href="gatos">Gatos</Link>
          <Link className="navbar_link" href="mascotas">Mascotas</Link>
          <Link className="navbar_link" href="ofertas">Ofertas</Link>
          <Link className="navbar_link" href="contacto">Contacto</Link> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
