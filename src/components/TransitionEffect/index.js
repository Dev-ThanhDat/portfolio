'use client';

import { motion } from 'framer-motion';

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className='fixed top-0 bottom-0 z-50 w-screen h-screen right-full bg-primary dark:bg-primaryDark'
      />
      <motion.div
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
        className='fixed top-0 bottom-0 z-40 w-screen h-screen right-full bg-light'
      />
      <motion.div
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
        className='fixed top-0 bottom-0 z-30 w-screen h-screen right-full bg-dark'
      />
    </>
  );
};

export default TransitionEffect;
