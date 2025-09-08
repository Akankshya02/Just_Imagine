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
      <h1 className='text-5xl max-w-[300px] sm:max-w-[590px] mx-auto mt-10 text-center'>Turn your imagination into <span className='text-pink-900'>Images</span>, in seconds.</h1>

      <p className='text-sm max-w-[300px] sm:max-w-[590px] mx-auto mt-10 text-center'>Welcome to Just Imagine, where your words become art! Simply type a description of anything you can dream up—and our AI will bring it to life in a stunning, high-quality image. It's time to unleash your creativity and see what you can create.</p>

      <button className='sm:text-lg text-white bg-pink-800 w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full '>
        See the magic
        <img className='h-6' src={assets.star_group} alt="" />
      </button>

      <div className='flex flex-wrap justify-center mt-8 gap-3'>
        {Array(6).fill('').map((item, index)=>(
            <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10 ' 
            src={index % 2 == 0 ? assets.sample_img_1 : assets.sample_img_2} key={index} width={70}/>
        ))}
      </div>
        <p className='mt-2 text-neutral-600'>Generated images from JustImagine</p>
    </div>
  )
}

export default Header
