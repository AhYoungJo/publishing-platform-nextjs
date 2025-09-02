'use client';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/html/Button';
import CheckBox from '@/components/html/CheckBox';
import Input from '@/components/html/Input';
import {TITLE} from '@/constants/common';
import {useTransition, useState} from 'react';
import {githubLogin} from '@/server/users.action';

export default function LoginForm() {
  const router = useRouter();
  const [_, startTransition] = useTransition();
  const [termsAgreed, setTermsAgreed] = useState(false);
  return (
    <>
      <div className='min-h-[calc(100vh-210px)] max-h-[calc(100vh-210px)] flex items-center justify-center'>
        <div className='w-[375px] rounded-lg bg-white border border-[#D1D1D1] py-10 px-[25px] text-[#4f4f4f]'>
          <div className='text-center mb-6'>
            <Link
              href='/'
              className='inline-flex items-center text-[#000638] hover:text-[#283A61] transition-colors'
            >
              <svg
                className='w-4 h-4 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 19l-7-7m0 0l7-7m-7 7h18'
                />
              </svg>
              <span className='text-2xl font-bold'>{TITLE}</span>
            </Link>
          </div>

          <h1 className='text-xl font-bold mb-[10px]'>Login Into App</h1>
          <p className='text-sm mb-5'>Please enter your details to continue.</p>
          <form className='grid gap-4'>
            <Input type='email' placeholder='XXX@example.com' />
            <Input type='password' placeholder='Enter Password' />
            <div className='mt-4 grid gap-4'>
              <Button
                type='submit'
                className='w-full bg-[#4F4F4F] text-[#F5F5F5] rounded-lg  hover:bg-[#3f3f3f] hover:font-semibold'
              >
                로그인
              </Button>
              <Button
                type='button'
                className='py-2 px-4 max-w-md flex justify-center items center bg-gray-600  focus:ring-gray-600 text-center text-base font-normal  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg w-full hover:font-semibold hover:bg-gray-700'
                onClick={() => startTransition(async () => await githubLogin())}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 60 60'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  className='w-5 h-5 mr-2'
                >
                  <path
                    data-name='layer2'
                    d='M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z'
                    fill='#202020'
                  ></path>
                  <path
                    data-name='layer1'
                    d='M12.1 45.9c-.1.2-.3.2-.5.1s-.4-.3-.3-.5.3-.2.6-.1c.2.2.3.4.2.5zm1.3 1.5a.589.589 0 0 1-.8-.8.631.631 0 0 1 .7.1.494.494 0 0 1 .1.7zm1.3 1.8a.585.585 0 0 1-.7-.3.6.6 0 0 1 0-.8.585.585 0 0 1 .7.3c.2.3.2.7 0 .8zm1.7 1.8c-.2.2-.5.1-.8-.1-.3-.3-.4-.6-.2-.8a.619.619 0 0 1 .8.1.554.554 0 0 1 .2.8zm2.4 1c-.1.3-.4.4-.8.3s-.6-.4-.5-.7.4-.4.8-.3c.3.2.6.5.5.7zm2.6.2c0 .3-.3.5-.7.5s-.7-.2-.7-.5.3-.5.7-.5c.4.1.7.3.7.5zm2.4-.4q0 .45-.6.6a.691.691 0 0 1-.8-.3q0-.45.6-.6c.5-.1.8.1.8.3z'
                    fill='#202020'
                  ></path>
                </svg>
                Github 계정으로 로그인
              </Button>
              <hr className='text-gray-300' />
              <Button
                type='button'
                className='w-full  text-[#4f4f4f] rounded-lg  hover:text-[#4F4F4F] hover:font-semibold'
                onClick={() => router.push('/register')}
              >
                회원가입하기
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
