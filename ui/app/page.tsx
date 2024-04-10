import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
        <Image
          src='/zameendar_logo.jpg'
          alt='Zameendar Logo'
          width={400}
          height={60}
          priority
        />
      </div>
    </main>
  );
}
