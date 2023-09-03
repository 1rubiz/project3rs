import React from 'react'

function Image({image, customClass}) {
  return (
    <div 
    className='relative w-[90%] m-1 h-[250px] border overflow-hidden'
    style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}
    >
        <img
        src={image}
        alt=''
        className={`${customClass} w-full h-full object-cover transition-transform transform scale-100 hover:scale-125`}
        />
    </div>
  )
}

export default Image