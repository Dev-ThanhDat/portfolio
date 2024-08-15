import AnimatedText from '@/components/AnimatedText';
import Educations from '@/components/Educations';
import Skills from '@/components/Skills';
import TransitionEffect from '@/components/TransitionEffect';
import Image from 'next/image';

export const metadata = {
  title: 'Thông tin'
};

const About = () => {
  return (
    <>
      <TransitionEffect />
      <section className='flex flex-col justify-center w-full px-32 pt-16 pb-32 lg:px-16 xl:px-24 md:p-x12 sm:px-8'>
        <AnimatedText
          text='Phạm Thành Đạt!'
          className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
        />
        <div className='grid w-full grid-cols-2 gap-16 md:grid-cols-1'>
          <div className='flex flex-col items-start justify-center md:order-2'>
            <h2 className='mb-4 text-lg font-black uppercase text-dark/75 dark:text-light/75'>
              TÓM TẮT
            </h2>
            <p className='font-medium'>
              Tôi là một Frontend với 1 năm kinh nghiệm trong lĩnh vực Phát
              triển Web, làm việc với các công nghệ ReactJS/NextJS.
            </p>
            <p className='py-4 font-medium'>
              Với hiểu biết về UI/UX, tôi thích giải quyết các vấn đề Frontend
              và áp dụng những công nghệ mới cũng như kinh nghiệm có được vào
              các dự án để tạo ra trải nghiệm người dùng tốt nhất.
            </p>
            <p className='font-medium'>
              Tôi cũng dành thời gian học hỏi các công nghệ mới và các phương
              pháp tốt nhất để trở thành một Fullstack.
            </p>
          </div>
          <div className='relative max-w-[433px] md:order-1 w-full mx-auto border-2 border-solid rounded-2xl border-dark bg-light p-8 shadow-2xl dark:border-light dark:bg-dark'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[32px] bg-dark dark:bg-light' />
            <Image
              src='/images/user.jpg'
              alt='Avatar Image'
              width={1920}
              height={2560}
              quality={100}
              priority={true}
              className='w-full h-auto rounded-2xl'
            />
          </div>
        </div>
        <Educations />
        <Skills />
      </section>
    </>
  );
};

export default About;
