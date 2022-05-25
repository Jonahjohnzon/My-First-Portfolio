import React from 'react'

function Loading() {
  return (
    <div className='h-[100vh] w-full bg-dark flex items-center justify-center'>
        <div>
            <div className=' border-r-4 border-white rounded-full w-40 h-40 animate-spinnow'>

            </div>
        </div>
    </div>
  )
}

export default Loading