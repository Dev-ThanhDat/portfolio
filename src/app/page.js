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
            Với mục tiêu trở thành Frontend Developer trong tương lai, tôi đam
            mê sáng tạo và mang đến những sản phẩm chất lượng.
          </p>
          <div className='flex items-center self-start mt-2 md:flex-col md:gap-y-5 lg:self-center'>
            <Link
              href='/pdf/CV - Pham Thanh Dat - Frontend Developer.pdf'
              target='_blank'
              className='flex items-center bg-dark dark:bg-light dark:text-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark transition-all border-2 border-solid border-transparent hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light md:p-2 md:px-4 md:text-base'
              download={true}
            >
              CV
              <LinkArrow className='w-6 ml-1' />
            </Link>
            <Link
              href='mailto:thanhdatcntt20@gmail.com'
              target='_blank'
              className='ml-4 text-lg font-medium underline capitalize md:ml-0 md:text-base'
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
