// import PostList from '@/components/PostList';
// import Search from '@/components/Search';
import {TITLE, SUBTITLE} from '@/constants/common';

const Home = ({searchParams}: {searchParams: {query: string}}) => {
  const query = searchParams.query || '';
  return (
    <>
      {/*메인 */}
      <main className='mt-[49px]'>
        {/* 메인 타이틀 */}
        <section className='flex flex-col items-center justify-center'>
          <h2 className='text-[48px] font-extrabold text-[#000638]'>
            {SUBTITLE}
          </h2>
          <p className='text-xl text-[#605C59]'>{TITLE}</p>
        </section>
        {/* 검색 영역 */}
        {/* 포스트 리스트 */}
      </main>
    </>
  );
};
export default Home;
