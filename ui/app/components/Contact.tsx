import React from 'react';
import Image from 'next/image';

export const Contact = () => {
  return (
    <section className='flex w-screen h-40 p-10 box-border bg-gradient-to-r from-primary to-secondary'>
      <div className='left w-[calc((100%-3rem)/2)] flex flex-col items-baseline'>
        <a className='link link-hover link-neutral text-lg'>
          Terms & Conditions
        </a>
        <a className='link link-hover link-neutral text-lg'>FAQs</a>
      </div>
      <div className='right w-[calc((100%-3rem)/2)] flex justify-start'>
        <div className='w-[200px] h-[50px] relative'>
          <Image
            src='/zameendar_logo.png'
            alt='Zameendar Logo'
            fill
            className=''
          />
        </div>
      </div>
    </section>
  );
};
