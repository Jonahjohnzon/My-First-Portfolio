import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import Sun from '../Svg/Sun'
import Moon from '../Svg/Moon'
const Dropdown = ({set,drop,change,sett}) => {
    const mode =()=>{
        change(!sett)
        drop(!set)
        } 
  return (
    <div className='fixed right-0 top-16 tablet:top-20 h-3/6 w-1/3 dark:bg-cream bg-dark z-50 shadow-[2px_2px_10px_black] rounded-md'>
        <div className='h-full'>
            <ul className='h-full flex flex-col justify-around items-center dark:text-dark text-cream'>
                <Link 
                to='Home'spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500} onClick={()=>drop(!set)}>Home</Link>
                <Link 
                to='Second'spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500} onClick={()=>drop(!set)}>About</Link>
                <Link 
                to='Third'spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500} onClick={()=>drop(!set)}>Projects</Link>
                <Link to='Contact'spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={2000} onClick={()=>drop(!set)}>Contact</Link>
          <div className='w-full'>
          <div className='tablet:h-14 h-10 w-full flex justify-center ' >
            <div className='w-full tablet:w-4/6 desktop:w-4/6 h-full border-2 border-neutral hover:border-green dark:hover:border-lightgreen rounded-full shadow-inner  shadow-black flex justify-end dark:justify-start relative item-center overflow-hidden' onClick={mode}>
                <div className='absolute left-0 w-8 tablet:w-12 mt-0.5 fill-cream'><Moon/></div>
                <div className='w-2/6 h-full bg-neutral hover:bg-green dark:hover:bg-lightgreen rounded-full dark:shadow-[1px_1px_3px_black] shadow-[-1px_-1px_3px_black] z-10'></div>
                <div className='absolute right-0 w-8 tablet:w-12 mt-0.5 fill-dark'><Sun/></div>
            </div>
        </div>
          </div>
            </ul>
        </div>
    </div>
  )
}

export default Dropdown