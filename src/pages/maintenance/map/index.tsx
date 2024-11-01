import { getMaintenanceData } from '@/api/getMaintenancePageData';
import DownloadIcon from '@/assets/download.png';
import { CommonHero, NavLink } from '@/components';
import { Loading } from '@/components/layout/Loading';
import { ButtonGroup } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MaintenanceMapPage() {
  const { t } = useTranslation('common');
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
    <main className='flex min-h-screen flex-col items-center justify-start'>
      <CommonHero
        showSearch={false}
        title={t('maintenanceMap')}
        breadcrumbs={[
          { href: '/maintenance', text: t('maintenance') },
          { href: '/maintenance/map', text: t('maintenanceMap') },
        ]}
        t={t}
      />
      <ButtonGroup className='flex flex-wrap items-center justify-center'>
        <NavLink
          href='/maintenance'
          text='maintenanceEvent'
          pathname={router.pathname}
          t={t}
        />
        <NavLink
          href='/maintenance/register'
          text='maintenanceRegister'
          pathname={router.pathname}
          t={t}
        />
        <NavLink
          href='/maintenance/warranty'
          text='warranty'
          pathname={router.pathname}
          t={t}
        />
        <NavLink
          href='/maintenance/car-maintenance'
          text='carMaintenance'
          pathname={router.pathname}
          t={t}
        />
        <NavLink
          href='/maintenance/map'
          text='maintenanceMap'
          pathname={router.pathname}
          t={t}
        />
      </ButtonGroup>
      <h1 className='font-bold text-4xl mt-16 text-center lg:text-2xl'>
        {t('maintenanceMap')}
      </h1>
      <table className='w-[800px] text-center border-2 my-8 lg:w-[600px] md:!w-[250px]'>
        <tr className='bg-accordionBg border-2'>
          <th className='py-3 border-2 lg:text-base'> {t('carName')}</th>
          <th className='py-3 border-2 lg:text-base'> {t('maintenanceMap')}</th>
        </tr>
        {data.models.map((model) => (
          <tr key={model.id}>
            <td className='py-3'>{model.name}</td>
            <Link href={model.maintainGuidePath}>
              <td className='flex gap-2 py-3 items-center justify-center'>
                <Image src={DownloadIcon} alt='donload' />
                {t('download')}
              </td>
            </Link>
          </tr>
        ))}
      </table>
    </main>
  );
}
