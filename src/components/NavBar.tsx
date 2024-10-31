
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="hidden lg:block bg-blue-500 pb-3 pt-3">
      <div className="container">
        <div className="relative">
      </div>
        <div className="flex w-fit gap-40 mx-auto font-bold text-2xl py-4 text-white">
          <Link className="navbar_link relative" href="#">Inicio</Link>
          <Link className="navbar_link relative" href="#">Productos</Link>
          <Link className="navbar_link relative" href="#">Perros</Link>
          <Link className="navbar_link relative" href="#">Gatos</Link>
          <Link className="navbar_link relative" href="#">Más...</Link>
          <Link className="navbar_link relative" href="#">Ofertas</Link>
          <Link className="navbar_link relative" href="#">Contacto</Link> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
