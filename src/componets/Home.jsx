import React from 'react';
import videoC from '../assets/ecommerce.mp4';


export const Home = () => {
  return (
    <>
      <div className='text-2xl w-full h-screen flex flex-col justify-center items-center' >
        <h1 className='text-5xl' > Welcome </h1>
        <p className='text-3xl' > To watch the products you see the options in the side menu </p>
        <div className='w-2/5 h-3/5' >
          <video className='w-full h-full' autoPlay muted loop >
            <source src={videoC} type='video/mp4' /> 
          </video>
        </div>
      </div>
    </>
  )
}
