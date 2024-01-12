import { getMaintenanceData } from '@/api/getMaintenancePageData';
import { Loading } from '@/layout/Loading';
import { CommonHero } from '@/shared/ui/CommonHero';
import { NavLink } from '@/shared/ui/NavLink';
import { ButtonGroup } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function MaintenancePage() {
  const { t } = useTranslation('common');
  const { pathname } = useRouter();
  const router = useRouter();
  const currentLang = router.locale;
  const { isPending, error, data } = useQuery({
    queryKey: ['maintenancePage'],
    queryFn: () =>
      getMaintenanceData({
        lang: currentLang,
      }),
  });

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

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
      <div className="flex flex-col items-center gap-10 mt-8">
        <h1 className="font-bold text-5xl 3xl:text-3xl 2xl:!text-xl text-center">
          {data.event.title}
        </h1>
        <Image
          crossOrigin="use-credentials"
          className="mx-auto 3xl:w-[1000px] px-10"
          alt="maintenance-firstImage"
          src={data.event.image1Path}
          width={1345}
          height={520}
          sizes="100vw"
        />
        <h2 className="font-bold text-3xl 3xl:text-xl 2xl:!text-lg text-center">
          {data.event.text}
        </h2>
        <Image
          className="3xl:w-[800px] px-20"
          crossOrigin="use-credentials"
          alt="maintenance-secondImage"
          src={data.event.image2Path}
          width={1120}
          height={600}
          sizes="100vw"
        />
      </div>
      <p className="font-bold text-4xl my-16 3xl:text-3xl 2xl:!text-2xl lg:!text-xl lg:hidden">
        {data.event.contactText}
      </p>
      <p className="font-bold hidden lg:block  text-center my-4 sm:text-sm">
        {data.event.contactText}
      </p>
    </main>
  );
}
