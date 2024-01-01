import { serviceWarranty } from '@/fakeData/serviceWarranty';
import { Icon } from '@/shared/ui/AccordionIcon';
import { CommonHero } from '@/shared/ui/CommonHero';
import { NavLink } from '@/shared/ui/NavLink';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  ButtonGroup,
} from '@material-tailwind/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function MaintenanceWarrantyPage() {
  const { t } = useTranslation('common');
  const { pathname } = useRouter();
  const [open, setOpen] = useState(null);
  const handleOpen = (value: any) => setOpen(open === value ? null : value);

  serviceWarranty;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CommonHero
        showSearch={false}
        title={t('warranty')}
        breadcrumbs={[
          { href: '/maintenance', text: t('maintenance') },
          { href: '/maintenance/warranty', text: t('warranty') },
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
      <h1 className="font-bold text-4xl my-16 text-center">{t('warrantyCondition')}</h1>
      {serviceWarranty.map((warranty) => (
        <Accordion
          open={open === warranty.id}
          key={warranty.id}
          icon={<Icon id={warranty.id} open={open} />}
          className={`max-w-5xl mx-auto ${
            open === warranty.id ? 'bg-accordionBg' : 'bg-primary'
          }`}
        >
          <AccordionHeader
            className={`text-white hover:text-white px-6 ${
              open === warranty.id ? 'bg-accordionBg text-black hover:text-black' : ''
            }`}
            onClick={() => handleOpen(warranty.id)}
          >
            {warranty.title}
          </AccordionHeader>
          <AccordionBody
            className={` px-6 ${
              open === warranty.id ? 'bg-accordionBg text-black hover:text-black' : ''
            }`}
          >
            {warranty.description}
          </AccordionBody>
        </Accordion>
      ))}
    </main>
  );
}
