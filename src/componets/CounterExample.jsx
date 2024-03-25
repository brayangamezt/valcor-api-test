import React, { useState } from 'react'

export const CounterExample = () => {
    const [counter, setCounter] = useState(0);

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center' >
      <h1 className='text-6xl' > Current Value: { counter }  </h1>

      <div className='mt-5'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2' 
                onClick={ ()=>{ setCounter( counter + 1 ) } } 
                > Counter + 
        </button>
    
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' 
          onClick={ ()=>{ setCounter( counter - 1 ) } } > 
            Counter - 
        </button>
      </div>
    </div>
  )

}
