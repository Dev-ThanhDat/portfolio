import LinkArrow from '@/assets/icons/LinkArrow';
import AnimatedText from '@/components/AnimatedText';
import TransitionEffect from '@/components/TransitionEffect';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <section className='flex items-center justify-between w-full min-h-screen px-32 lg:px-16 xl:px-24 md:p-x12 sm:px-8 lg:justify-center lg:flex-col gap-x-28 md:gap-y-14 md:py-16 sm:py-8'>
        <div className='w-1/2 lg:hidden md:inline-block md:w-full'>
          <Image
            src='/images/user-ai.png'
            alt='Avatar Image AI'
            width={1453}
            height={1425}
            quality={100}
            priority={true}
            className='w-full h-auto '
          />
        </div>
        <div className='flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center'>
          <AnimatedText
            text='frontend developer.'
            className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
          />
          <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
            Tôi là một Frontend với 1 năm kinh nghiệm trong lĩnh vực Phát triển
            Web, làm việc với các công nghệ ReactJS/NextJS.
          </p>
          <div className='flex items-center self-start mt-2 md:flex-col md:gap-y-5 lg:self-center'>
            <Link
              href='mailto:thanhdatcntt20@gmail.com'
              target='_blank'
              className='text-lg font-medium underline capitalize md:ml-0 md:text-base'
            >
              Liên hệ
            </Link>
          </div>
        </div>
        <div className='absolute inline-block w-24 right-8 bottom-8 md:hidden'>
          <Image
            src='/images/miscellaneous_icons.svg'
            alt='Miscellaneous Icon'
            width={96}
            height={163}
            priority={true}
            className='w-full h-auto'
          />
        </div>
      </section>
    </>
  );
}
