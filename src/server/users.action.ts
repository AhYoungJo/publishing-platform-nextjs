'use server';

import {signIn, signOut} from 'next-auth/react';

export async function githubLogin() {
  await signIn('github');
}

export async function googleLogin() {
  await signIn('google');
}

export async function logout() {
  await signOut();
}
