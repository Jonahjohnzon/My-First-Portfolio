import { useEffect, useState } from "react";
import FrontPage from "./Componet/FrontPage";
import Navbar from "./Componet/Navbar/Navbar";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import SecondPage from "./Componet/SecondPage";
import ThirdPage from "./Componet/ThirdPage";
import Contact from "./Componet/Contact";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
function App() {
  const sliding={
    hidden:{
      x:-400,
      opacity:0
    },
    show:{
      x:0,
      opacity: 1,
      transition:{
        type:'tween',
        stiffness:400,
        duration:1,
        delay:0.7
      
      }
    },
  }
 const open={
   opening:{
     y:0,
     opacity:1
   },
   openweb:{
     y:'-100vh',
     opacity:0,
     transition:{
       type:'tween',
       duration:1,
       stiffness:400,
      opacity:0}},
       
       
   
 }
  const [board,setboard]=useState(true)
  const [backColor,setBackColor]=useState(true)
  const [lightmode,setlightmode]=useState('dark')
  useEffect(()=>{
    if(backColor){
      setlightmode('dark')
      }
      else{
        setlightmode('')
      }
     
  },[backColor])
  useEffect(()=>{
  setInterval(()=>{
 setboard(false)
  },3000)
  },[])

  return (
    <AnimatePresence>
    
    <div className={lightmode} >
      <div className="w-full dark:bg-dark bg-cream overflow-x-auto">
    <div className="w-full h-full dark:bg-dark bg-cream">
    {board&&<motion.div variants={open} key={1}  initial="opening" animate='openweb' exit="exit" className="w-full h-full z-50 fixed">
        <motion.div className="bg-green w-full h-1/4"></motion.div>
        <motion.div className="bg-green w-full h-1/4"></motion.div>
        <motion.div className="bg-green w-full h-1/4"><div className="text-dark font-poppins text-7xl flex justify-center items-start">HELLO!!!</div></motion.div>
        <motion.div className="bg-green w-full h-1/4"></motion.div>
        </motion.div> }
    <motion.div  variants={sliding} initial="hidden" animate="show" exit="exit" key={2} className="h-full w-1/12  left-0 top-0 z-50 hidden laptop:block fixed "><Navbar change={backColor=>setBackColor(backColor)} set={backColor}/></motion.div>
    <FrontPage change={backColor=>setBackColor(backColor)} set={backColor} />
     <SecondPage/>
     <ThirdPage/>
     <Contact/>
    </div>
    </div>
    </div>
    </AnimatePresence>
  );
}

export default App;
