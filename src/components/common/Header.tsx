import Link from 'next/link';
import {Merriweather} from 'next/font/google';
import {auth} from '@/auth';
import {signOut} from '@/auth';

import UserProfile from '@/components/auth/UserProfile';
import {TITLE} from '@/constants/common';
//fonts
const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default async function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <>
      <article
        className={`container mx-auto px-5 ${merriweather.className} antialiased`}
      >
        <div className='max-w-[1100px] mx-auto'>
          <header className='flex justify-between items-center py-[54px]'>
            <Link href='/'>
              <h1 className='text-2xl text-[#000638] font-bold'>{TITLE}</h1>
            </Link>
            <div className='flex items-center gap-8'>
              <nav>
                <ul className='flex gap-5 text-lg text-[#605C59]'>
                  {session && (
                    <>
                      <li>
                        <Link
                          href='/write'
                          className='hover:text-[#000638] transition-colors'
                        >
                          Write
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/portfolio'
                          className='hover:text-[#000638] transition-colors'
                        >
                          Portfolio
                        </Link>
                      </li>
                    </>
                  )}
                  <li>
                    <Link
                      href='/about'
                      className='hover:text-[#000638] transition-colors'
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact'
                      className='hover:text-[#000638] transition-colors'
                    >
                      Contact
                    </Link>
                  </li>
                  {!session && (
                    <>
                      <li>
                        <Link
                          href='/register'
                          className='hover:text-[#000638] transition-colors'
                        >
                          Register
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/login'
                          className='hover:text-[#000638] transition-colors'
                        >
                          Login
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
              {session && (
                <div className='flex items-center gap-4'>
                  <UserProfile />
                  <form
                    action={async () => {
                      'use server';
                      await signOut();
                    }}
                  >
                    <button
                      type='submit'
                      className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors'
                    >
                      Logout
                    </button>
                  </form>
                </div>
              )}
            </div>
          </header>
          <main className='min-h-[calc(100vh)]'>{children}</main>
        </div>
      </article>
    </>
  );
}
