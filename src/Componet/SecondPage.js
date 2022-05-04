import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useEffect } from 'react'
const SecondPage = () => {

  const[move,setmove]=useState(false)
  const [data,setdata]=useState('')
  const sliding={
    hidden:{
      x:70,
      opacity:0
    },
    show:{
      x:0,
      opacity: 1,
      transition:{
        type:'tween',
        stiffness:400,
        duration:0.7,
      
      }
    },
  }
   window.addEventListener('scroll',()=>{setdata(window.scrollY)})
  useEffect(()=>{
  if(data>370){
    setmove(true)
  }
  else{
    setmove(false)
  }
  },[data])

  return (
    <div  className='h-full w-full dark:bg-dark bg-cream laptop:flex justify-center font-poppins laptop:text-left text-center' >
      <div className='laptop:w-5/6 h-full flex justify-between flex-col z-2'>
       <div className='w-full flex flex-col items-center justify-around mt-10'> <div className='w-2/6  text-neutral  text-sm flex items-center justify-around whitespace-nowrap'><div className='w-28 h-[1px] dark:bg-lightgreen bg-green'></div>About Me<div className='w-28 h-[1px] dark:bg-lightgreen bg-green'></div></div>
       <div><div className='dark:text-white text-dark font-semibold text-4xl '>Abo<span className='text-green dark:text-lightgreen '>u</span>t <span className='text-green dark:text-lightgreen '>M</span>e</div></div></div>
        <div className='w-full flex-col laptop:flex-row  flex laptop:justify-between justify-around items-center h-full'>
        <div className='laptop:w-full w-5/6 h-full ' ><div><img src='/menu/Aboutme.png'/></div></div>
        <div className='w-full h-full flex justify-center laptop:justify-end'>
      { move&& <motion.div variants={sliding} initial="hidden" animate="show" className='w-5/6 h-3/6 flex flex-col justify-around text-dark dark:text-white text-sm   tablet:text-lg laptop:text-base desktop:text-lg ' ><div className='mb-3'>Hello! My names are Ominyi Jonah Unogwu and i'm a Frontend developer based in lagos,Nigeria. I have a serious passion for coding and solving problems. </div><div className='mb-3'>I'm a well-organised person with high attention to details.although i have worked on backend projects using Node.js,i am mostly focused on the frontend and always learning to get better</div><div className='mb-3'>I currently work at <a href="http://www.3chub.com" className='text-green dark:text-lightgreen text-xl'>3chub</a> as an IT assistant and work as a frontend developer on the side as a side-hustle.</div><div className='mb-3'>For making websites i use Html,Css,Sass,Javascript,React,Tailwind and occasionally Bootstrap.</div></motion.div>}
      </div>
        </div>

      </div>
    </div>
  )
}

export default SecondPage