import React from 'react'
import Home from '../../Svg/Home'
import About from '../../Svg/About'
import Project from '../../Svg/project'
import Contact from '../../Svg/Contact'
import Gt from '../../Svg/Gt'
import Gm from '../../Svg/Gm'
import Fb from '../../Svg/Fb'
import Moon from '../../Svg/Moon'
import Sun from '../../Svg/Sun'
import Link from 'react-scroll/modules/components/Link'
function Navbar({change,set}) {
  const mode =()=>{
  change(!set)
  }  
  return (
    <div className='w-full h-full dark:bg-cold bg-dark shadow-[1px_1px_3px_black] flex flex-col items-center justify-between font-nunito  z-50'>
        <div className='flex flex-col items-center'>
        <img src='/menu/jlogo.webp' className='mb-5'/>
        <div className='h-7 w-5/6 flex justify-center' >
            <div className='w-full desktop:w-4/6 h-full border-2 border-neutral hover:border-green dark:hover:border-lightgreen rounded-full shadow-inner  shadow-black flex justify-end dark:justify-start relative item-center' onClick={mode}>
                <div className='absolute left-0 w-5 mt-0.5 fill-cream'><Moon/></div>
                <div className='w-2/6 h-full bg-neutral hover:bg-green dark:hover:bg-lightgreen rounded-full dark:shadow-[1px_1px_3px_black] shadow-[-1px_-1px_3px_black] z-10'></div>
                <div className='absolute right-0 w-5 mt-0.5 fill-cream'><Sun/></div>
            </div>
        </div>
        </div>
        <div className='text-lg font-extrabold text-center h-3/6'>
            <ul className='h-full flex flex-col justify-around items-center '>
                <Link to='Home' spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500} className=' cursor-pointer hover:fill-green dark:hover:fill-lightgreen  fill-neutral w-10'><Home/></Link>
                <Link to='Second' spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500} className='hover:text-lightgreen cursor-pointer'><About/></Link>
                <Link to='Third' spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500} className='hover:text-lightgreen cursor-pointer'><Project/></Link>
                <Link to='Contact'spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500} className='hover:text-lightgreen cursor-pointer'><Contact/></Link>
            </ul>
        </div>
        <div className='text-lg font-extrabold text-center w-full h-1/6'>
            <div  className='h-full flex flex-col justify-around w-ful items-center '>
          <ul className='h-full flex  w-full justify-around  items-center ' >
              <a href='https://github.com/Jonahjohnzon' className=' cursor-pointer'><Gt/></a>
              <Link to='Contact'spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500} className=' cursor-pointer'><Gm/></Link>
              <a href='https://m.facebook.com/profile.php?id=100001504722156' className=' cursor-pointer'><Fb/></a>
              </ul>       
            </div>
        </div>
        
    </div>
  )
}

export default Navbar