import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
const SecondPage = () => {
   const anime =useAnimation()
  const [data,setdata]=useState('')
 window.addEventListener('scroll',()=>{setdata(window.scrollY)})
 
  useEffect(()=>{
    if(data>400){
      anime.start({
       x:0,
       opacity:1,
       transition:{
         type: "spring",
         stiffness: 150,
         duration:0.7,
       }
      })
  
     }
     if(data<420){
      anime.start({
       x:80,
       opacity:0,
       transition:{
         type: "spring",
         stiffness: 100,
         }
      })}
      if(data>710){
        setmove(true)
      }
      else{
        setmove(false)
      }
   },[data])
   const[move,setmove]=useState(false)

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

  return (
    <div  className='h-full w-full  laptop:flex justify-center font-poppins laptop:text-left text-center mb-24 tablet:mb-0 ' >
      <div className='laptop:w-5/6 h-full flex justify-between flex-col  ' id='Second'>
       <div className='w-full flex flex-col items-center justify-around mt-16 mb-28'> <div className='w-2/6  text-neutral  text-sm flex items-center justify-around whitespace-nowrap'><div className='w-28 h-[1px] dark:bg-lightgreen bg-green'></div>About Me<div className='w-28 h-[1px] dark:bg-lightgreen bg-green'></div></div>
       <div><div className='dark:text-white text-dark font-semibold tablet:text-5xl text-3xl '>Abo<span className='text-green dark:text-lightgreen '>u</span>t <span className='text-green dark:text-lightgreen '>M</span>e</div></div></div>
        <div className='w-full flex-col  laptop:flex-row  flex laptop:justify-between justify-around items-center h-full'>
        <div className='laptop:w-full w-5/6 h-full flex flex-row justify-center relative ' ><div>
          <div className=' border-2 border-black dark:border-white h-80 absolute w-40 tablet:w-80 top-0 z-0 left-20'></div>
          <div className=' w-72 z-10 relative my-16 shadow-md shadow-black'><img src="/icon/img.png"/></div>
          </div></div>
        <div className='w-full h-full flex justify-center flex-wrap items-center laptop:justify-end'>
   <motion.div  animate={anime} className='w-5/6 h-3/6 flex flex-col justify-around text-dark dark:text-white text-xs  tablet:text-lg laptop:text-base desktop:text-lg font-normal' ><div className='mb-3'>Hello! My names are Ominyi Jonah Unogwu and i'm a Fullstack and Mobile developer based in lagos,Nigeria. I have a serious passion for coding and solving problems. </div><div className='mb-3'>I'm a well-organised person with high attention to details, when working on backend projects i mainly work with Node.js,Express.js and MongoDB.</div><div className='mb-3'>I currently work at <a href="http://www.3chub.com" className='text-green dark:text-lightgreen text-xl'>3chub</a> as an IT assistant and work as a frontend developer on the side as a side-hustle.</div><div className='mb-3'>For making my frontend web design i use Html,Css,Sass,Javascript,React,Tailwind and occasionally Bootstrap and for building mobile applications i work with React-Native.</div></motion.div>
      </div>
        </div>
        <div className=' flex justify-center my-20 h-48'>
       <div className='tablet:w-4/6 w-5/6'>
       {move&&<motion.div variants={slide} initial='hidden' animate='show' className='flex w-full justify-center tablet:justify-between  flex-wrap text-xs tablet:text-base'>
      <motion.div variants={children} className='bg-black rounded-md text-white dark:bg-white dark:text-dark shadow-[0px_0px_4px_black] py-2 tablet:w-40 w-24  mb-5  mr-3 text-center  '>HTML</motion.div>
      <motion.div variants={children} className='bg-black rounded-md text-white dark:bg-white dark:text-dark shadow-[0px_0px_4px_black] py-2 tablet:w-40 w-24  mb-5 mr-3 text-center'>CSS</motion.div>
      <motion.div variants={children} className='bg-black rounded-md text-white dark:bg-white dark:text-dark shadow-[0px_0px_4px_black] py-2 tablet:w-40 w-24 mb-5 mr-3 text-center'>JAVASCRIPT</motion.div>
      <motion.div variants={children} className='bg-black rounded-md text-white dark:bg-white dark:text-dark shadow-[0px_0px_4px_black] py-2 tablet:w-40 w-24  mb-5  mr-3 text-center'>REACT</motion.div>
      <motion.div variants={children} className='bg-black rounded-md text-white dark:bg-white dark:text-dark shadow-[0px_0px_4px_black] py-2 tablet:w-40 w-24  mb-5  mr-3 text-center'>REDUX</motion.div>
      <motion.div variants={children} className='bg-black rounded-md text-white dark:bg-white dark:text-dark shadow-[0px_0px_4px_black] py-2 tablet:w-40 w-24  mb-5  mr-3 text-center'>TAILWIND</motion.div>
      <motion.div variants={children} className='bg-black rounded-md text-white dark:bg-white dark:text-dark shadow-[0px_0px_4px_black] py-2 tablet:w-40 w-24  mb-5  mr-3 text-center'>SCSS</motion.div>
      <motion.div variants={children} className='bg-black rounded-md text-white dark:bg-white dark:text-dark shadow-[0px_0px_4px_black] py-2 tablet:w-40 w-24  mb-5  mr-3 text-center'>NODE JS</motion.div>
      <motion.div variants={children} className='bg-black rounded-md text-white dark:bg-white dark:text-dark shadow-[0px_0px_4px_black] py-2 tablet:w-40 w-24 mb-5  mr-3 text-center'>EXPRESS JS</motion.div>
      <motion.div variants={children} className='bg-black rounded-md text-white dark:bg-white dark:text-dark shadow-[0px_0px_4px_black] py-2 tablet:w-40 w-24  mb-5  mr-3 text-center'>REACT NATIVE</motion.div>
      <motion.div variants={children} className='bg-black rounded-md text-white dark:bg-white dark:text-dark shadow-[0px_0px_4px_black] py-2 tablet:w-40 w-24  mb-5  mr-3 text-center'>MONGODB</motion.div>
    </motion.div>}
       </div>
       </div>
      </div>
    </div>
  )
}

export default SecondPage