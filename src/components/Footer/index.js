'use client';

import MoveTop from '@/assets/icons/MoveTop';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className='flex items-center justify-between px-32 py-8 text-lg font-medium text-center text-black border-t-2 border-solid md:px-16 sm:px-8 xs:px-4 w-fll border-dark dark:text-light dark:border-light md:text-base md:flex-col'>
      <span></span>
      <span>
        <span className='px-1 text-2xl text-primary dark:text-primaryDark'>
          &#9825;
        </span>{' '}
        Thanh Dat{' '}
        <span className='px-1 text-2xl text-primary dark:text-primaryDark'>
          &#9825;
        </span>
      </span>
      <button
        onClick={scrollToTop}
        className='flex items-center bg-dark dark:bg-light dark:text-dark text-light p-2.5 px-4 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark transition-all border-2 border-solid border-transparent hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light md:p-2 md:px-2 md:text-base md:mt-5'
      >
        <MoveTop />
      </button>
    </footer>
  );
};

export default Footer;
