import React from 'react';

interface HeaderProps {
  content: string;
}

export const Header = ({ content }: HeaderProps) => {
  return (
    <div className='w-full text-center text-8xl 2xl:text-9xl mb-10 2xl:mb-20'>
      {content}
    </div>
  );
};
