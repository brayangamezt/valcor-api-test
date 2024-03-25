import React from 'react'
import { Navigation } from './';

export const Header = () => {
  return (
    <>
      <header className='sticky top-0 bg-gray-200 border-b p-3 flex justify-between items-center' >
        <span className='font-bold' > HeaderApp </span>
        <Navigation/>
      </header>
    </>
  )
}
