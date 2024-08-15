import AnimatedText from '@/components/AnimatedText';
import FeaturedProject from '@/components/FeaturedProject';
import Project from '@/components/Project';
import TransitionEffect from '@/components/TransitionEffect';
import { projects } from '@/utils/projects';
import Link from 'next/link';

export const metadata = {
  title: 'Dự án'
};

const Projects = () => {
  return (
    <>
      <TransitionEffect />
      <section className='flex flex-col justify-center w-full px-32 pt-16 pb-32 lg:px-16 xl:px-24 md:p-x12 sm:px-8'>
        <AnimatedText
          text='Dự án của tôi!'
          className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
        />
        <div className='grid grid-cols-2 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
          {projects &&
            projects.length > 0 &&
            projects.map((item) => (
              <>
                {item.featured === true ? (
                  <div
                    key={item.id}
                    className='col-span-2'
                  >
                    <FeaturedProject
                      type={item.type}
                      title={item.title}
                      summary={item.summary}
                      image={item.image}
                      link={item.link}
                      github={item.github}
                    />
                  </div>
                ) : (
                  <div
                    key={item.id}
                    className='col-span-1 lg:col-span-2'
                  >
                    <Project
                      type={item.type}
                      title={item.title}
                      image={item.image}
                      link={item.link}
                      github={item.github}
                    />
                  </div>
                )}
              </>
            ))}
          <div className='col-span-2 text-center'>
            <Link
              href='https://www.linkedin.com/in/pham-thanh-dat-b194b5238/details/projects'
              target='_blank'
              className=' bg-dark dark:bg-light dark:text-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark transition-all border-2 border-solid border-transparent hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light shadow-2xl sm:px-4 sm:text-base'
            >
              Xem chi tiết
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
