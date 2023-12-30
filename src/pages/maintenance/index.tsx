import { serviceEvents } from '@/fakeData/serviceEvents';
import { CommonHero } from '@/shared/ui/CommonHero';
import { NavLink } from '@/shared/ui/NavLink';
import { ButtonGroup } from '@material-tailwind/react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function MaintenancePage() {
  const { t } = useTranslation('common');
  const { pathname } = useRouter();

  serviceEvents;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CommonHero
        showSearch={false}
        title={t('maintenanceEvent')}
        breadcrumbs={[
          { href: '/', text: t('maintenance') },
          { href: '/maintenance', text: t('maintenanceEvent') },
        ]}
        t={t}
      />
      <ButtonGroup>
        <NavLink href="/maintenance" text="maintenanceEvent" pathname={pathname} t={t} />
        <NavLink
          href="/maintenance/register"
          text="maintenanceRegister"
          pathname={pathname}
          t={t}
        />
        <NavLink href="/history/news" text="warranty" pathname={pathname} t={t} />
        <NavLink
          href="/history/social-responsibility"
          text="carMaintenance"
          pathname={pathname}
          t={t}
        />
        <NavLink
          href="/history/social-responsibility"
          text="ToMap"
          pathname={pathname}
          t={t}
        />
      </ButtonGroup>
      <div className="relative my-16">
        <Image
          className="mx-auto"
          alt="maintenance-firstImage"
          src={serviceEvents.firstImagePath}
          width={1345}
          height={520}
          sizes="100vw"
        />
        <div className="absolute flex flex-col gap-10 top-28 left-10 text-white ">
          <h1 className="font-bold text-5xl max-w-lg">{serviceEvents.title}</h1>
          <h2 className="font-bold text-3xl max-w-md">{serviceEvents.subtitle}</h2>
        </div>
      </div>
      <Image
        alt="maintenance-secondImage"
        src={serviceEvents.secondImagePath}
        width={1120}
        height={600}
        sizes="100vw"
      />
      <span className="font-bold text-4xl my-16">{serviceEvents.text}</span>
    </main>
  );
}
