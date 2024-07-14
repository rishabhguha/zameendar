'use client';
import React from 'react';
import { Header } from '../common/components/Header';
import 'react-multi-carousel/lib/styles.css';
import Carousel, { ResponsiveType } from 'react-multi-carousel';
import Image from 'next/image';

const Card = () => {
  return <div className='w-[400px] h-[600px]'>Card</div>;
};

const BreakpointSlides: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 530 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 530, min: 0 },
    items: 1,
  },
};

export const Properties = () => (
  <section className='flex flex-col items-center h-screen w-screen p-10 box-border'>
    <Header content='Properties' />
    <Carousel
      responsive={BreakpointSlides}
      swipeable={false}
      draggable={false}
      showDots={true}
      ssr={true} // means to not render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1500}
      keyBoardControl={true}
      customTransition='all .5'
      transitionDuration={500}
      containerClass='carousel-container'
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass='custom-dot-list-style'
      itemClass='carousel-item-padding-40-px'
      className='h-[60%] w-[80%]'
    >
      <Image
        alt='Gundam'
        src='/landing_bg.jpg'
        priority
        layout='responsive'
        width={700}
        height={475}
      />
      <Image
        alt='Musgo'
        src='/customer_journey.jpg'
        priority
        layout='responsive'
        width={700}
        height={475}
      />
      <Image
        alt='Valley'
        src='/zameendar_logo.jpg'
        priority
        layout='responsive'
        width={700}
        height={475}
      />
      <Image
        alt='Beach'
        src='/customer_journey.jpg'
        layout='responsive'
        width={700}
        height={475}
      />
    </Carousel>
  </section>
);
