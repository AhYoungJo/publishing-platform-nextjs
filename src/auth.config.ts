import type {NextAuthConfig} from 'next-auth';
import Github from 'next-auth/providers/github';
// import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import {User} from '@/libs/schemas/users';
import {connectToDB} from '@/libs/db';
import bcrypt from 'bcryptjs';

export const authConfig = {
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login',
  },
  callbacks: {
    authorized({auth, request: {nextUrl}}) {
      const isLoggedIn = !!auth?.user;
      const {pathname} = nextUrl;

      // 보호된 경로들 정의
      const protectedPaths = ['/write', '/portfolio', '/dashboard'];
      const authPaths = ['/login', '/register'];

      // 보호된 경로에 접근 시 로그인 확인
      const isOnProtectedPath = protectedPaths.some(path =>
        pathname.startsWith(path),
      );

      // 인증 페이지에 접근 시 이미 로그인된 사용자 처리
      const isOnAuthPath = authPaths.some(path => pathname.startsWith(path));

      if (isOnProtectedPath) {
        return isLoggedIn; // 로그인된 경우에만 접근 허용
      }

      if (isOnAuthPath && isLoggedIn) {
        // 이미 로그인된 사용자가 로그인/회원가입 페이지 접근 시 홈으로 리다이렉트
        return Response.redirect(new URL('/', nextUrl));
      }

      return true; // 그 외의 경우는 접근 허용
    },
    async jwt({token, user, account}) {
      // JWT 토큰에 추가 정보 저장
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({session, token}) {
      // 세션에 추가 정보 포함
      if (token) {
        session.user.id = token.id as string;
        session.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
  providers: [
    Github({
      clientId:
        process.env.NODE_ENV === 'development'
          ? process.env.AUTH_GITHUB_ID_DEV
          : process.env.AUTH_GITHUB_ID,
      clientSecret:
        process.env.NODE_ENV === 'development'
          ? process.env.AUTH_GITHUB_SECRET_DEV
          : process.env.AUTH_GITHUB_SECRET,
      authorization: {
        params: {
          scope: 'read:user user:email',
        },
      },
    }),
    // Google({
    //   clientId:
    //     process.env.NODE_ENV === 'development'
    //       ? process.env.AUTH_GOOGLE_ID_DEV
    //       : process.env.AUTH_GOOGLE_ID,
    //   clientSecret:
    //     process.env.NODE_ENV === 'development'
    //       ? process.env.AUTH_GOOGLE_SECRET_DEV
    //       : process.env.AUTH_GOOGLE_SECRET,
    // }),
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {label: 'Email', type: 'email'},
        password: {label: 'Password', type: 'password'},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        await connectToDB();
        const {email, password} = credentials as {
          email: string;
          password: string;
        };
        const user = await User.findOne({email});
        if (!user) return null;
        const ok = await bcrypt.compare(password, user.password);
        if (!ok) return null;
        return {id: String(user._id), name: user.name, email: user.email};
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 2 * 60 * 60, // 2시간 - 세션 전체 만료 시간
    updateAge: 15 * 60, // 15분 - 이 시간마다 세션 업데이트
  },
  jwt: {
    maxAge: 2 * 60 * 60, // JWT 토큰 만료 시간 (2시간)
  },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;
