import React, { useState } from 'react'
import { assets } from '../assets/assets'


const Result = () => {

  const[image, setImage] = useState(assets.sample_img_1)
  const [isImageLoaded, setImageLoaded] = useState(true)
  const [loading, setLoading] = useState(false)
  return (
    <form className='flex flex-col min-h-[90vh] justify-center items-center'>
    <div>
      <div className='relative'>
        <img src={image} alt="" className='max-w-sm rounded'/>

        <span className='absolute bottom-0 left-0 h-1 bg-pink-300 w-full transition-all duration-[10s]'/>

      </div>
      <p className={!loading ? 'hidden' : ''}>Coming Your Way.....</p>
    </div>
{!isImageLoaded &&

    <div className='flex w-full max-w-xl bg-pink-300 text-black text-sm p-0.5 mt-10 rounded-full'>

      <input type="text" placeholder='Jot Down your thoughts' className='flex-1 bg-transparent otline-none ml-8 max-sm:w-20 placeholder-color'/>

      <button type='submit' className='bg-pink-600 px-10 sm:px-16 py-3 rounded-full'>
        Generate
        </button>

    </div>
}

{
  isImageLoaded && 

    <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
      <p onClick={()=>{setIsImageLoaded(false)}}  className='bg-transparent border border-pink-900 text-black px-8 py-3 rounded-full curosor-pointer'>
        Generate Another
      </p>
      <a href={image} download  className='bg-pink-300 px-10 py-3 rounded-full cursor-pointer text-black'>
        Download
      </a>
    </div>
}
    </form>

  )
}

export default Result
