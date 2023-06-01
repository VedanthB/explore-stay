import getCurrentUser from './actions/getCurrentUser';
import { LoginPopUp, RegisterPopUp } from './components/auth';
import { ClientOnly } from './components/common';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import { Nunito } from 'next/font/google';
import ToasterProvider from './providers/ToastProvider';

export const metadata = {
  title: 'ExploreStay',
  description:
    'An app for booking short and long-term homestays and experiences',
};

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginPopUp />
          <RegisterPopUp />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
