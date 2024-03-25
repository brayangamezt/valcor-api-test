import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from './';


export const Main = () => {
  return (
      <div className='relative pb-10' >
        <Header/>

        <Outlet/>

        <Footer/>
      </div>
  )
}
