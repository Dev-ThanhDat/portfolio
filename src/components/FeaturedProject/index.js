'use client';

import GithubIcon from '@/assets/icons/Github';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const FeaturedProject = ({ type, title, summary, image, link, github }) => {
  const MotionImage = motion(Image);

  return (
    <article className='relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-3xl border-dark bg-light rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[40px] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-3xl' />
      <Link
        href={link || ''}
        target='_blank'
        className='w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full'
      >
        <MotionImage
          src={image}
          alt={title}
          width={1920}
          height={878}
          priority={true}
          whileHover={{ scale: 1.05 }}
          className='w-full h-[274px]'
        />
      </Link>
      <div className='flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-xl font-medium capitalize text-primary dark:text-primaryDark xs:text-base'>
          {type}
        </span>
        <Link
          href={link || ''}
          target='_blank'
          className='transition-all hover:underline underline-offset-2'
        >
          <h2 className='w-full my-2 text-4xl font-bold text-left sm:text-sm'>
            {title}
          </h2>
        </Link>
        <p className='my-2 font-medium sm:text-sm'>{summary}</p>
        <div className='flex items-center mt-2'>
          <Link
            href={github}
            target='_blank'
            className='w-10 transition-all hover:scale-110 md:w-6'
          >
            <GithubIcon />
          </Link>
          <Link
            href={link || ''}
            target='_blank'
            className='p-2 px-6 ml-4 text-lg font-semibold transition-all rounded-lg bg-dark text-light hover:opacity-90 dark:bg-light dark:text-dark sm:px-4 sm:text-base'
          >
            {link ? 'Demo' : ''}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
