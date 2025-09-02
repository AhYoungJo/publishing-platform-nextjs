'use server';

import {auth} from '@/auth';
import {connectToDB} from '@/libs/db';
import {Post} from '@/libs/schemas/posts';
import {revalidatePath} from 'next/cache';

export async function addPosts(
  state: {message: string; status: boolean},
  formData: FormData,
) {
  try {
    const session = await auth();
    connectToDB();

    // console.log({
    //     name: session?.user?.name as string,
    //     profile: session?.user?.image as string,
    //     title: formData.get('title') as string,
    //     category: formData.get('category') as string,
    //     description: formData.get('description') as string,
    //     thumbnail: formData.get('thumbnail') as string,
    //     datetime: new Date(),
    // });

    if (session) {
      await Post.create({
        name: session?.user?.name as string,
        profile: session?.user?.image as string,
        title: formData.get('title') as string,
        category: formData.get('category') as string,
        description: formData.get('description') as string,
        thumbnail: formData.get('thumbnail') as string,
        datetime: new Date(),
      });
    }

    return {
      message: '글이 성공적으로 등록되었습니다.',
      status: true,
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : 'from data 전송 오류',
      status: false,
    };
  }
}

//모든 영역 초기화
export const revalidateAll = () => {
  revalidatePath('/', 'layout');
};
