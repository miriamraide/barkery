import React from 'react';
import { BiUser } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FaHeart } from "react-icons/fa6";
import Image from 'next/image';

const HeaderMain = () => {
  return (
    <div className='border-b border-red-400 py-5 bg-red-400  pb-5 pt-5'>
      <div className='container sm:flex justify-between items-center my-0'>
        <Image src="/barkery-logo.jpg"  
        width={90} 
        height={70}
        alt="Barkery Logo"
        />
        <div className='font-bold text-2xl text-center pb-4 sm:pb-0 text-white'>
        </div>
        <div className='w-full sm:w-[300px] md:w-[70%] relative'>
          <input className='border-gray-300 border p-2 px-4 rounded-lg w-full' type='text' placeholder='Buscar productos...' />
          <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-500' size={20}/>
        </div>
        <div className='hidden lg:flex gap-4 text-blackish text-[30px]'>
          <BiUser/>
          <div className='relative'> 
            <FaHeart/>
          <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>0</div>
        </div>
        <div className='relative'> 
            <HiOutlineShoppingBag/>
          <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1 '>0</div>
        </div>
        </div>
   
      </div>
    </div>
  )
}

export default HeaderMain