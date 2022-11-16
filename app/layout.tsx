import { Footer } from 'components/Footer';
import { Navbar } from 'components/Navbar';
import { roboto } from 'utils/fonts';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${roboto.className} bg-dark-900 text-white `} lang="en">
      <head />
      <body className="max-w-screen-xl mx-auto flex min-h-screen p-4 flex-col relative">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
