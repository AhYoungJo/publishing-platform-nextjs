'use client';

import {useSession} from 'next-auth/react';
import Image from 'next/image';

export default function UserProfile() {
  const {data: session, status} = useSession();

  if (status === 'loading') {
    return (
      <div className='animate-pulse bg-gray-200 h-10 w-10 rounded-full'></div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className='flex items-center gap-3'>
      {session.user?.image && (
        <Image
          src={session.user.image}
          alt={session.user.name || '사용자'}
          width={40}
          height={40}
          className='rounded-full'
        />
      )}
      <div className='flex flex-col'>
        <span className='text-sm font-medium'>
          {session.user?.name || '익명 사용자'}
        </span>
        <span className='text-xs text-gray-500'>{session.user?.email}</span>
      </div>
    </div>
  );
}
