import { NavLink } from '@/shared/ui/NavLink';
import { HistoryHero } from '@/widgets/history/history-hero/HistoryHero';
import { ButtonGroup } from '@material-tailwind/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export default function HistoryPage() {
  const { t } = useTranslation('common');

  const { pathname } = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <HistoryHero
        showSearch={false}
        title={t('news')}
        breadcrumbs={[
          { href: '/', text: t('main') },
          { href: '/history', text: t('hyundaiHistory') },
        ]}
        t={t}
      />
      <ButtonGroup>
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
    </main>
  );
}
