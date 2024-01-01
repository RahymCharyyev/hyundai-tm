import { serviceMaintenance } from '@/fakeData/serviceMaintenance';
import { Icon } from '@/shared/ui/AccordionIcon';
import { CommonHero } from '@/shared/ui/CommonHero';
import { NavLink } from '@/shared/ui/NavLink';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  ButtonGroup,
} from '@material-tailwind/react';
import dayjs from 'dayjs';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import DownloadIcon from '@/assets/download.png';
import Image from 'next/image';

export default function MaintenanceWarrantyPage() {
  const { t } = useTranslation('common');
  const { pathname } = useRouter();
  const [open, setOpen] = useState(null);
  const handleOpen = (value: any) => setOpen(open === value ? null : value);
  serviceMaintenance;

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
      {serviceMaintenance.map((maintenance) => (
        <div key={maintenance.id}>
          <h1 className="font-bold text-4xl mt-16 text-center">{maintenance.title}</h1>
          <h2 className="max-w-4xl my-8">{maintenance.description}</h2>
          <h2 className="font-bold text-4xl mb-8">{maintenance.subtitle}</h2>
          {maintenance.accordion.map((accordion) => (
            <Accordion
              open={open === accordion.id}
              key={accordion.id}
              icon={<Icon id={accordion.id} open={open} />}
              className={`max-w-5xl mx-auto ${
                open === accordion.id ? 'bg-accordionBg' : 'bg-primary'
              }`}
            >
              <AccordionHeader
                className={`text-white hover:text-white px-6 ${
                  open === accordion.id
                    ? 'bg-accordionBg text-black hover:text-black'
                    : ''
                }`}
                onClick={() => handleOpen(accordion.id)}
              >
                {accordion.name}
              </AccordionHeader>
              <AccordionBody
                className={` px-6 ${
                  open === accordion.id
                    ? 'bg-accordionBg text-black hover:text-black'
                    : ''
                }`}
              >
                {accordion.text}
              </AccordionBody>
            </Accordion>
          ))}
          <h2 className="font-bold text-4xl my-8">{maintenance.userGuideTitle}</h2>
          <table className="w-full text-center border-2 mb-8">
            <tr className="bg-primary text-white border-2">
              <th className="py-3 border-2">{maintenance.tableHead.year}</th>
              <th className="py-3 border-2">{maintenance.tableHead.type}</th>
              <th className="py-3 border-2">{maintenance.tableHead.state}</th>
              <th className="py-3 border-2">{maintenance.tableHead.name}</th>
              <th className="py-3 border-2">{maintenance.tableHead.createdAt}</th>
              <th className="py-3 border-2">{maintenance.tableHead.downloadLink}</th>
            </tr>
            {maintenance.tableContent.map((table) => (
              <tr key={table.id} className="hover:bg-accordionBg">
                <td className="py-3 border-2">{table.year}</td>
                <td className="py-3 border-2">{table.type}</td>
                <td className="py-3 border-2">{table.state}</td>
                <td className="py-3 border-2">{table.name}</td>
                <td className="py-3 border-2">
                  {dayjs(table.createdAt).format('DD.MM.YYYY')}
                </td>
                <Link href={table.downloadLink}>
                  <td className="border-2 py-3 flex gap-2 items-center justify-center">
                    <Image src={DownloadIcon} alt="donload" />
                    {t('download')}
                  </td>
                </Link>
              </tr>
            ))}
          </table>
        </div>
      ))}
    </main>
  );
}