import React from 'react'
import WebImages from './Navbar/WebImages'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useEffect } from 'react'
import { Data } from './ThirdData'
import Thirdcontent from './Thirdcontent'
function ThirdPage() {
    
  const[move,setmove]=useState(false)
  const [data,setdata]=useState('')
    const slide={
        hidden:{
          y:40,
          opacity:0
        },
        show:{
          y:0,
          opacity:1,
          transition:{
            type:'tween',
            duration:0.7,
            stiffness:400,
            when:'beforeChildren',
            staggerChildren:0.1
          }
        }
       
      }
      const children={
          hidden:{
           opacity:0,
           y:20,
          },
          show:{
            opacity:1,
            y:0
          }
      }
      window.addEventListener('scroll',()=>{setdata(window.scrollY)})
      useEffect(()=>{
      if(data>2270){
        setmove(true)
      }
      else{
        setmove(false)
      }
      },[data])
      const Info=Data.map((each)=>{
      return(
        <><Thirdcontent data={each}/></>
      )
      })
  return (
    <div className='h-full   w-full dark:bg-dark bg-cream flex justify-center font-poppins my-5' id='Third'>
    <div className='w-[80%] h-full flex justify-end z-2 laptop:ml-20'>
      <div className='flex flex-wrap flex-col justify-between items-center w-[100%]'>
      <div className='w-full flex flex-col items-center justify-around mt-10'> <div className='w-2/6  text-neutral  text-sm flex items-center justify-around whitespace-nowrap'><div className='w-28 h-[1px] dark:bg-lightgreen bg-green'></div>My Project<div className='w-28 h-[1px] dark:bg-lightgreen bg-green'></div></div>
      <div><div className='dark:text-white text-dark font-semibold text-4xl '>My <span className='text-green dark:text-lightgreen '>Pr</span>o<span className='text-green dark:text-lightgreen '>j</span>ect</div></div></div>
      <div className='w-full flex justify-center mt-5'><div className=' text-dark dark:text-white font-semibold text-lg'>Clic<span className=' dark:text-lightgreen text-green'>k </span>Imag<span className=' dark:text-lightgreen text-green'>e T</span>o View<span className=' dark:text-lightgreen text-green'>Si</span>te</div></div>
    <div className='w-[100%] flex justify-around flex-wrap '>
    {Info}
    </div>
    <div className='h-20 w-full flex items-center my-20 laptop:my-5'>
    {move&&<motion.div variants={slide} initial='hidden' animate='show' className='flex w-full justify-between flex-wrap '>
      <motion.div variants={children} className='bg-dark rounded-md text-cream  shadow-[0px_0px_4px_black] py-2 px-5 mb-5  mr-3 '>HTML</motion.div>
      <motion.div variants={children} className='bg-dark rounded-md text-cream shadow-[0px_0px_4px_black] py-2 px-5 mb-5 mr-3'>CSS</motion.div>
      <motion.div variants={children} className='bg-dark rounded-md text-cream shadow-[0px_0px_4px_black] py-2 px-5 mb-5 mr-3'>JAVASCRIPT</motion.div>
      <motion.div variants={children} className='bg-dark rounded-md text-cream shadow-[0px_0px_4px_black] py-2 px-5 mb-5  mr-3'>REACT</motion.div>
      <motion.div variants={children} className='bg-dark rounded-md text-cream shadow-[0px_0px_4px_black] py-2 px-5 mb-5  mr-3'>REDUX</motion.div>
      <motion.div variants={children} className='bg-dark rounded-md text-cream shadow-[0px_0px_4px_black] py-2 px-5 mb-5  mr-3'>TAILWIND</motion.div>
      <motion.div variants={children} className='bg-dark rounded-md text-cream shadow-[0px_0px_4px_black] py-2 px-5 mb-5  mr-3'>SCSS</motion.div>
      <motion.div variants={children}className='bg-dark rounded-md text-cream shadow-[0px_0px_4px_black] py-2 px-5 mb-5'>GIT</motion.div>
    </motion.div>}
    </div>
    </div>
    </div>
  </div>
  )
}

export default ThirdPage