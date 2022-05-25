import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useEffect } from 'react'
import { Data } from './ThirdData'
import Thirdcontent from './Thirdcontent'
import { useAnimation } from 'framer-motion'
function ThirdPage() {
  const anime=useAnimation()
  const [data,setdata]=useState('')
  useEffect(()=>{
   if(data>1350){
     anime.start({
      y:0,
      opacity:1,
      transition:{
        type: "spring",
        stiffness: 100,
        duration:1.5,
      }
     })
 
    }
    if(data<1350){
     anime.start({
      y:150,
      opacity:0,
      transition:{
        type: "spring",
        stiffness: 100,
        }
     })}

  },[data])
 
     
      window.addEventListener('scroll',()=>{setdata(window.scrollY)})
      useEffect(()=>{
      
      },[data])


      const Info=Data.map((each)=>{
      return(
        <><Thirdcontent data={each}/></>
      )
      })
  return (
    <div className='h-full   w-full flex justify-center font-poppins my-5 tablet:mt-20 laptop:mt-0' id='Third' >
    <div className='w-[80%] h-full flex justify-end z-2 laptop:ml-20'>
      <div className='flex flex-wrap flex-col justify-between items-center w-[100%] h-[200%]'>
      <div className='w-full flex flex-col items-center justify-around mt-10'> <div className='w-2/6  text-neutral  text-sm flex items-center justify-around whitespace-nowrap'><div className='w-28 h-[1px] dark:bg-lightgreen bg-green'></div>My Project<div className='w-28 h-[1px] dark:bg-lightgreen bg-green'></div></div>
      <div><div className='dark:text-white text-dark font-semibold tablet:text-5xl text-3xl '>My <span className='text-green dark:text-lightgreen '>Pr</span>o<span className='text-green dark:text-lightgreen '>j</span>ect</div></div></div>

   
      <motion.div animate={anime}  className='w-[100%] flex flex-col justify-around flex-wrap '>
    {Info}
    </motion.div>

   
    </div>
    </div>
  </div>
  )
}

export default ThirdPage