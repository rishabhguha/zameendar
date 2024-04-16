import React from 'react';
import Image from 'next/image';

export const Landing = () => {
  return (
    <section className='flex h-screen w-screen p-10 box-border'>
      <div className='flex flex-col w-full h-full items-center justify-center'>
        <div className='font-bold text-5xl pb-10 text-green-light'>
          Zameendar : Real Estate Investment - Futurized
        </div>
        <Image
          src='/zameendar_logo.jpg'
          alt='Zameendar Logo'
          width='600'
          height='0'
          className='w-auto'
          priority
        />
      </div>
    </section>
  );
};
