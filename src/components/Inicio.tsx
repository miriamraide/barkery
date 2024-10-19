import React from "react";
import Image from "next/image";

function Inicio() {
  return (

      <div className="container flex mt-11">
       
        <div className="text-lg text-center pb-4 sm:pb-0 text-blackish mx-10 my-10">
                    <div className= "font-bold text-xl my-5">BARK y sus Amigos</div>
       
        
              < Image src="/bark-friends.jpg"  
              width={600} 
              height={450}
              alt="Bark y sus Amigos"/>
             <div className="my-5">
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
        <div className="text-lg text-center pb-4 sm:pb-0 text-blackish mx-10 my-10">
            <div className="my-5">En la última década, ha surgido un notorio auge en la adopción de
            prácticas sostenibles por parte de diversas marcas, las cuales han
            decidido comprometerse con la fabricación de productos utilizando
            materiales reciclados. Este fenómeno no solo responde a una
            creciente conciencia ambiental por parte de los consumidores, sino
            que también representa una contribución positiva al bienestar del
            planeta. <b>BARKery</b> se ha sumado a esta tendencia, ya sea
            ofreciendo productos alimenticios orgánicos preparados con los más
            frescos ingredients, como también disponiendo de productos no
            alimenticios fabricados con materiales reciclados.</div>
            <div className="font-bold text-xl my-5">
            Sumate a la BARKerymanía y Reciclá!
            </div>
            < Image src="/bark-recycle.jpg"  
             width={600} 
             height={450}
            alt="Bark recicla"/>
            
         </div>
          
         <div className="text-lg text-center pb-4 sm:pb-0 text-blackish mx-10 my-10">
                    <div className="font-bold text-xl my-5">Alimentos Ricos y Saludables</div>
       
        
              < Image src="/bark-healthyfood.jpg"  
              width={600} 
              height={450}
              alt="Bark come sano"/>
              <div className="my-5">
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
