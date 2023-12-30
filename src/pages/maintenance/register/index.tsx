import { serviceRegister } from '@/fakeData/serviceRegister';
import { CommonHero } from '@/shared/ui/CommonHero';
import { NavLink } from '@/shared/ui/NavLink';
import { Button, ButtonGroup } from '@material-tailwind/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export default function MaintenanceRegisterPage() {
  const { t } = useTranslation('common');
  const { pathname } = useRouter();

  serviceRegister;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CommonHero
        showSearch={false}
        title={t('maintenanceRegister')}
        breadcrumbs={[
          { href: '/', text: t('maintenance') },
          { href: '/maintenance/register', text: t('maintenanceRegister') },
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
      <h1 className="font-bold text-2xl max-w-[930px] my-16 text-center">
        {serviceRegister.title}
      </h1>
      <div className="flex flex-col gap-4 bg-secondary">
        <div className="flex gap-y-10 justify-between flex-wrap py-10 px-10">
          <input className="w-[300px] h-[55px] bg-white" placeholder="name" />
          <input className="w-[300px] h-[55px] bg-white" type="tel" placeholder="phone" />
          <input
            className="w-[300px] h-[55px] bg-white"
            type="email"
            placeholder="mail"
          />
          <textarea className="w-full  bg-white" placeholder="message" />
        </div>
        <Button color="blue" type="submit">
          Send
        </Button>
      </div>
      <div className="flex justify-between w-7xl">
        <span>{serviceRegister.phoneService}</span>
        <span>{serviceRegister.phoneSale}</span>
      </div>
    </main>
  );
}
