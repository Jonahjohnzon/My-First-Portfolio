import { useEffect, useState ,Suspense} from "react";
import FrontPage from "./Componet/FrontPage";
import Navbar from "./Componet/Navbar/Navbar";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import SecondPage from "./Componet/SecondPage";
import ThirdPage from "./Componet/ThirdPage";
import Contact from "./Componet/Contact";
import Loading from "./Componet/Loading";
import Cursor from './Componet/Cursor'
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
        delay:2
      
      }
    },
  }

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
 
  
  return (
    <>
    <Suspense fallback={<Loading/>}>
    <div className={lightmode} id='Home'>
      <div className="w-full dark:bg-dark bg-white overflow-x-auto" >
    <div className="w-full h-full dark:bg-dark bg-white">
    <AnimatePresence>
      <div className=" z-50 fixed  hidden laptop:block h-full w-1/12">
    <motion.div  variants={sliding} initial="hidden" animate="show" exit="exit" key={2} className="h-full w-full  left-0 top-0 z-50 hidden laptop:block  "><Navbar change={backColor=>setBackColor(backColor)} set={backColor}/></motion.div>
    </div>
    </AnimatePresence>
    <FrontPage change={backColor=>setBackColor(backColor)} set={backColor} />
     <SecondPage/>
     <ThirdPage/>
     <Contact/>
    </div>
    </div>
    </div>
    </Suspense>
    <div className="absolute">
      <Cursor color={lightmode}/>
      </div>
    
    </>
  );
}

export default App;
