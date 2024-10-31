import React from 'react';
import { BiUser } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import {  HiOutlineShoppingCart } from 'react-icons/hi';
import { FcGoogle } from "react-icons/fc";
import Image from 'next/image';


 const HeaderMain = ({ cartCount }: { cartCount: number }) => {

  return (
    <div className='border-b border-red-400 py-5 bg-red-400  pb-5 pt-5'>
      <div className='container sm:flex justify-between items-center my-0'>
        <Image src="/barkery-logo.jpg"  
        width={80} 
        height={100}
        alt="Barkery Logo"
        />
        <div className='font-bold text-3xl text-center pb-4 sm:pb-0 text-white'>
        </div>
        <div className='w-full sm:w-[300px] md:w-[70%] relative'>
          <input className='border-gray-300 border p-2 px-4 rounded-lg w-full' type='text' placeholder='Buscar productos...' />
          <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-500' size={30}/>
        </div>
        <div className='hidden lg:flex gap-4 text-blackish text-[30px]'>
          <BiUser size={30}/>
          <div className='relative'> 
           
             <a
              href="https://www.google.com"
              target="_blank"
              >
            <FcGoogle size={30}/></a>
          <div className='bg-gray-800 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>Top</div>
        </div>
        <div className='relative'> 
            <HiOutlineShoppingCart size={30}/>
          <div className='bg-gray-800 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1 '>0</div>
        </div>
        </div>
   
      </div>
    </div>
  )
}

export default HeaderMain