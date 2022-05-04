import React from 'react'

const Thirdcontent = ({data}) => {
  return (
    <div className='tablet:w-96 rounded-2xl overflow-hidden shadow-[0px_0px_10px_black] cursor-pointer hover:shadow-[0px_0px_2px_black] my-10'>
    <a href={data.Link} ><div className=' h-[350px] w-full bg-cover' style={{backgroundImage:`url(${data.Image})`}}></div></a>
    <div className=' bg-cream flex justify-around border-b-2 dark:border-dark border-cream py-3'><a href={data.ViewCode} className="  font-semibold"> ViewCode</a></div>
    <div className='bg-dark dark:bg-cream flex justify-around border-b-2 dark:border-dark border-cream text-center font-semibold dark:text-dark text-cream'><div>{data.Tools}</div></div>
    <div className=' dark:bg-cream dark:text-dark text-cream bg-dark text-center text-sm h-full py-5'><div className=' font-semibold'>{data.Title}</div>{data.About}<div className=' font-semibold'>Length: {data.TimeFrame}</div><div className=' font-semibold'>Responsive: {data.Responsive}</div></div>
   
    </div>
  )
}

export default Thirdcontent