import { getHistoryData } from '@/api/getHistoryPageData';
import { Loading } from '@/layout/Loading';
import { CommonHero } from '@/shared/ui/CommonHero';
import { NavLink } from '@/shared/ui/NavLink';
import { ButtonGroup } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export default function HistoryResponsibilityPage() {
  const { t } = useTranslation('common');
  const { pathname } = useRouter();
  const { isPending, error, data } = useQuery({
    queryKey: ['historyPage'],
    queryFn: () => getHistoryData(),
  });

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CommonHero
        showSearch={false}
        title={t('socialResponsibility')}
        subtitle={t('socialResponsibilitySubtitle')}
        breadcrumbs={[
          { href: '/history', text: t('hyundaiHistory') },
          { href: '/history/social-responsibility', text: t('socialResponsibility') },
        ]}
        t={t}
      />
      <ButtonGroup className="flex flex-wrap items-center justify-center">
        <NavLink href="/history" text="hyundaiTurkmenistan" pathname={pathname} t={t} />
        <NavLink href="/history/media" text="media" pathname={pathname} t={t} />
        <NavLink href="/history/news" text="news" pathname={pathname} t={t} />
        <NavLink
          href="/history/social-responsibility"
          text="socialResponsibility"
          pathname={pathname}
          t={t}
        />
      </ButtonGroup>
      <div dangerouslySetInnerHTML={{ __html: data.data.socialResponsibility }}></div>
    </main>
  );
}
