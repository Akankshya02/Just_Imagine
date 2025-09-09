import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()
  const onClickHandler = ()=>{
        if(user){
          navigate('/result')
        }else{
          setShowLogin(true)
        }
    }

  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20'
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}>

      <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-pink-50 px-6 py-1 rounded-full border border-neutral-500'
      initial={{opacity:0, y:-20}}
      animate={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{delay:1, duration:0.8}}>

        <p>
          World's best text to image generator
        </p>

        <img src={assets.star_icon} alt="" />

      </motion.div>

      <motionh1 className='text-5xl max-w-[300px] sm:max-w-[590px] mx-auto mt-10 text-center'>
        Turn your imagination into <span className='text-pink-900' 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.5, duration: 2}}
        >Images</span>, in seconds.</motionh1>

      <motion.p className='text-sm max-w-[300px] sm:max-w-[590px] mx-auto mt-10 text-center'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.8, duration: 0.8}}
      >
        Welcome to Just Imagine, where your words become art! Simply type a description of anything you can dream up—and our AI will bring it to life in a stunning, high-quality image. It's time to unleash your creativity and see what you can create.</motion.p>

      <motion.button onClick={onClickHandler} className='sm:text-lg text-white bg-pink-800 w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full hover:scale-105 transition-all duration-500'
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{default: {duration:0.5}, opacity:{delay:0.8, duration:1}}}
      >
        See the magic
        <img className='h-6' src={assets.star_group} alt="" />
      </motion.button>

      <motion.div className='flex flex-wrap justify-center mt-8 gap-3'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1, duration: 1}}
      >
        {Array(6).fill('').map((item, index)=>(
            <motion.img
            whileHover={{scale:1.05, duration: 0.1}} 
            className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10 ' 
            src={index % 2 == 0 ? assets.sample_img_1 : assets.sample_img_2} key={index} width={70}/>
        ))}
      </motion.div>
        <motion.p className='mt-2 text-neutral-600'
        initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1.2, duration: 0.8}}
        >Generated images from JustImagine</motion.p>
    </motion.div>
  )
}

export default Header
