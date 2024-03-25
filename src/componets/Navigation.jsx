import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //Icon component
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>

      {/*Icono de navegacion*/}
      <span className='text-xl cursor-pointer' >
        <FontAwesomeIcon icon={ faBars } onClick={ ()=>{ setShowMenu( !showMenu ) } }  />
      </span>

      { showMenu && 
        <div className='fixed flex bg-black bg-opacity-45 top-0 left-0 w-full h-full z-50 shadow' >
          <div className='w-1/5 h-full bg-white animate-fade-right animate-duration-[1000ms]'>
            <p className='text-3xl text-center mb-4' > The menu </p>
            <ul className='mt-4' >
              <li className='text-blue-500 w-full text-center p-3 border-b hover:bg-sky-400 hover:text-white hover:cursor-pointer' >
                <Link to='/' className='block h-full' onClick={ ()=>{ setShowMenu(false) } } > Home </Link>
              </li>
              <li className='text-blue-500 w-full text-center p-3 border-b hover:bg-sky-400 hover:text-white hover:cursor-pointer' >
                <Link to='/counter' className='block h-full'  onClick={ ()=>{ setShowMenu(false) } } > Counter </Link>
              </li>
              <li className='text-blue-500 w-full text-center p-3 border-b hover:bg-sky-400 hover:text-white hover:cursor-pointer' >
                <Link to='/products' className='block h-full'  onClick={ ()=>{ setShowMenu(false) } } > Products </Link>
              </li>
            </ul>
          </div>
          <div className='w-4/5 h-full bg-transparent' onClick={ ()=>{ setShowMenu(false) } } ></div>
        </div> 
      }
      
    </nav>
  )

}
