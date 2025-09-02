import {connectToDB} from '@/libs/db';
import {Post} from '@/libs/schemas/posts';

export async function GET(request: Request) {
  try {
    const {searchParams} = new URL(request.url);
    const query = searchParams.get('query') || '';

    console.log('=== API 호출 시작 ===');
    console.log('요청 URL:', request.url);
    console.log('검색 쿼리:', query);

    console.log('DB 연결 시도...');
    await connectToDB();
    console.log('DB 연결 성공');

    console.log('포스트 검색 시작...');
    // 빈 쿼리면 모든 포스트, 아니면 제목으로 검색
    const searchFilter = query ? {title: {$regex: query, $options: 'i'}} : {};

    const posts = await Post.find(searchFilter);
    console.log('찾은 포스트 개수:', posts.length);
    console.log('포스트 데이터:', posts.slice(0, 2)); // 처음 2개만 로그

    return Response.json(posts);
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({message: error.message, status: false});
    }

    return Response.json({
      message: 'Post Get 요청 알 수 없는 오류',
      status: false,
    });
  }
}
