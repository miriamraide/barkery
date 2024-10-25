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
    rating: 4
  },
  
  {
    id: 6,
    title: "Doble set of bowls para perros",
    mainTitle:"Realizado completamente con productos reciclados, este estilo de bowls es perfecto para adornar cualquier ambiente.",
    img: "/bark-03-dogbowls.jpg",
    price: "$32.000",
    rating: 5
  },

  {
  id: 7,
  title: "Alimento orgánico para perros",
  mainTitle: "Ingrededientes de alta calidad, desarrollado por un grupo de nutricionistas locales. Se vedne por kilo.",
  img: "/bark-06-dogfood.jpg",
  price: "$5.000",
  rating: 5
  },

   {
      id: 13,
      title: "Cama peluda para nuestros amigos caninos",
      mainTitle: "Realizado completamente con productos reciclados, este estilo de cama es perfecto para adornar cualquier ambiente.",
      img: "/bark-16-dogbed1.jpg",
      price: "$28.000",
      rating: 5
   },

    {
       id: 15,
       title: "Cama canasto a para nuestros amigos caninos",
       mainTitle: 'Realizado completamente con productos reciclados, este estilo de canastos es perfecto para adornar cualquier ambiente.',
       img: "/bark-18-dogbed3.jpg",
       price:"$25.000",
       rating:3,    
    } ,           
  ] ;
  
  
  return (
      <section className="background-image bg-repeat-space">
      <HeaderTop/>
    <div  className='bg-bgImage bg-repeat bg-cover bg-bottom w-full max-h-full'>
      <div className='container'>
        <div className='font-bold text-5xl pb-4 text-center text-white'>Barkery - Perros </div>
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