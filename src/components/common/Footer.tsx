import Link from 'next/link';
import {Merriweather} from 'next/font/google';
import {TITLE, SUBTITLE} from '@/constants/common';
//fonts
const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default async function Footer() {
  return (
    <>
      <footer className={`bg-[#F5F5F5] py-[36px] ${merriweather.className}`}>
        <div className='container flex flex-col justify-end items-center mx-auto'>
          <nav className='flex gap-[25px] text-[#544B44] text-sm mb-[26px]'>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </nav>
          <div>
            <p className='text-[#3E3E3E]'>
              © 2025 {TITLE} ({SUBTITLE}). All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
