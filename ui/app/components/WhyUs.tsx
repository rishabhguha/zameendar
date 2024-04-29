'use client';
import React, { useEffect, useRef } from 'react';
import { Header } from '../common/components/Header';

export const WhyUs = () => {
  // const sectionRef = useRef<HTMLDivElement | null>(null);
  // const cardContainerRef = useRef<HTMLDivElement | null>(null);
  // const observerRef = useRef<IntersectionObserver | null>(null);

  // // Setting up Intersection Observer
  // const stopScrollAndAnimate = (entries: IntersectionObserverEntry[]) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting && sectionRef.current) {
  //       console.log('INTERSECTED');
  //       console.log({ sectionRef });
  //       sectionRef.current.style.position = 'fixed';
  //       sectionRef.current.style.top = '0';
  //     }
  //   });
  // };

  // useEffect(() => {
  //   const cardContainer = cardContainerRef.current;
  //   const observer = new IntersectionObserver(stopScrollAndAnimate, {
  //     threshold: 1.0,
  //   });
  //   if (cardContainer) {
  //     observer.observe(cardContainer);
  //   }
  //   return () => {
  //     if (cardContainer) observer.unobserve(cardContainer);
  //   };
  // }, [cardContainerRef]);

  return (
    <section className='w-screen p-10 relative'>
      <div className='content h-fit-content h-screen w-full flex flex-col'>
        <div className='w-full text-center text-9xl'>Why Us</div>
        <div className='grow'></div>
        <div className='card-container flex gap-20'>
          <div className='card card-compact w-96 h-40 bg-primary shadow-xl'>
            Card 1
          </div>
          <div className='card card-compact w-96 h-40 bg-primary shadow-xl'>
            Card 2
          </div>
          <div className='card card-compact w-96 h-40 bg-primary shadow-xl'>
            Card 3
          </div>
        </div>
      </div>
    </section>
  );
};
