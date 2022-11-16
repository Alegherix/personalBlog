import { Navbar } from 'components/Navbar';
import { roboto } from 'utils/fonts';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${roboto.className} bg-dark80 text-white p-4`} lang="en">
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
