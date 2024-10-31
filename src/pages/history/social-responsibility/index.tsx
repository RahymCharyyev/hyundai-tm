import { getHistoryData } from '@/api/getHistoryPageData';
import { CommonHero, NavLink } from '@/components';
import { Loading } from '@/components/layout/Loading';
import { ButtonGroup } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export default function HistoryResponsibilityPage() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = router.locale;
  const { isPending, error, data } = useQuery({
    queryKey: ['historyPage'],
    queryFn: () => getHistoryData({ lang: currentLang }),
  });

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <main className='flex min-h-screen flex-col items-center justify-start'>
      <CommonHero
        showSearch={false}
        title={t('socialResponsibility')}
        subtitle={t('socialResponsibilitySubtitle')}
        breadcrumbs={[
          { href: '/history', text: t('hyundaiHistory') },
          {
            href: '/history/social-responsibility',
            text: t('socialResponsibility'),
          },
        ]}
        t={t}
      />
      <ButtonGroup className='flex flex-wrap items-center justify-center'>
        <NavLink
          href='/history'
          text='hyundaiTurkmenistan'
          pathname={router.pathname}
          t={t}
        />
        <NavLink
          href='/history/media'
          text='media'
          pathname={router.pathname}
          t={t}
        />
        <NavLink
          href='/history/news'
          text='news'
          pathname={router.pathname}
          t={t}
        />
        <NavLink
          href='/history/social-responsibility'
          text='socialResponsibility'
          pathname={router.pathname}
          t={t}
        />
      </ButtonGroup>
      <div className='ql max-w-6xl mx-auto my-8 px-3 sm:text-xs sm:leading-6'>
        <div
          dangerouslySetInnerHTML={{ __html: data.data.socialResponsibility }}
        />
      </div>
    </main>
  );
}
