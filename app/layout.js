import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.scss';

export const metadata = {
  title: 'Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='container'>
        <Header />
        <main className='main'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
