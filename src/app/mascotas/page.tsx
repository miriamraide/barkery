import React from 'react';
import ProductCard from "../../components/ProductCard";
import HeaderTop from '@/components/HeaderTop';

const Products = () => {

  const productsData = [
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
                
  ] ;
   
  return (

      <section className="background-image bg-repeat-space">
      <HeaderTop/>
    <div  className='background-image'>
      <div className='container'>
        <div className='font-bold text-5xl pb-4 text-center text-white'>Barkery - Otras mascotas</div>
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