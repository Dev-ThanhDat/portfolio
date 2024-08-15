import ThemeSwitcher from '@/components/ThemeSwitcher';
import { media } from '@/utils/media';
import { menu } from '@/utils/menu';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Nav = ({ pathname }) => {
  return (
    <div className='flex items-center justify-between w-full lg:hidden'>
      <nav className='flex items-center gap-8'>
        {menu &&
          menu.length > 0 &&
          menu.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className={`pb-[5px] relative group after:h-[2px] after:bg-dark dark:after:bg-light after:bottom-0 after:left-0 after:absolute after:transition-[width] after:ease after:duration-300 ${
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
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Nav;
