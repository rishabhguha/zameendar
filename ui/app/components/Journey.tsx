import React from 'react';
import Image from 'next/image';
export const Journey = () => {
  return (
    <div >
    <div>
        <h2>How it Works?</h2>

    </div>
    
  <div className=' h-full justify-center col-span-1'>
  <Image
    alt='5stageprocess'
    src='/2.png'
    width='1000'
    height='1000'
    className='w-full'
    priority
  />
</div>
</div>
  )
}
