import React from 'react'

const Thirdcontent = ({data}) => {
  return (
    <div className='tablet:w-full h-full rounded-2xl my-10 laptop:my-10 tablet:flex'>
    <a href={data.Link} className="w-full overflow-hidden tablet:p-5 h-60 tablet:h-96 flex justify-center" ><div className='  bg-contain bg-no-repeat w-60 tablet:w-96' style={{backgroundImage:`url(${data.Image})`}}></div></a>
    <div className='w-full h-full flex items-center tablet:p-5 '>
      <div className='h-3/6  border-2 border-black flex flex-col items-center bg-white rounded-xl overflow-hidden'>
    <div className='w-full  flex justify-around border-b-2 border-black  text-center font-semibold text-black '><div>{data.Tools}</div></div>
    <div className=' w-5/6  text-dark  text-center text-xs tablet:text-sm h-full py-5'><div className=' font-semibold'>{data.Title}</div>{data.About}<div className=' font-semibold'>Length: {data.TimeFrame}</div><div className=' font-semibold'>Responsive: {data.Responsive}</div></div>
    <div className=' w-full flex justify-around border-b-2 border-black  py-3  text-black'><a href={data.ViewCode} className="  font-normal bg-black text-white py-3 rounded-md px-5"> ViewCode</a> <a href={data.Link} className="  font-normal bg-black text-white py-3 rounded-md px-5"> Preview</a></div>
    </div>
    </div>
    </div>
  )
}

export default Thirdcontent