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
      <div className='flex flex-col w-full h-full items-start justify-center gap-8 font-light col-span-1'>
        <Image
          alt='skyline-background'
          src='/landing_bg.jpg'
          fill
          className='w-full h-auto'
          sizes='100vh'
          priority
        />
        <div className='text-primary text-8xl z-10'>Zameendar</div>
        <div className='text-7xl z-10'>
          Real Estate
          <TextTransition springConfig={presets.gentle} inline className='mx-3'>
            {WORD1[textIndex]} {' - '}{' '}
            <span className='text-primary'>{WORD2[textIndex]}</span>
          </TextTransition>
          <TextTransition
            springConfig={presets.gentle}
            inline
            className='mx-2 text-primary'
          ></TextTransition>
        </div>
      </div>
    </section>
  );
};
