import ThemeSwitcher from '@/components/ThemeSwitcher';
import { media } from '@/utils/media';
import { menu } from '@/utils/menu';
import { motion } from 'framer-motion';
import Link from 'next/link';

const NavMobile = ({ setIsOpen, pathname }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
      animate={{ scale: 1, opacity: 1 }}
      className='min-w-[70vw] flex-col flex items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 gap-y-8 bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32'
    >
      <nav className='flex flex-col items-center justify-center gap-x-8 gap-y-4 text-light dark:text-dark'>
        {menu &&
          menu.length > 0 &&
          menu.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`pb-[5px] relative group after:h-[2px] after:bg-light dark:after:bg-dark after:bottom-0 after:left-0 after:absolute after:transition-[width] after:ease after:duration-300 ${
                pathname === item.path
                  ? 'after:w-full'
                  : 'hover:after:w-full after:w-0'
              }`}
            >
              {item.name}
            </Link>
          ))}
      </nav>
      <div className='flex flex-wrap items-center justify-center gap-6'>
        {media &&
          media.length > 0 &&
          media.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              target='_blank'
              onClick={() => setIsOpen(false)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='text-white dark:text-black'
            >
              {item.icon}
            </motion.a>
          ))}
        <ThemeSwitcher />
      </div>
      <button
        onClick={() => setIsOpen(false)}
        className='flex-col items-center justify-center mt-5'
      >
        <span className='bg-light dark:bg-dark transition-all block h-0.5 w-6 rounded-sm rotate-45 -translate-y-0.5'></span>
        <span
          className={`bg-light dark:bg-dark transition-all block h-0.5 w-6 rounded-sm -rotate-45 -translate-y-1`}
        ></span>
      </button>
    </motion.div>
  );
};

export default NavMobile;
