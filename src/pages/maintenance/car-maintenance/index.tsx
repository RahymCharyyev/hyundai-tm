import { getMaintenanceData } from '@/api/getMaintenancePageData';
import { Loading } from '@/layout/Loading';
import { Icon } from '@/shared/ui/AccordionIcon';
import { CommonHero } from '@/shared/ui/CommonHero';
import { NavLink } from '@/shared/ui/NavLink';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  ButtonGroup,
} from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import DownloadIcon from '@/assets/download.png';

export default function MaintenanceWarrantyPage() {
  const { t } = useTranslation('common');
  const [open, setOpen] = useState(null);
  const handleOpen = (value: any) => setOpen(open === value ? null : value);
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
        title={t('technicalMaintenance')}
        subtitle={t('technicalMaintenanceTitle')}
        breadcrumbs={[
          { href: '/maintenance', text: t('maintenance') },
          { href: '/maintenance/car-maintenance', text: t('carMaintenance') },
        ]}
        t={t}
      />
      <ButtonGroup className="flex flex-wrap items-center justify-center">
        <NavLink
          href="/maintenance"
          text="maintenanceEvent"
          pathname={router.pathname}
          t={t}
        />
        <NavLink
          href="/maintenance/register"
          text="maintenanceRegister"
          pathname={router.pathname}
          t={t}
        />
        <NavLink
          href="/maintenance/warranty"
          text="warranty"
          pathname={router.pathname}
          t={t}
        />
        <NavLink
          href="/maintenance/car-maintenance"
          text="carMaintenance"
          pathname={router.pathname}
          t={t}
        />
        <NavLink
          href="/maintenance/map"
          text="maintenanceMap"
          pathname={router.pathname}
          t={t}
        />
      </ButtonGroup>
      <h1 className="font-bold text-4xl mt-16 text-center lg:text-2xl sm:!text-lg">
        {data.maintenance.title1}
      </h1>
      <h2 className="max-w-4xl my-8 lg:max-w-xl sm:!text-sm sm:px-5">
        {data.maintenance.text}
      </h2>
      <h2 className="font-bold text-4xl mb-8 lg:text-2xl sm:!text-sm">
        {data.maintenance.title2}
      </h2>
      {data.principles.map((accordion) => (
        <Accordion
          open={open === accordion.id}
          key={accordion.id}
          icon={<Icon id={accordion.id} open={open} />}
          className={`max-w-5xl mx-auto lg:max-w-2xl sm:!max-w-xs ${
            open === accordion.id ? 'bg-accordionBg' : 'bg-primary'
          }`}
        >
          <AccordionHeader
            className={`text-white hover:text-white px-6 lg:text-base ${
              open === accordion.id ? 'bg-accordionBg text-black hover:text-black' : ''
            }`}
            onClick={() => handleOpen(accordion.id)}
          >
            {accordion.title}
          </AccordionHeader>
          <AccordionBody
            dangerouslySetInnerHTML={{ __html: accordion.text }}
            className={` px-6 lg:text-sm ${
              open === accordion.id ? 'bg-accordionBg text-black hover:text-black' : ''
            }`}
          ></AccordionBody>
        </Accordion>
      ))}
      <h2 className="font-bold text-4xl my-8 md:text-2xl sm:text-xl">{t('userGuide')}</h2>
      <table className="text-center border-2 mb-8 sm:mx-2">
        <tr className="bg-primary text-white py-3 px-3 border-2 md:py-2 md:px-2 sm:py-1 sm:px-1 sm:text-xs">
          <th className="py-3 px-3 md:py-2 md:px-2 sm:py-1 sm:px-1 border-2">
            {t('year')}
          </th>
          <th className="py-3 px-3 md:py-2 md:px-2 sm:py-1 sm:px-1 border-2">
            {t('type')}
          </th>
          <th className="py-3 px-3 md:py-2 md:px-2 sm:py-1 sm:px-1 border-2 sm:hidden">
            {t('status')}
          </th>
          <th className="py-3 px-3 md:py-2 md:px-2 sm:py-1 sm:px-1 border-2">
            {t('carName')}
          </th>
          <th className="py-3 px-3 md:py-2 md:px-2 sm:py-1 sm:px-1 border-2">
            {t('modelDate')}
          </th>
          <th className="py-3 px-3 md:py-2 md:px-2 sm:py-1 sm:px-1 border-2">
            {t('link')}
          </th>
        </tr>
        {data.models.map((model) => (
          <tr key={model.id} className="hover:bg-accordionBg sm:text-xs">
            <td className="py-3 border-2 md:px-2 sm:py-1 sm:!px-1">{model.year}</td>
            <td className="py-3 border-2 md:px-2 sm:py-1 sm:!px-1">{model.frame}</td>
            <td className="py-3 border-2 md:px-2 sm:py-1 sm:!px-1 sm:hidden">
              {model.status}
            </td>
            <td className="py-3 border-2 md:px-2 sm:py-1 sm:!px-1">{model.name}</td>
            <td className="py-3 border-2 md:px-2 sm:py-1 sm:!px-1">
              {dayjs(model.createdAt).format('DD.MM.YYYY')}
            </td>
            <Link href={model.userGuidePath}>
              <td className="border-2 py-3 md:px-2 sm:py-1 flex gap-2 items-center justify-center">
                <Image src={DownloadIcon} alt="download" />
                {t('download')}
              </td>
            </Link>
          </tr>
        ))}
      </table>
    </main>
  );
}
