import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AnimatedCursor from "react-animated-cursor"

function Cursor({color}) {
    const [no,setno]=useState('255,255,255')
    useEffect(()=>{
        if(color=='dark'){
            setno('255,255,255')
           }
           else{
               setno('0,0,0')
           }
    },[color])
 
  return (
    <div >
         <AnimatedCursor
      innerSize={13}
      outerSize={20}
      color={no}
      outerAlpha={3}
      innerScale={0.7}
      outerScale={1.9}
      className=' mix-blend-normal'
    />
    </div>
  )
}

export default Cursor