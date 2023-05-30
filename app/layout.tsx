import { LoginPopUp, RegisterPopUp } from './components/auth';
import { ClientOnly } from './components/common';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import { Nunito } from 'next/font/google';

export const metadata = {
  title: 'ExploreStay',
  description:
    'An app for booking short and long-term homestays and experiences',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <LoginPopUp />
          <RegisterPopUp />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
