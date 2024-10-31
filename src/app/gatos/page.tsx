import React from 'react';
import ProductCard from "../../components/ProductCard";
import HeaderTop from '@/components/HeaderTop';

const Products = () => {

  const productsData = [
  
  {
    id: 2,
    title: "Mochila para llevar mascotas pequeñas/como gatos",
    mainTitle: "Confeccionada por abuelas del Noreste Argentino, super liviana y flexible, lista para llevar a todas partes",
    img: "/bark-01-catbackpack.jpg",
    price:  "Precio con descuento: $35.000",
    rating: 4
  },
  {
    id: 3,
    title: "Cama moderna, ideal para mascotas pequeñas",
    mainTitle: "Super contemporánea, y muy original, ideal para quienes buscan un estilo de decoración moderno",
    img: "/bark-23-catbed2.jpg",
    price: "Precio con descuento: $45.000",
    rating: 5
  },
 
  {
    Id: 8,
    title: "Alimento orgánico para gatos",
    mainTitle: "Ingrededientes de alta calidad, desarrollado por un grupo de nutricionistas locales. Se vende por kilo.",
    img: "/bark-07-catfood.jpeg",
    price:"$5.000",
    rating: 5
  },
 
   {
      id: 14,
      title: "Cama estilo cueva a para nuestros amigos felinos",
      mainTitle: "Realizado completamente con productos reciclados, este estilo de cama/cueva es perfecto para adornar cualquier ambiente.",
      img: "/bark-24-catbed3.jpeg",
      price: "$28.000",
      rating: 5
    },

  ] ;
  
  
  return (
      <section className="background-image bg-repeat-space">
      <HeaderTop/>
    <div  className='bg-bgImage bg-repeat bg-cover bg-bottom w-full max-h-full'>
      <div className='container'>
        <div className='font-bold text-5xl pb-4 text-center text-white'>Barkery - Gatos</div>
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
    </section>
  )
}

export default Products