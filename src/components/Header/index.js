'use client';

import Logo from '@/components/Logo';
import Nav from '@/components/Nav';
import NavMobile from '@/components/NavMobile';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='relative z-10 flex items-center justify-between w-full px-32 py-8 font-medium xl:px-24 lg:px-16 md:px-12 sm:px-8'>
      <button
        onClick={handleClick}
        className='flex-col items-center justify-center hidden lg:flex'
      >
        <span
          className={`bg-dark dark:bg-light transition-all block h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all block h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>
      <Nav pathname={pathname} />
      {isOpen ? (
        <NavMobile
          setIsOpen={setIsOpen}
          pathname={pathname}
        />
      ) : null}
      <div className='absolute left-2/4 top-2 -translate-x-2/4'>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
