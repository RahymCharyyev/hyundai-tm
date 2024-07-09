import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from '@/layout/Layout';
import '@/styles/globals.css';
import { ThemeProvider } from '@material-tailwind/react';
import HyundaiSeo from '@/shared/seo/hyundaiSeo';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as ga from '@/google-analytics';

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

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      ga.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${hyundaiSans.style.fontFamily};
        }
      `}</style>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ID}');
        `}
      </Script>
      <QueryClientProvider client={queryClient}>
        <HyundaiSeo />
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
