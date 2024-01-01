import DownloadIcon from '@/assets/download.png';
import { serviceMap } from '@/fakeData/serviceMap';
import { CommonHero } from '@/shared/ui/CommonHero';
import { NavLink } from '@/shared/ui/NavLink';
import { ButtonGroup } from '@material-tailwind/react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MaintenanceMapPage() {
  const { t } = useTranslation('common');
  const { pathname } = useRouter();
  serviceMap;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CommonHero
        showSearch={false}
        title={t('maintenanceMap')}
        breadcrumbs={[
          { href: '/maintenance', text: t('maintenance') },
          { href: '/maintenance/map', text: t('maintenanceMap') },
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
        <NavLink
          href="/maintenance/map"
          text="maintenanceMap"
          pathname={pathname}
          t={t}
        />
      </ButtonGroup>
      <h1 className="font-bold text-4xl mt-16 text-center">{serviceMap.title}</h1>
      <table className="w-[800px] text-center border-2 my-8">
        <tr className="bg-accordionBg border-2">
          <th className="py-3 border-2">{serviceMap.tableHead.models}</th>
          <th className="py-3 border-2">{serviceMap.tableHead.map}</th>
        </tr>
        {serviceMap.models.map((model, index) => (
          <tr key={model.id}>
            <td className="py-3">{model.name}</td>
            {index === serviceMap.models.length - 1 && (
              <Link href={serviceMap.downloadLink}>
                <td className="flex gap-2 items-center justify-center">
                  <Image src={DownloadIcon} alt="donload" />
                  {t('download')}
                </td>
              </Link>
            )}
          </tr>
        ))}
      </table>
    </main>
  );
}
