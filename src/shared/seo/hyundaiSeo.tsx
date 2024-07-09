import { DefaultSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

const HyundaiSeo = () => {
  const { t } = useTranslation('common');

  return (
    <DefaultSeo
      title={t('hyundaiTurkmenistan')}
      description={t('welcome')}
      themeColor="#ffffff"
      additionalLinkTags={[
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-180x180.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/favicon-192x192.png',
        },
      ]}
      additionalMetaTags={[
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'msapplication-TileImage', content: '/favicon-144x144.png' },
        { name: 'msapplication-config', content: '/browserconfig.xml' },
        { name: 'theme-color', content: '#ffffff' },
        {
          name: 'google-site-verification',
          content: 'qoxVRjSL2347fV_2z7XjWQxprYRmYi_aLIU4l7sIMXc',
        },
      ]}
      openGraph={{
        type: 'website',
        locale: 'tm_TM',
        url: 'https://hyundai.com.tm',
        siteName: 'Hyundai Turkmenistan',
        title: t('hyundaiTurkmenistan'),
        description: t('welcome'),
      }}
    />
  );
};

export default HyundaiSeo;
