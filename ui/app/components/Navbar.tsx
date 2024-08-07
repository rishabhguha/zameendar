import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export const Navbar = () => {
  return (
    <div className='w-full fixed top-0 py-4 px-10 z-10'>
      <div className='flex justify-between'>
        <div className='flex gap-10 items-center'>
          <Image
            src='/zameendar_logo.png'
            alt='Zameendar Logo'
            width='130'
            height='0'
            className='w-auto'
          />
          <ul className='flex gap-5 text-primary'>
            <li>
              <Link href='#'>
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <p>Properties</p>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex gap-5'>
          <button className='btn btn-primary text-white'>Register</button>
          <button className='btn btn-primary'>Log In</button>
        </div>
      </div>
    </div>
  );
};
