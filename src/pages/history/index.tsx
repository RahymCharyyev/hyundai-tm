import { getHistoryData } from '@/api/getHistoryPageData';
import { Loading } from '@/layout/Loading';
import { CommonHero } from '@/shared/ui/CommonHero';
import { NavLink } from '@/shared/ui/NavLink';
import { ButtonGroup } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export default function HistoryPage() {
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
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CommonHero
        showSearch={false}
        title={t('hyundaiTurkmenistan')}
        breadcrumbs={[
          { href: '/history', text: t('hyundaiHistory') },
          { href: '/history', text: t('hyundaiTurkmenistan') },
        ]}
        t={t}
      />
      <ButtonGroup className="flex flex-wrap items-center justify-center">
        <NavLink
          href="/history"
          text="hyundaiTurkmenistan"
          pathname={router.pathname}
          t={t}
        />
        <NavLink href="/history/media" text="media" pathname={router.pathname} t={t} />
        <NavLink href="/history/news" text="news" pathname={router.pathname} t={t} />
        <NavLink
          href="/history/social-responsibility"
          text="socialResponsibility"
          pathname={router.pathname}
          t={t}
        />
      </ButtonGroup>
      <div className="flex flex-col gap-4 items-center max-w-5xl my-16 lg:max-w-2xl px-2">
        <div className="ql">
          <div dangerouslySetInnerHTML={{ __html: data.data.hyundaiTurkmenistan }} />
        </div>
      </div>
    </main>
  );
}
