"use client"
import React from 'react';
import Slider from 'react-slick';
import Slide from "@/components/Slide";

const Hero = () => {
  let settings ={
    dots: true,
    infinite:true,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: true,
    pauseOnHover: false,
      };

const slideData = [
  {

  id: 1,
  title: "Correa con soporte para pasear a nuestros amigos caninos",
  mainTitle: "Super Segura, con correa extendible, realizada con materiales reciclados",
  img: "/bark-02-dogleash-support.jpg",
  price:  "Precio con descuento: $28.000"
},

{
  id: 3,
  title: "Mochila para llevar mascotas pequeñas/como gatos",
  mainTitle: "Confeccionada por abuelas del Noreste Argentino, super liviana y flexible, lista para llevar a todas partes",
  img: "/bark-01-catbackpack.jpg",
  price:  "Precio con descuento: $35.000"
},
{
  id: 4,
  title: "Cama moderna, ideal para mascotas pequeñas",
  mainTitle: "Super contemporánea, y muy original, ideal para quienes buscan un estilo de decoración moderno",
  img: "/bark-23-catbed2.jpg",
  price: "Precio con descuento: $45.000"
},

{
  id: 5,
  title: "Pecera de vidrio acojedora adaptable a lugares pqueños",
  mainTitle: "Este estilo de pecera no desilusiona, siempre vigente para admirar a nuestros peces amigos.",
  img: "/bark-05-fishbowl.jpg",
  price:  "Precio con descuento: $55.000"
},
{
  id: 6,
  title: "Alimentador con semillas y néctar para pájaros",
  mainTitle: "Fácil de instalar, es un atractivo para ver alimentarse desde tu ventana, aves de distintos tipos y colores. Un sueño!.",
  img: "/bark-04-birdfeeder.jpg",
  price:  "Precio con descuento: $25.000"
}
]
  return (
    <div>
    <div className='container pt-6 lg:pt-0 lg:pb-5'>
      <Slider {...settings}>
        {slideData.map((item) => (
        <Slide
        key={item.id}
        img={item.img}
        title={item.title}
        mainTitle={item.mainTitle}
        price={item.price}
        
        /> ))}
      </Slider>
    </div>
    </div>
  )
}

export default Hero