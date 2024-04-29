import React from 'react';

interface HeaderProps {
  content: string;
}

export const Header = ({ content }: HeaderProps) => {
  return <div className='w-full text-center text-6xl'>{content}</div>;
};
