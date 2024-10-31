import React from 'react';
import Image from 'next/image';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";


interface propsType {
 title: string;
 mainTitle: string;
 img: string;
 price: string;
 rating: number;
}

const ProductCard: React.FC<propsType> = ({
  title,
  mainTitle,
  img,
  price,
  rating,
}) => {
  
  const totalRating = (rating: number) => {
    switch(rating) {
      case 1: 
        return (
          <div className="flex flex-gap-1 justify-center text-[20px] text-yellow-600">
            <FaStar/>
            <FaRegStar/>
            <FaRegStar/>
            <FaRegStar/>
            <FaRegStar/>
          </div>
        );
        case 2: 
            return (
            <div className="flex flex-gap-1 text-[20px] text-yellow-600">
              <FaStar/>
              <FaStar/>
              <FaRegStar/>
              <FaRegStar/>
              <FaRegStar/>
            </div>
        );
        case 3: 
          return (
            <div className="flex flex-gap-1 text-[20px] text-yellow-600">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaRegStar/>
              <FaRegStar/>
            </div>
        );
      case 4: 
        return (
          <div className="flex flex-gap-1 text-[20px] text-yellow-600">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaRegStar/>
          </div>
      );
      case 5: 
        return (
          <div className="flex flex-gap-1 text-[20px] text-yellow-600">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
          </div>
      );
      default: return null;
    }
  }
    
    return (
       <div className='px-6 py-6 bg-slate-300 border border-red-800 rounded-xl max-w-[1000px]'>
          <div>
            <Image 
            className="w-full h-auto" 
            src={img} 
            width={1000} 
            height={800} 
            alt={title} />
          </div>
          <div className='space-y-2 py-2'>
            <h2 className='text-gray-600 text-center font-bold  uppercase'>{title} </h2>
            <h3 className='text-blue-800 text-center font-bold'>{mainTitle}</h3>
            <div>{totalRating(rating)}</div>
            <div className='flex font-bold gap-4'>
              {price}npm 
            </div>
          </div>

    </div>
  )
}

export default ProductCard