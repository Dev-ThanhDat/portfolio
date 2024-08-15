'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className }) => {
  return (
    <div className='flex items-center justify-center w-full py-2 mx-auto overflow-hidden text-center'>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5
          }
        }}
        className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl ${className}`}
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: index * 0.3
              }
            }}
            className='inline-block'
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
