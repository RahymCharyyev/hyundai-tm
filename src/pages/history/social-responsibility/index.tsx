import { serviceResponsibility } from '@/fakeData/serviceResponsibility';
import { CommonHero } from '@/shared/ui/CommonHero';
import { NavLink } from '@/shared/ui/NavLink';
import { ButtonGroup } from '@material-tailwind/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export default function HistoryResponsibilityPage() {
  const { t } = useTranslation('common');
  const { pathname } = useRouter();

  serviceResponsibility;

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
      <div className="flex flex-col my-16 max-w-6xl">
        <span className="mb-8">{serviceResponsibility.text}</span>
        <h1 className="font-bold text-4xl text-center mb-16">
          {serviceResponsibility.title}
        </h1>
        <h2 className="font-bold text-3xl mb-8">{serviceResponsibility.subtitle}</h2>
        {serviceResponsibility.listItems.map((item) => (
          <ul className="list-disc ml-4" key={item.id}>
            <li className="mb-2">{item.listText}</li>
          </ul>
        ))}
      </div>
    </main>
  );
}
