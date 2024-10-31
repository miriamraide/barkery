import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
      < div className="display: inline-flex grid-cols-3 bg-blue-400 py-1">
       
          <div className="grid-cols-3 py-1 px-1">
            <h3
              className="text-red-700 tracking-widest text-2xl  uppercase sm:text-xl font-bold">  
              Barkery Pet Shop
            </h3>
            <div className="text-blackish lg:pr-24 font-bold text-wrap w-5">
              Nuestros Productos son realizados con materiales reciclados.
              Nuestros alimnentos orgánicos son producidos con los más altos
              estandards de calidad.
            </div>
            <p>🐶❤️</p>
            <a
              href="https://www.youtube.com/shorts/0O8I0xtQFP8"
              target="_blank"
              className="inline-block bg-red-600 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              Visita Nuestro Canal de Youtube
            </a>
          </div>

          <div className="py-1 px-1">
            <h3 className="text-red-700 lg:pr-28 font-extrabold text-center ">
              CONTACTO
            </h3>
            <p className="text-blackish lg:pr-24 font-bold text-center">
              San Martin 1512
            </p>
            <p className="text-blackish lg:pr-24 font-bold text-center">
              Buenos Aires - Capital - CP 1912
            </p>
            <p className="text-blackish lg:pr-24 font-bold text-center"> </p>
            <p className="text-blackish lg:pr-24 font-bold text-center">
              Teléfono: (11) 312-852-2134
            </p>
            <p className="flex justify-evenly">
              <a href="https://web.whatsapp.com/" target="_blank">
                <FaWhatsapp size={35} />
              </a>
            </p>
          </div>

          <div className="container py-1 px-1">
            <p className="text-red-700 lg:pr-28 font-extrabold ">
              SEGUINOS EN SOCIAL MEDIA
            </p>
            <div className="flex justify-center font-bold">
              <div className="mx-4 my-5">
                <a href="https://www.facebook.com" target="_blank">
                  <BsFacebook size={30} />{" "}
                </a>
              </div>
              <div className="mx-4 my-5">
                <a href="https://www.instagram.com" target="_blank">
                  <BsInstagram size={30} />{" "}
                </a>
              </div>
              <div className=" mx-4 my-5">
                <a href="https://www.twitter.com" target="_blank">
                  <BsTwitterX size={30} />
                </a>
              </div>
            </div>
            
            <div className="justify-end font-extrabold">
              {" "}
              <BiCopyright /> 2024 - The A Team{" "}
            </div>
          </div>
          </div>
  );
};

export default Footer;
