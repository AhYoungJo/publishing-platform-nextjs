# Blog Project

Next.js 15와 TypeScript로 구축된 커뮤니티 블로그 플랫폼입니다.

## 🚀 주요 기능

- **블로그 포스트 작성/읽기**
- **사용자 인증**: 로그인/회원가입
- **반응형 디자인**: 모바일 친화적 UI
- **SEO 최적화**: 메타데이터 및 구조화된 데이터
- **실시간 업데이트**: Next.js App Router

## 🛠️ 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: MongoDB
- **Authentication**: NextAuth.js
- **Deployment**: Vercel

## 📦 설치 및 실행

### 필수 요구사항

- Node.js 18.17 이상
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone [repository-url]
cd blog

# 의존성 설치
npm install
```

### 환경 변수 설정

`.env.local` 파일을 생성하고 다음 변수들을 설정하세요:

```env
# NextAuth.js 설정
NEXTAUTH_SECRET=your-secret-key
NEXT_PUBLIC_API_URL=http://localhost:3000/api/

# 데이터베이스 설정
MONGODB_URL=your-database-url

#깃허브 로그인 auth
AUTH_GITHUB_ID=your-github-id
AUTH_GITHUB_SECRET=your-github-secret

#vercel 배포 url
NEXT_DEPLOY_DOMAIN=your-vercel-depoly-url
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📁 프로젝트 구조

```
blog/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (auth)/         # 인증 관련 페이지
│   │   ├── (blog)/         # 블로그 관련 페이지
│   │   └── api/            # API 라우트
│   ├── components/         # 재사용 가능한 컴포넌트
│   ├── libs/              # 유틸리티 및 설정
│   ├── server/            # 서버 액션
│   └── types/             # TypeScript 타입 정의
├── public/                # 정적 파일
└── ...
```

## 🚀 배포

### Vercel 배포

1. [Vercel](https://vercel.com)에 가입
2. GitHub 저장소와 MongoDB 연결
3. 환경 변수 설정
4. 자동 배포 완료

**개발자**: 조아영
**버전**: 1.0.0
