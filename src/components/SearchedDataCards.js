import React from 'react'
import { IMG_LINK } from '../utils/config'


const SearchedDataCards = (props) => {
  return (
    <div className='p-2 m-2 hover:bg-gray-200 w-[80%] flex '>
        
        <img className='w-32 h-28 rounded-lg' src={IMG_LINK+props?.items?.cloudinaryId} />
        <div className='flex flex-col justify-center pl-5  '>
            <h1 className='text-lg font-medium'>{props?.items?.text}</h1>
            <h1 className='font-light'>{props?.items?.type}</h1>
        </div>
 

    </div>
  )
}

export default SearchedDataCards