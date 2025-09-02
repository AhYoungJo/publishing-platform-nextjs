'use server';

import {connectToDB} from '@/libs/db';
import {signIn, signOut} from '@/auth';
import {User} from '@/libs/schemas/users';
import {redirect} from 'next/navigation';
import bcrypt from 'bcryptjs';

export async function githubLogin() {
  await signIn('github');
}
export async function Logout() {
  await signOut();
}

export async function register(formData: FormData) {
  await connectToDB();
  const name = String(formData.get('name') || '');
  const email = String(formData.get('email') || '');
  const password = String(formData.get('password') || '');
  const termsAgreed = Boolean(formData.get('termsAgreed') || false);

  if (!name || !email || !password || !termsAgreed) {
    redirect('/register?error=required');
  }
  const passwordHash = await bcrypt.hash(password, 12);
  const user = await User.create({
    name,
    email,
    password: passwordHash,
    role: 'user',
  });
  await signIn('credentials', {
    email: user.email,
    password: password,
    redirectTo: '/',
  });
}
