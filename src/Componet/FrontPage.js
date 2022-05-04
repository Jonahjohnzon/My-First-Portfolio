import React from 'react'
import { motion } from 'framer-motion'
import Menu from '../Svg/Menu'
import Link from 'react-scroll/modules/components/Link'
import Dropdown from './Dropdown'
import { useState } from 'react'
const FrontPage = ({change,set}) => {
  const[drop,setdrop]=useState(false)
  const slide={
    hidden:{
      y:100,
      opacity:0
    },
    show:{
      y:0,
      opacity:1,
      transition:{
        type:'tween',
        duration:0.5,
        delay:1.5,
        stiffness:400,
        when:'beforeChildren',
        staggerChildren:0.3
      }
    }
   
  }
  const children={
      hidden:{
       opacity:0,
       y:30,
      },
      show:{
        opacity:1,
        y:0
      }
  }
  return (
    <div className='w-full h-[100vh] flex laptop:justify-end font-poppins dark:text-white text-dark' id='Home'>
      
        <div className='w-10 h-10 rounded-sw fixed top-[10vh] bg-orange mix-blend-multiply opacity-20 dark:opacity-40 left-[10vw] animate-backmovement z-30'></div>
        <div className='w-10 h-10 rounded-sw fixed top-[100vh] bg-purple mix-blend-multiply opacity-40  left-[100vw] animate-backmovement2 z-30'></div>
        <div className='w-10 h-10 rounded-sw fixed top-[40vh] bg-red mix-blend-multiply opacity-20 dark:opacity-40 left-[40vw] animate-backmovement3 z-30'></div>
        <div className='w-10 h-10 rounded-sw fixed top-[20vh] bg-yellow mix-blend-multiply opacity-20 dark:opacity-40 left-[70vw] animate-backmovement4 z-30'></div>
        <div className='w-10 h-10 rounded-sw fixed top-[10vh] bg-green mix-blend-multiply opacity-20 dark:opacity-40 left-[10vw] animate-backmovement5 z-30'></div>
        <div className='w-10 h-10 rounded-sw fixed top-[100vh] bg-lightgreen mix-blend-multiply opacity-20  left-[100vw] animate-backmovement6 z-30'></div>
        <div className='w-10 h-10 rounded-sw fixed top-[40vh] bg-blue mix-blend-multiply opacity-20 dark:opacity-40 left-[40vw] animate-backmovement7 z-30'></div>
        <div className='w-10 h-10 rounded-sw fixed top-[20vh] bg-green mix-blend-multiply opacity-20 dark:opacity-40 left-[70vw] animate-backmovement8 z-30'></div>
      
      <div className='w-full laptop:w-5/6 h-full flex flex-col z-2' >
        <div className='h-1/6 w-full flex justify-between items-center laptop:justify-end fixed laptop:static dark:bg-dark bg-cream '>
          <div className='laptop:hidden w-24 tablet:w-40 h-full'>
            <img src='/menu/jlogo.webp'/>
          </div>
          <div className='laptop:hidden w-14 tablet:w-20 mt-1 mr-2 h-full  ' onClick={()=>setdrop(!drop)}>
          <Menu  />
          </div>
          {drop&&<Dropdown set={drop} drop={drop=>setdrop(drop)} change={change} sett={set}/>}
          <Link to='Contact'spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}  className='w-32 h-10 laptop:flex justify-center items-center text-dark bg-green dark:bg-lightgreen rounded-3xl mr-40 dark:shadow-[1px_1px_3px_black] cursor-pointer hidden'>Contact Me</Link>
        </div>
        <div className='w-full h-5/6 laptop:flex items-center text-center  laptop:text-left'>
        <div className='w-full laptop:w-2/6 h-full flex items-center' >

          <motion.div variants={slide} initial="hidden" animate="show" className='w-full h-2/3 flex flex-col justify-around tablet:items-center laptop:items-start tablet:mt-80 laptop:mt-0'>
          <div   className=' whitespace-nowrap flex items-center   text-lg ml-3'>HEY THERE<span className='mx-3'> <img src='/icon/hand.png' className="w-5"/></span> I'M</div>
          <motion.div variants={children}>
            <div className=' font-bold text-7xl tablet:text-8xl mb-6 w-full 2/6 shadow-[0px_0px_4px_black] bg-white dark:bg-dark'>
            <div>Ominyi</div>
            <div>Jonah</div>
            </div>
            <div className=' text-2xl font-medium ml-3 dark:text-lightgreen text-green ' >FRONTEND DEVELOPER</div>
          </motion.div>
          <motion.div variants={children} className='laptop:ml-3 tablet:w-3/6 laptop:w-full tablet:text-xl laptop:text-base  desktop:text-lg' id='Second'>I'm a professional <span className=' dark:text-lightgreen text-green'>Frontend developer</span> with a little backend skills based in Lagos,Nigeria. </motion.div>
        </motion.div>
        
        </div>
        <div className='w-full  hidden laptop:flex justify-end'>
          <img src='/menu/imgport.png' className='laptop:scale-75 desktop:scale-100'  />
        </div>
        </div>
      </div>
    </div>
  )
}

export default FrontPage