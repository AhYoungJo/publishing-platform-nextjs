import {Merriweather} from 'next/font/google';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

//fonts
const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header>{children}</Header>
      <Footer />
    </>
  );
}
