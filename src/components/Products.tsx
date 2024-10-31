import React from 'react';
import ProductCard from './ProductCard';

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
    id: 4,
    title: "Pecera de vidrio acojedora adaptable a lugares pqueños",
    mainTitle: "Este estilo de pecera no desilusiona, siempre vigente para admirar a nuestros peces amigos.",
    img: "/bark-05-fishbowl.jpg",
    price:  "Precio con descuento: $55.000",
    rating: 5
  },
  {
    id: 5,
    title: "Alimentador con semillas y néctar para pájaros",
    mainTitle: "Fácil de instalar, es un atractivo para ver alimentarse desde tu ventana, aves de distintos tipos y colores. Un sueño!.",
    img: "/bark-04-birdfeeder.jpg",
    price:  "Precio con descuento: $25.000",
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
    Id: 8,
    title: "Alimento orgánico para gatos",
    mainTitle: "Ingrededientes de alta calidad, desarrollado por un grupo de nutricionistas locales. Se vende por kilo.",
    img: "/bark-07-catfood.jpeg",
    price:"$5.000",
    rating: 5
  },
  
  {
    Id: 9,
    title: "Alimento orgánico para pájaros",
    mainTitle: "Ingrededientes de alta calidad, desarrollado por un grupo de nutricionistas locales. Se vende por 100 gramos.",
    img: "/bark-08-birdfood.jpeg",
    price:"$3.000",
    rating: 5
   },
  
  {
    Id: 10,
    title: "Alimento orgánico para peces",
    mainTitle: "Ingrededientes de alta calidad, desarrollado por un grupo de nutricionistas locales. Se vende por 100 gramos.",
    img: "/bark-09-fishfood.jpg",
    price: "$2.000",
    rating: 5
  },

    {
      id: 12,
      title: "Alimento orgánico para hamsters",
      mainTitle: "Ingrededientes de alta calidad, desarrollado por un grupo de nutricionistas locales. Se vende por 100 gramos.",
      img: "/bark-10-hamsterfood.jpg",
      price:"$3.500",
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
      id: 14,
      title: "Cama estilo cueva a para nuestros amigos felinos",
      mainTitle: "Realizado completamente con productos reciclados, este estilo de cama/cueva es perfecto para adornar cualquier ambiente.",
      img: "/bark-24-catbed3.jpeg",
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
    <div  className='bg-bgImage bg-repeat bg-cover bg-bottom w-full max-h-full'>
      <div className='container'>
        <div className='font-bold text-6xl pb-4 text-center text-white'>Barkery Productos</div>
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