import React,{useRef,Suspense, useEffect} from 'react'
import { motion } from 'framer-motion'
import Menu from '../Svg/Menu'
import Link from 'react-scroll/modules/components/Link'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Dropdown from './Dropdown'
import { useState } from 'react'
import { Canvas,useFrame } from '@react-three/fiber'
import * as THREE from "three"
import gsap from 'gsap'
import Model from '../che/Modelche'
import Loading from './Loading'
import Cursor from './Cursor'
const FrontPage = ({change,set,lightmode}) => {
  const[drop,setdrop]=useState(false)
  const slidin={
    hiddens:{
     
      opacity:0
    },
    shows:{
     
      opacity:1,
      transition:{
        type:'tween',
        duration:0.8,
        delay:2.5,
        stiffness:400,
      }
    }
   
  }
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
        delay:2.5,
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
  const Scroll=()=>{
    window.scrollTo({
      top:100000,
      behavior:"smooth"
    })
}
const ball=useRef(null)

const cameras=useRef(null)
const Box=()=>{
  useFrame((state)=>{
    if(!!cameras.current){
   const{x,y}=state.mouse
   cameras.current.setAzimuthalAngle(-y*Math.PI/180*20,0,0)
   cameras.current.setAzimuthalAngle(-x*Math.PI/180*45,0,0)
   cameras.current.update()
    }
  })
  useEffect(()=>{
  gsap.to(ball.current.position,{
    x:1,
    duration:2,
  },[])
  })
  return(
    <>
    <PerspectiveCamera makeDefault position={[0,1,5]} />
    <ambientLight args={["white",0.25]}/>
    <spotLight args={['white',1.5,7,200,0.4]} position={[-3,1,0]} castShadow/>
  <mesh position={[-7,-0.1,2]} castShadow ref={ball}>
    <sphereGeometry args={[0.5,32,32]} attach="geometry"/>
    <meshStandardMaterial  attach='material' color='white' metalness={0.6} roughness={0.2}/>
  </mesh>
  <Model/>
  <mesh  rotation={[-Math.PI/180*90,0,0]} position={[0,-0.6,0]} receiveShadow>
    <planeGeometry args={[20,20]}/>
    <meshStandardMaterial  color="#434343"/>
  </mesh>
  <Environment background>
    <mesh >
    <sphereGeometry args={[50,100,100]}/>
    <meshBasicMaterial color="#212121" side={THREE.BackSide}/>
    </mesh>
  </Environment>
  </>)
}

  return (
    <div className='w-full h-[100vh] flex laptop:justify-end font-poppins text-white bg-dark  shadow-lg dark:shadow-md shadow-black' >
      
        <div className='w-10 h-10 rounded-sw fixed top-[10vh] bg-orange mix-blend-multiply opacity-20 dark:opacity-40 left-[10vw] animate-backmovement z-30'></div>
        <div className='w-10 h-10 rounded-sw fixed top-[100vh] bg-purple mix-blend-multiply opacity-40  left-[100vw] animate-backmovement2 z-30'></div>
        <div className='w-10 h-10 rounded-sw fixed top-[40vh] bg-red mix-blend-multiply opacity-20 dark:opacity-40 left-[40vw] animate-backmovement3 z-30'></div>
        <div className='w-10 h-10 rounded-sw fixed top-[20vh] bg-yellow mix-blend-multiply opacity-20 dark:opacity-40 left-[70vw] animate-backmovement4 z-30'></div>
        <div className='w-10 h-10 rounded-sw fixed top-[10vh] bg-green mix-blend-multiply opacity-20 dark:opacity-40 left-[10vw] animate-backmovement5 z-30'></div>
        <div className='w-10 h-10 rounded-sw fixed top-[100vh] bg-lightgreen mix-blend-multiply opacity-20  left-[100vw] animate-backmovement6 z-30'></div>
        <div className='w-10 h-10 rounded-sw fixed top-[40vh] bg-blue mix-blend-multiply opacity-20 dark:opacity-40 left-[40vw] animate-backmovement7 z-30'></div>
        <div className='w-10 h-10 rounded-sw fixed top-[20vh] bg-green mix-blend-multiply opacity-20 dark:opacity-40 left-[70vw] animate-backmovement8 z-30'></div>
      
      <div className='w-full laptop:w-5/6 h-full flex flex-col ' >
        <div className='w-full laptop:flex laptop:justify-end laptop:mt-12 laptop:mb-20'>
        <div className='h-fit w-full z-20 laptop:w-fit  flex justify-between items-center laptop:justify-end fixed laptop:static bg-dark'>
          <div className='laptop:hidden w-24 tablet:w-40 h-full'>
            <img src='/menu/jlogo.webp'/>
          </div>
          <div className='laptop:hidden w-14 tablet:w-20 mt-1 mr-2 h-full  ' onClick={()=>setdrop(!drop)}>
          <Menu  />
          </div>
          <div className='fixed z-50 w-fit'>
          {drop&&<Dropdown set={drop} drop={drop=>setdrop(drop)} change={change} sett={set}/>}
          </div>
          <motion.div variants={slidin} initial="hiddens" animate="shows">
          <Link  className='w-32 h-10 laptop:flex justify-center items-center text-dark bg-green dark:bg-lightgreen rounded-3xl dark:shadow-[1px_1px_3px_black] cursor-pointer hidden fit z-10 fixed right-20 top-10' onClick={Scroll}>Contact Me</Link>
          </motion.div>
        </div>
        </div>
        <div className='w-full h-5/6 laptop:flex items-center text-center  laptop:text-left ' >
        <div className='w-full laptop:w-2/6 h-full flex items-center' >

          <motion.div variants={slide} initial="hidden" animate="show" className='w-full h-2/3 flex flex-col justify-around tablet:items-center laptop:items-start tablet:mt-80 laptop:mt-0 z-50 laptop:relative'>
          <div   className=' whitespace-nowrap flex items-center   text-lg ml-3'>HEY THERE<span className='mx-3'> <img src='/icon/hand.png' className="w-5"/></span> I'M</div>
          <motion.div variants={children}>
            <div className=' font-bold text-7xl tablet:text-8xl mb-6 w-full 2/6 shadow-[0px_0px_4px_black] bg-white dark:bg-other text-other dark:text-white'>
            <div>Ominyi</div>
            <div>Jonah</div>
            </div>
            <div className=' text-2xl font-medium ml-3 dark:text-lightgreen text-green ' >MERNSTACK DEVELOPER</div>
          </motion.div>
          <motion.div variants={children} className='laptop:ml-3 tablet:w-3/6 laptop:w-full tablet:text-xl laptop:text-base  desktop:text-lg' >I'm a professional <span className=' dark:text-lightgreen text-green'>Fullstack and Mobile developer</span> based in Lagos,Nigeria. </motion.div>
        </motion.div>
        
        </div>
     
        </div>
      </div>
      <div className='w-full h-full  hidden laptop:flex justify-end absolute z-0'>
       <Canvas shadows>
         <OrbitControls ref={cameras} minPolarAngle={1.4} maxPolarAngle={1.5} enableZoom={false}/>
           <Box/>
       </Canvas>
       <div className="absolute">
      
      </div>
        </div>
    </div>
  )
}

export default FrontPage