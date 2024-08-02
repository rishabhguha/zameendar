import React from 'react';
import Image from 'next/image';
import { Header } from '../common/components/Header';
export const Journey = () => {
  return (
    <section className='bg-gradient-to-r from-primary to-secondary min-h-screen p-10 flex flex-col'>
      <Header content='How it Works' />

      <div className='grow'>
        <Image
          alt='Customer Journey'
          src='/customer_journey.png'
          width='1000'
          height='0'
          className='w-full'
          sizes='80vh'
          priority
        />
      </div>
    </section>
  );
};
