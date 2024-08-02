'use client';
import React, { useEffect, useRef } from 'react';
import { Header } from '../common/components/Header';

interface cardProps {
  title: string;
  content: string;
}

const MyCard = ({ title, content }: cardProps) => {
  return (
    <div className='card-container flex gap-20 justify-around cursor-pointer transition ease-in-out hover:scale-110 '>
      <div className='card-bordered w-96 h-full shadow-xl border-primary hover:border-accent rounded'>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export const WhyUs = () => {
  return (
    <section className='h-screen w-full p-10 relative'>
      <div className='content h-fit-content h-screen flex flex-col'>
        <Header content='Why Us' />
        <div className='flex flex-col xl:flex-row justify-center gap-10 mb-10 xl:gap-20 2xl:gap-40 2xl:mb-20'>
          <MyCard
            title='Lighten the load on your pockets'
            content='Dive into the world of real-estate investment with minimal amounts and become fractional real-estate owners today!'
          />
          <MyCard
            title='Diversify your holdings'
            content='Customize your real-estate portfolio and get the benefits of spreading your investments across a range of properties.'
          />
          <MyCard
            title='Your personal investment consultant'
            content='Leverage 40+ years of real-estate industry experience to make data-driven investment decisions, selecting amongst properties vetted by Zameendar for optimal rental and valuation yields.'
          />
        </div>
        <div className='flex justify-center gap-20 2xl:gap-40'>
          <MyCard
            title='Hassle-free real-estate ownership'
            content='Enter the ecosystem of Zameendar and get a one - stop solution. Browse properties and purchase through our platform and finish all paperwork with our partner legal team.'
          />
          <MyCard
            title='Build a safe & growing cash flow'
            content='Earn monthly rent corresponding to your share on properties and a long-term appreciation on property prices.'
          />
        </div>
      </div>
    </section>
  );
};
