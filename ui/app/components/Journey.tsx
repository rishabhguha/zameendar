import React from 'react';
import Image from 'next/image';
export const Journey = () => {
  return (
    <section className='bg-gradient-to-r from-primary to-secondary'>
      <div>
      <div className='w-full text-center text-9xl'>How it Works</div>
      </div>

      <div className=' h-full justify-center col-span-1'>
        <Image
          alt='Customer Journey'
          src='/customer_journey1.png'
          width='1000'
          height='100'
          className='w-full h-auto'
          sizes='100vw'
          priority
        />
      </div>
    </section>
  );
};
