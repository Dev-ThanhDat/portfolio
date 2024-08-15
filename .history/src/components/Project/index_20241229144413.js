'use client';

import GithubIcon from '@/assets/icons/Github';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Project = ({ type, title, image, link, github }) => {
  const MotionImage = motion(Image);

  return (
    <article className='relative flex flex-col items-center justify-center w-full p-6 border border-solid shadow-2xl rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[32px] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-3xl' />
      {link ? (
        <Link
          href={link || ''}
          target='_blank'
          className='w-full overflow-hidden rounded-lg cursor-pointer'
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
      ) : (
        <div className='w-full overflow-hidden rounded-lg'>
          <MotionImage
            src={image}
            alt={title}
            width={1920}
            height={878}
            priority={true}
            whileHover={{ scale: 1.05 }}
            className='w-full h-[274px]'
          />
        </div>
      )}

      <div className='flex flex-col items-start justify-between w-full mt-4'>
        <span className='text-xl font-medium capitalize text-primary dark:text-primaryDark lg:text-lg md:text-base'>
          {type}
        </span>
        {link ? (
          <Link
            href={link || ''}
            target='_blank'
            className='transition-all hover:underline underline-offset-2'
          >
            <h2 className='w-full my-2 text-3xl font-bold text-left lg:text-2xl'>
              {title}
            </h2>
          </Link>
        ) : (
          <h2 className='w-full my-2 text-3xl font-bold text-left lg:text-2xl'>
            {title}
          </h2>
        )}

        <div className='flex items-center justify-between w-full mt-2'>
          <Link
            href={link || ''}
            target='_blank'
            className='text-lg font-semibold underline transition-all hover:opacity-90 md:text-base'
          >
            {link ? 'Demo' : ''}
          </Link>
          <Link
            href={github}
            target='_blank'
            className='w-10 transition-all hover:scale-110 md:w-6'
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
