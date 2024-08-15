'use client';

import Skill from '@/components/Skills/Skill';
import { skills } from '@/utils/skills';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <>
      <h2 className='w-full mt-64 mb-5 font-bold text-center uppercase text-8xl md:text-6xl md:mt-32'>
        Skills
      </h2>
      <div className='relative flex items-center justify-center w-full h-screen rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg dark:lg:bg-circularDarkLg md:bg-circularLightMd dark:md:bg-circularDarkMd sm:bg-circularLightSm dark:sm:bg-circularDarkSm'>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className='flex items-center justify-center p-8 font-semibold rounded-full cursor-pointer bg-dark text-light shadow-dark dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
        >
          Web
        </motion.div>
        {skills &&
          skills.length > 0 &&
          skills.map((item) => (
            <Skill
              key={item.id}
              name={item.name}
              x={item.x}
              y={item.y}
            />
          ))}
      </div>
    </>
  );
};

export default Skills;
