import Link from 'next/link';
import React from 'react';
import Inicio from './Inicio';

const Navbar = () => {
  return (
    <div className="hidden lg:block bg-blue-500">
      <div className="container">
        <div className="flex w-fit gap-40 mx-auto font-bold text-xl py-4 text-white">
          <Link className="navbar_link relative" href="#">Inicio
          <inicio/></Link>
          <Link className="navbar_link relative" href="#">Perros</Link>
          <Link className="navbar_link relative" href="#">Gatos</Link>
          <Link className="navbar_link relative" href="#">Más...</Link>
          <Link className="navbar_link relative" href="#">Ofertas del Mes</Link>
          <Link className="navbar_link relative" href="#">Contacto</Link> 
        </div>
      </div>
    </div>
  );
}

export default Navbar