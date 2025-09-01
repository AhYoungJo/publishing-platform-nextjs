import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import SessionProvider from '@/components/auth/SessionProvider';
import {auth} from '@/auth';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  //spell check 사용 안함
  title: 'BYTH(Blog Your Thoughts)',
  description: 'Blogging WebApplications',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
