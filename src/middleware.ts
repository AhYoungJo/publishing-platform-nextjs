import NextAuth from 'next-auth';
import {authConfig} from './auth.config';
import {NextRequest} from 'next/server';

const {auth} = NextAuth(authConfig);
export default auth(async function middleware(req: NextRequest) {});
// export default NextAuth(authConfig).auth;

export const config = {
  // 인증이 필요한 경로들을 더 구체적으로 매칭
  matcher: [
    /*
     * 다음 경로들을 제외한 모든 요청에 매치:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - 이미지 파일들 (jpg, jpeg, png, gif, svg, webp)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|gif|svg|webp)$).*)',
  ],
};
