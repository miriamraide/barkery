import React from 'react';
import ProductCard from "../../components/ProductCard";
import HeaderTop from '@/components/HeaderTop';

const Products = () => {

  const productsData = [
  
 
      {
    
      id: 1,
      title: "Correa con soporte para pasear a nuestros amigos caninos",
      mainTitle: "Super Segura, con correa extendible, realizada con materiales reciclados",
      img: "/bark-02-dogleash-support.jpg",
      price:  "Precio con descuento: $28.000",
      offer: 0.20,
      rating: 5
    },
    
    {
      id: 3,
      title: "Mochila para llevar mascotas pequeñas/como gatos",
      mainTitle: "Confeccionada por abuelas del Noreste Argentino, super liviana y flexible, lista para llevar a todas partes",
      img: "/bark-01-catbackpack.jpg",
      price:  "Precio con descuento: $35.000",
      offer: 0.20,
      rating: 4
    },
    {
      id: 4,
      title: "Cama moderna, ideal para mascotas pequeñas",
      mainTitle: "Super contemporánea, y muy original, ideal para quienes buscan un estilo de decoración moderno",
      img: "/bark-23-catbed2.jpg",
      price: "Precio con descuento: $45.000",
      offer: 0.2,
      rating: 5
    
    },
    
    {
      id: 5,
      title: "Pecera de vidrio acojedora adaptable a lugares pqueños",
      mainTitle: "Este estilo de pecera no desilusiona, siempre vigente para admirar a nuestros peces amigos.",
      img: "/bark-05-fishbowl.jpg",
      price:  "Precio con descuento: $55.000",
      offer: 0.20,
      rating: 5
    },
    {
      id: 6,
      title: "Alimentador con semillas y néctar para pájaros",
      mainTitle: "Fácil de instalar, es un atractivo para ver alimentarse desde tu ventana, aves de distintos tipos y colores. Un sueño!.",
      img: "/bark-04-birdfeeder.jpg",
      price:  "Precio con descuento: $25.000",
      offer: 0.20,
      rating: 3
    },
    ];

  
  
  return (
    <div  className='background-image'>
       <HeaderTop/>
      <div className='container'>
        <div className='font-bold text-5xl pb-4 text-center text-white'>Barkery - Ofertas del Mes</div>
        <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-x-20 xl:gap-y-10'>
          {productsData.map((item,index) => (
            <ProductCard
            key={index}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
            rating={item.rating}
            />))}

        </div>
      </div>    
    </div>
  )
}

export default Products