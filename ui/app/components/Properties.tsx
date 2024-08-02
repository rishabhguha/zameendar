'use client';
import React from 'react';
import { Header } from '../common/components/Header';
import 'react-multi-carousel/lib/styles.css';
import Carousel, { ResponsiveType } from 'react-multi-carousel';
import Image from 'next/image';

type PropertyCardProps = {
  imgSrc: string;
};

const PropertyCard = ({ imgSrc }: PropertyCardProps) => {
  return (
    <div className='h-[600px] mx-8 rounded-md box-border flex flex-col items-center shadow-sm bg-primary/40'>
      <div className='h-[40%] w-full relative'>
        <Image
          alt='Gundam'
          src={imgSrc}
          priority
          fill
          //layout='responsive'
          // width={300}
          // height={0}
          className='rounded-md'
        />
      </div>
      <div className='text-center text-5xl mt-[-20px] z-10'>
        Sample Property
      </div>
    </div>
  );
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
      //autoPlay={true}
      autoPlaySpeed={1500}
      keyBoardControl={true}
      customTransition='ease-in-out all .5'
      transitionDuration={500}
      containerClass='carousel-container'
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass='custom-dot-list-style'
      className='h-[60%] w-[80%]'
    >
      <PropertyCard imgSrc='/landing_bg.jpg' />
      <PropertyCard imgSrc='/landing_bg.jpg' />
      <PropertyCard imgSrc='/landing_bg.jpg' />
      <PropertyCard imgSrc='/landing_bg.jpg' />
    </Carousel>
  </section>
);
