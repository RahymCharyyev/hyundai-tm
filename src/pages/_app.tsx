import { Layout } from '@/layout/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

const hyundaiSans = localFont({
  src: [
    {
      path: './fonts/HyundaiSansTextOffice-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/HyundaiSansTextOffice-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/HyundaiSansTextOffice-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/HyundaiSansTextOffice-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/HyundaiSansTextOffice-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/HyundaiSansTextOffice-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${hyundaiSans.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
