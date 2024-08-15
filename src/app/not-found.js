import AnimatedText from '@/components/AnimatedText';
import TransitionEffect from '@/components/TransitionEffect';
import Image from 'next/image';

export default function NotFound() {
  return (
    <>
      <TransitionEffect />
      <section className='relative w-full h-screen '>
        <Image
          src='/images/mountains.png'
          alt='Not Found Image'
          width={1920}
          height={1080}
          className='object-cover w-full h-full'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <AnimatedText
            text='Not Found!'
            className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
          />
        </div>
      </section>
    </>
  );
}
