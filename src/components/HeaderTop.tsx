import React from 'react'
import { BsFacebook,BsInstagram, BsTwitterX} from 'react-icons/bs'

const HeaderTop = () => {
  return (
    <div className='border-b border-blue-200 hidden sm:block bg-yellow-400 '>
    <div className='container py-4'>
      <div className='flex justify-between items-center'>
        <div className='hidden lg:flex gap-1'>
          <div className='header-top-icon-container'>
            <a
              href="https://www.facebook.com"
              target="_blank"
            >
             <BsFacebook size={22}/>
            </a>
            </div>
            <div className='header-top-icon-container'>
            <a
              href="https://www.instagram.com"
              target="_blank"
            >
              <BsInstagram size={22}/> 
            </a>
            </div>
            <div className='header-top-icon-container'>
            <a
              href="https://www.twitter.com"
              target="_blank"
            >
             <BsTwitterX size={22}/>  
            </a>
            </div>
           
        </div>
        <div className='text-white text-[25px]'>
          <b> ENVIO GRATIS </b> en compras que superen los <b> $50.000</b>
        </div >
        <div className='flex gap-4'>
        
          <select
          className='text-gray-600 text-[20px] w-[100px]'
            name='lenguage'
            id='lenguage'
            >
              <option value='Español'>Español</option>
              <option value='Inglés'>Inglés</option>
          </select>

        </div>
      </div>
    </div>
    </div>
  )
}

export default HeaderTop