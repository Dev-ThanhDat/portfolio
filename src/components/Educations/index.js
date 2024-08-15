'use client';

import { educations } from '@/utils/educations';
import { motion } from 'framer-motion';

const Educations = () => {
  return (
    <>
      <h2 className='w-full mt-64 font-bold text-center uppercase md:mt-32 mb-28 text-8xl md:text-6xl xs:text-4xl md:mb-16'>
        Education
      </h2>
      <div className='w-[70%] lg:w-[90%] md:w-full mx-auto flex flex-col'>
        <ul className='flex flex-col items-center justify-between text-center'>
          {educations &&
            educations.length > 0 &&
            educations.map((item) => (
              <motion.li
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                className='my-8 first:mt-0 last:mb-0'
              >
                <h3 className='text-2xl font-bold capitalize sm:text-xl xs:text-lg'>
                  {item.name}
                </h3>
                <span className='font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm'>
                  {item.time} &#124; {item.major}
                </span>
                <p className='font-medium capitalize md:text-sm'>
                  {item.specialization}
                </p>
              </motion.li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Educations;
