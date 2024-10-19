import React from 'react'
import { BsFacebook,BsMeta,BsInstagram, BsTwitter} from 'react-icons/bs'

const HeaderTop = () => {
  return (
    <div className='border-b border-blue-200 hidden sm:block bg-yellow-400 '>
    <div className='container py-4'>
      <div className='flex justify-between items-center'>
        <div className='hidden lg:flex gap-1'>
          <div className='header-top-icon-container'>
            <BsFacebook size={18}/>
            </div>
            <div className='header-top-icon-container'>
            <BsInstagram size={18}/>          </div>
            <div className='header-top-icon-container'>
            <BsTwitter/>          </div>
            <div className='header-top-icon-container'>
            <BsMeta size={18}/>          </div>
        </div>
        <div className='text-white text-[20px]'>
          <b> ENVIO GRATIS </b> en compras que superen los $50.000
        </div >
        <div className='flex gap-4'>
          <select
          className='text-gray-600 text-[12px] w-[70px]'
            name='moneda'
            id='moneda'
            >
              <option value='AR Pesos $'>Pesos AR $</option>
              <option value='US Dollars u$s'>US Dollars u$s</option>
          </select>
          <select
          className='text-gray-600 text-[12px] w-[80px]'
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