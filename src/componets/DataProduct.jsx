import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const DataProduct = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect( ()=>{
      axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).then( (response)=>{
        const {data} = response;
        setProduct(data);
        console.log(product);
      } )
    }, [] );

  return (
    <div className='w-full h-screen ' >
      {
        product ?
          <article className='w-3/5 min-h-2/5 flex p-2 shadow-lg ml-4' >
            <figure>
              <img src={product.images[0]} alt={product.title} />
            </figure>
            <div className='ml-3'>
              <p className='text-xl font-bold' > {product.title} </p>
              <p className='mt-2 text-2xl font-bold text-green-400' > $ {product.price}.00 </p>
              <p className='mb-4'>
                <span className='text-sky-500' > Category: </span>
                <span className='ml-2 bg-sky-500 text-white pl-2 pr-2 rounded ' > {product.category.name} </span>
              </p>
              <p className='text-justify' > {product.description} </p>
            </div>
            
          </article>
        :
          null
      }
    </div>
  )

}
