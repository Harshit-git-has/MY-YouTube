import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-5  m-2 shadow-lg '>
        <div className='flex col-span-1 '>
        <img 
        onClick={() => toggleMenuHandler()}
           className='h-8 cursor-pointer'
           src='https://cdn-icons-png.flaticon.com/128/2791/2791469.png'
           alt='menu icon'
        />

        <a href='/'>
        <img
            className='h-8  mx-2'
            src='https://t4.ftcdn.net/jpg/07/32/01/31/360_F_732013128_4w36WRSEpuF1oT9nK0Bd31GT353WqFYi.jpg'
            alt='yt icon'
          />
        </a>
        
        </div>
        <div className='col-span-10 px-10'>
            <input className='w-1/2 border border-gray-500 p-2 rounded-l-full' type='text' /> 
            <button className='py-2 px-5 border border-gray-500 bg-gray-100 rounded-r-full'>Search</button>
        </div>
        <div>
        <img 
            className='h-8 col-span-1'
            src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png'
            alt='user logo'
          />  
        </div>
    </div>
  )
}

export default Head;