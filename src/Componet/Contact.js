import React from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { motion } from 'framer-motion';
const Contact = () => {
    const [displayresp,setDisplayresp]=useState(false)
    const [name,setname]=useState('')
    const [phone,setphone]=useState('')
    const [email,setemail]=useState('')
    const [msgs,setmsg]=useState('')
    const [msg,setMgs]=useState('')
    const Send=(e)=>{
    e.preventDefault()
   setemail('')
   setphone('')
   setname('')
   setmsg('')
    emailjs.sendForm('service_m3o8v1m','template_e1a2e38',e.target,'jhqkH0F-BeKZgqEvn').then(res=>{
    setDisplayresp(true)
    setMgs('Message has been sent')
    setInterval(() => {
        setDisplayresp(false)
    }, 4000);}).catch((err)=>{
    setDisplayresp(true)
    setMgs('Message not sent')
    setInterval(() => {
        setDisplayresp(false)
    }, 5000);})  
    
    }
    const slide={
        hidden:{
          y:80,
          opacity:0
        },
        show:{
          y:0,
          opacity:1,
          transition:{
            type:'tween',
            duration:0.5,
            stiffness:400,
          }
        }
       
      }
    
   
  return (
    <div className='h-full w-full dark:bg-dark bg-cream flex flex-col items-center font-poppins  z-1' >
       {displayresp&& <motion.div variants={slide} initial="hidden" animate="show" className='  fixed bottom-0 right-0 w-1/2 h-20 dark:bg-lightgreen bg-green font-bold text-black flex justify-center rounded-md items-center text-sm tablet:text-base'>
         {msg}
        </motion.div>}
    <div className=' w-full laptop:w-5/6 h-full  flex  justify-between flex-col z-2 text-center laptop:text-left'>
     <div className='w-full flex flex-col items-center justify-around my-10'> <div className='w-2/6  text-neutral  text-sm flex items-center justify-around whitespace-nowrap'><div className='w-28 h-[1px] dark:bg-lightgreen bg-green'></div>Contact<div className='w-28 h-[1px] dark:bg-lightgreen bg-green'></div></div>
     <div><div className='dark:text-white text-dark font-semibold text-4xl '>Con<span className='text-green dark:text-lightgreen '>ta</span>c<span className='text-green dark:text-lightgreen '>t</span></div></div></div>
      <div className='w-full h-full flex flex-col laptop:flex-row items-center'>
      <div className='w-full h-full flex-2 flex justify-center items-center' >
          <form className='w-full laptop:w-5/6 h-full flex flex-col justify-around items-center dark:text-white text-dark' onSubmit={Send}>
          <input type='email' placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)} name='email' className='laptop:w-4/6 my-3 w-5/6 rounded-xl h-14 bg-transparent border-dark dark:border-white border-solid border-2 placeholder:pl-4' required />
          <input type='text' placeholder='Name' value={name} onChange={(e)=>setname(e.target.value)}  name='name' className='laptop:w-4/6 w-5/6 my-3 rounded-xl h-14  bg-transparent border-dark dark:border-white border-solid border-2 placeholder:pl-4' required/>
          <input type='text' placeholder='Phone No' value={phone} onChange={(e)=>setphone(e.target.value)} name='phone' className='laptop:w-4/6 my-3 w-5/6 rounded-xl h-14  bg-transparent border-dark dark:border-white border-solid border-2 placeholder:pl-4' required />
              <textarea placeholder='Message' value={msgs} onChange={(e)=>setmsg(e.target.value)} name='message' className='laptop:w-4/6 w-5/6 my-3 h-40 rounded-xl  bg-transparent border-dark dark:border-white border-solid border-2 placeholder:pl-4'  required/>
              <input type="submit" className=' dark:bg-lightgreen bg-green w-2/6 laptop:w-1/6 h-10 rounded-xl text-dark mb-2'/>
              </form>
              <div>
                  </div></div>
      <div className='w-full h-full flex-1 flex flex-col justify-around text-dark dark:text-white text-lg' id='Contact'>
          <div className='h-full flex items-center justify-center  laptop:justify-start text-base desktop:text-lg'>
              <div className='flex flex-col h-2/6 justify-between my-10'><div  className='flex'>Address:<div className='ml-3'>Egbeda,Lagos State</div></div>
                   <div className='flex'>Email:<div className='ml-3' >jonahjohnzon@gmail.com</div></div>
                   <div className='flex'>Phone No:<div className='ml-3'>+234-810-690-8991</div></div>
              </div>
          </div>
      </div>
      </div>

    </div>
    <div className='w-full h-40  bg-cold'>
       <div className='text-sm w-full h-full flex items-center justify-center text-white'> 
           <div>&copy;Copyright 2022.All right reserved</div>
           </div>   
      </div>
  </div>
  )
}

export default Contact