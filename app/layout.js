import localFont from 'next/font/local';
import '../styles/globals.css';
import StoreProvider from '../redux/StoreProvider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Hackatweet',
  description: 'Tweet your last news',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <StoreProvider>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </body>
      </StoreProvider>
    </html>
  );
}
