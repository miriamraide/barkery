import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import HeaderTop from "@/components/HeaderTop";

const page = () => {
  return (
    <section className="background-image bg-repeat-space">
    <HeaderTop/>
    <div className=" display flex-auto bg-slate-400 py-1 px-1">
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
          </section>
  )
}

export default page        
        
        