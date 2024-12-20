import React from "react";
import Image from "next/image";

function Inicio() {
  return (
      <div className="container flex w-full">
       
        <div className="box text-lg text-center pb-6 sm:pb-0  ">
                    <div className= " font-bold text-4xl m-10 text-red-600">BARK y sus Amigos</div>
       
        
              < Image src="/bark-friends.jpg"  
              width={750} 
              height={550}
              alt="Bark y sus Amigos"/>
             <div className="text-2xl text-center pb-6 sm:pb-0 text-black  font-bold mx-5 my-5">
              En la última década, ha surgido un notorio auge en la adopción de
                  prácticas sostenibles por parte de diversas marcas, las cuales han
                  decidido comprometerse con la fabricación de productos utilizando
                  materiales reciclados. Este fenómeno no solo responde a una
                  creciente conciencia ambiental por parte de los consumidores, sino
                  que también representa una contribución positiva al bienestar del
                  planeta. <b>BARKery</b> se ha sumado a esta tendencia, ya sea
                  ofreciendo productos alimenticios orgánicos preparados con los más
                  frescos ingredients, como también disponiendo de productos no
                  alimenticios fabricados con materiales reciclados.
            </div>
        </div>
        <div className=" box text-2xl text-center pb-6 sm:pb-0 text-black  font-bold mx-5 my-5">
            <div>En la última década, ha surgido un notorio auge en la adopción de
            prácticas sostenibles por parte de diversas marcas, las cuales han
            decidido comprometerse con la fabricación de productos utilizando
            materiales reciclados. siguiendo la
            creciente conciencia ambiental por parte de los consumidores, sino
            que también representa una contribución positiva al bienestar del
            planeta. <b>BARKery</b> se ha sumado a esta tendencia, ya sea
            ofreciendo productos alimenticios orgánicos preparados con los más
            frescos ingredients, como también disponiendo de productos no
            alimenticios fabricados con materiales reciclados.</div>
            <h2 className=" font-bold text-3xl m-10 text-red-600">
            Sumate a la BARKerymanía.   Reciclá!
            </h2>
            < Image src="/bark-recycle.jpg"  
             width={500} 
             height={250}
            alt="Bark recicla"/>
            
         </div>
        
          
         <div className=" box text-lg text-center pb-4 sm:pb-0 ">
                    <div className=" font-bold text-4xl m-10 text-red-600">Alimentos Ricos y Saludables</div>
       
        
              < Image src="/bark-healthyfood.jpg"  
              width={750} 
              height={550}
              alt="Bark come sano"/>
              <div className="text-2xl text-center pb-4 sm:pb-0 text-black  font-bold mx-5 my-5">
              El principal desafío al formular y desarrollar productos para el
            mercado en alimentos de mascotas es garantizar una nutrición
            adecuada.Cada especie tiene requerimientos nutricionales
            específicos, y es esencial que los productos se formulen para
            satisfacer estas necesidades. Los nutricionistas formuladores
            trabajan con colaboración con granjeros locales para asegurarse de
            que los productos sean equilibrados y cumplan con todos los
            requisitos nutricionales necesarios. <b>BARKery</b> promueve la
            venta de alimentos sanos y sabrosos para las mascotas, asegurando la
            salud, la longevidad de las mascotas y la satisfacción de los
            tutores.
            </div>
        </div>

        </div>
       
  );
}
export default Inicio;
