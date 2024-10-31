"use client"

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (

    <div className="hidden lg:block bg-blue-500 pb-3 pt-3 ">
      <div className="container">
        <div className="flex w-fit gap-40 mx-auto font-bold text-3xl py-4 text-white">
          <Link className="navbar_link relative" href="inicio">Inicio</Link>
          <Link className="navbar_link relative" href="productos">Productos</Link>
          <Link className="navbar_link relative" href="perros">Perros</Link>
          <Link className="navbar_link relative" href="gatos">Gatos</Link>
          <Link className="navbar_link relative" href="mascotas">Mascotas</Link>
          <Link className="navbar_link relative" href="ofertas">Ofertas</Link>
          <Link className="navbar_link relative" href="contacto">Contacto</Link> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
