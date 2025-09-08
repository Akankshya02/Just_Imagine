import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
      <div className='text-stone-500 inline-flex text-center gap-2 bg-pink-50 px-6 py-1 rounded-full border border-neutral-500'>
        <p>
          World's best text to image generator
        </p>
        <img src={assets.star_icon} alt="" />
      </div>
      <h1 className='text-4xl max-w-[300px] sm:max-w-[590px] mx-auto mt-10 text-center'>Turn your imagination into <span className='text-pink-900'>image</span>,<br /> in seconds.</h1>

      <p></p>

    </div>
  )
}

export default Header
