import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Productd = ( {title,price,image, idProduct} ) => {
  const [showImage, setShowImage] = useState(false);

  const handleImage = () =>{
    setShowImage(true);
  }


  return (
    <div className={`w-1/4 min-h-20 m-1 border border-2 ${ showImage ? '' : 'hidden' }`} >
        <figure>
          <img src={image[1]} alt={title} onLoad={ handleImage } />
        </figure>
        <p className='text-center text-lg' > {title} </p>
        <p className='text-center' > $ {price} </p>
        <div className='flex justify-center'>
          <button className='text-white bg-blue-700 hover:bg-blue-800 w-3/5 m-2 p-2 rounded-md' > 
            <Link to={`/product/${idProduct}`}> View Product </Link>
          </button>
        </div>
    </div>
  )
}
