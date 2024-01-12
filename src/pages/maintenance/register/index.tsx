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
          { href: '/maintenance', text: t('maintenance') },
          { href: '/maintenance/register', text: t('maintenanceRegister') },
        ]}
        t={t}
      />
      <ButtonGroup className="flex flex-wrap items-center justify-center">
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
        <NavLink
          href="/maintenance/map"
          text="maintenanceMap"
          pathname={pathname}
          t={t}
        />
      </ButtonGroup>
      <h1 className="font-bold text-2xl max-w-[930px] my-16 text-center lg:text-xl lg:px-20 sm:!text-lg">
        {serviceRegister.title}
      </h1>
      <div className="flex flex-col gap-4 items-center bg-secondary py-12">
        <div className="flex gap-y-10 justify-between flex-wrap py-10 px-10 lg:py-2 lg:px-4">
          <input
            className="w-[300px] h-[55px] bg-white  px-3 py-3 lg:w-[150px] lg:text-xs lg:h-[35px]"
            placeholder={t('name')}
          />
          <input
            className="w-[300px] h-[55px] bg-white px-3 py-3 lg:w-[150px] lg:text-xs lg:h-[35px]"
            type="tel"
            placeholder={t('phone')}
          />
          <input
            className="w-[300px] h-[55px] bg-white  px-3 py-3 lg:w-[150px] lg:text-xs lg:h-[35px]"
            type="email"
            placeholder={t('mail')}
          />
          <textarea
            className="w-full bg-white  placeholder:pt-3 px-3 py-3  lg:text-xs"
            placeholder={t('message')}
          />
        </div>
        <button
          className="font-bold bg-primary w-[300px] h-[50px] lg:w-[150px] lg:text-sm lg:h-[35px] text-white hover:underline"
          type="submit"
        >
          {t('sendRequest')}
        </button>
      </div>
      <div className="flex flex-wrap items-center text-center justify-between my-8 w-[60%] md:justify-center sm:text-sm sm:w-[100%]">
        <span>{serviceRegister.phoneService}</span>
        <span>{serviceRegister.phoneSale}</span>
      </div>
    </main>
  );
}
