import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Providers } from '@/components/Providers';
import { Manrope } from 'next/font/google';
import './globals.scss';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata = {
  title: {
    template: 'Portfolio | %s',
    default: 'Portfolio'
  },
  openGraph: {
    url: 'https://ptd-dev.click',
    siteName: 'Portfolio',
    images: [
      {
        url: 'https://res.cloudinary.com/dzdycjg8q/image/upload/v1723725374/Portfolio/portfolio-bg-seo_xfm9yo.jpg',
        width: 1911,
        height: 877
      }
    ],
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      suppressHydrationWarning={true}
    >
      <body
        className={`${manrope.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
