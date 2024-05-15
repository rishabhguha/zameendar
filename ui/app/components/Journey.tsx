import React from 'react';
import Image from 'next/image';
import { Header } from '../common/components/Header';
export const Journey = () => {
  return (
    <section className='bg-gradient-to-r from-primary to-secondary h-full '>
      <div className='flex-1'>  
      <div>  <Header content='How it Works'/>   </div>
      </div>

      <div className=' justify-center col-span-1 flex-1'>
        <Image
          alt='Customer Journey'
          src='/customer_journey.png'
          width='1000'
          height='190'
          className='w-full h-fit'
          sizes='100vw'
          priority
        />
      </div>
    </section>
  );
};
