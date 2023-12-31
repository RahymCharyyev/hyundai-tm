import { serviceRegister } from '@/fakeData/serviceRegister';
import { CommonHero } from '@/shared/ui/CommonHero';
import { NavLink } from '@/shared/ui/NavLink';
import { ButtonGroup } from '@material-tailwind/react';
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
        <NavLink href="/maintenance/warranty" text="warranty" pathname={pathname} t={t} />
        <NavLink
          href="/maintenance/car-maintenance"
          text="carMaintenance"
          pathname={pathname}
          t={t}
        />
        <NavLink href="/maintenance/to-map" text="ToMap" pathname={pathname} t={t} />
      </ButtonGroup>
      <h1 className="font-bold text-2xl max-w-[930px] my-16 text-center">
        {serviceRegister.title}
      </h1>
      <div className="flex flex-col gap-4 items-center bg-secondary py-12">
        <div className="flex gap-y-10 justify-between flex-wrap py-10 px-10">
          <input
            className="w-[300px] h-[55px] bg-white  px-3 py-3"
            placeholder={t('name')}
          />
          <input
            className="w-[300px] h-[55px] bg-white px-3 py-3"
            type="tel"
            placeholder={t('phone')}
          />
          <input
            className="w-[300px] h-[55px] bg-white  px-3 py-3"
            type="email"
            placeholder={t('mail')}
          />
          <textarea
            className="w-full bg-white  placeholder:pt-3 px-3 py-3"
            placeholder={t('message')}
          />
        </div>
        <button
          className="font-bold bg-primary w-[300px] h-[50px] text-white hover:underline"
          type="submit"
        >
          {t('sendRequest')}
        </button>
      </div>
      <div className="flex gap-[500px] items-end text-xl my-14">
        <span>{serviceRegister.phoneService}</span>
        <span>{serviceRegister.phoneSale}</span>
      </div>
    </main>
  );
}
