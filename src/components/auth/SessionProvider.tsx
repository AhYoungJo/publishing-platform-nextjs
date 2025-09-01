'use client';

import {SessionProvider as NextAuthSessionProvider} from 'next-auth/react';
import {ReactNode} from 'react';

interface SessionProviderProps {
  children: ReactNode;
  session?: any;
}

export default function SessionProvider({
  children,
  session,
}: SessionProviderProps) {
  return (
    <NextAuthSessionProvider
      session={session}
      refetchInterval={60 * 5} // 1분마다 세션 상태 확인
      refetchOnWindowFocus={true} // 창 포커스 시 갱신
    >
      {children}
    </NextAuthSessionProvider>
  );
}
