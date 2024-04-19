'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './landing.css';
import TextTransition, { presets } from 'react-text-transition';

const WORD1 = ['Ownerships', 'Portfolios', 'Investments'];
const WORD2 = ['Fractional', 'Flexible', 'Futurized'];

export const Landing = () => {
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
      <div className='flex flex-col w-full h-full items-center justify-center gap-8 font-light'>
        <div className='text-primary text-8xl'>Zameendar</div>
        <div className='text-7xl'>
          Real Estate
          <TextTransition springConfig={presets.gentle} inline className='mx-2'>
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
    </section>
  );
};
