import React from 'react';
import Image from 'next/image';
export const Journey = () => {
  return (
    <div>
      <div>
        <h2>How it Works?</h2>
      </div>

      <div className=' h-full justify-center col-span-1'>
        <Image
          alt='Customer Journey'
          src='/customer_journey.png'
          width='1000'
          height='100'
          className='w-full h-auto'
          sizes='100vw'
          priority
        />
      </div>
    </div>
  );
};
