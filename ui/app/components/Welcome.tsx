'use client';
import React, { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import Image from 'next/image';
import '../landing.css';

export const WORD1 = ['Ownerships', 'Portfolios', 'Investments'];
export const WORD2 = ['Fractional', 'Flexible', 'Futurized'];

export const Welcome = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setTextIndex((index) => (index + 1) % (WORD1.length - 1)),
      5000
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className='flex h-screen w-screen p-10 box-border'>
      <div className='grid grid-cols-2 w-full'>
        <div className='flex flex-col h-full items-start justify-center gap-8 font-light col-span-1'>
          <div className='text-primary text-8xl'>Zameendar</div>
          <div className='text-7xl'>
            Real Estate
            <TextTransition
              springConfig={presets.gentle}
              inline
              className='mx-3'
            >
              {WORD1[textIndex]}
            </TextTransition>
            {' - '}
            <TextTransition
              springConfig={presets.gentle}
              inline
              className='mx-2 text-primary'
            >
              {WORD2[textIndex]}
            </TextTransition>
          </div>
        </div>
        <div className='flex flex-col h-full items-start justify-center gap-8 font-light col-span-1'>
          <Image
            alt='skyline-background'
            src='/landing_bg.jpg'
            width='0'
            height='0'
            className='w-full'
            priority
          />
        </div>
      </div>
    </section>
  );
};
