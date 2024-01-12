import { offersContacts } from '@/fakeData/offersContacts';
import { CommonHero } from '@/shared/ui/CommonHero';
import { NavLink } from '@/shared/ui/NavLink';
import { ButtonGroup } from '@material-tailwind/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export default function ServicesContactsPage() {
  const { t } = useTranslation('common');
  const { pathname } = useRouter();
  offersContacts;
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CommonHero
        showSearch={false}
        title={t('contactUs')}
        breadcrumbs={[
          { href: '/services', text: t('services') },
          { href: '/services/contacts', text: t('contactUs') },
        ]}
        t={t}
      />
      <ButtonGroup>
        <NavLink href="/services" text="testDrive" pathname={pathname} t={t} />
        <NavLink href="/services/contacts" text="contactUs" pathname={pathname} t={t} />
      </ButtonGroup>
      <div className="flex flex-col items-center 2xl:max-w-5xl">
        <h1 className="text-4xl font-bold my-16 text-center">{offersContacts.title}</h1>
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
        <div className="flex gap-10 justify-between my-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d486.8104361208546!2d31.104625!3d12.550339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6fff7552c8a2f9%3A0xa91ad91cf22f5d22!2sHyundai%20Distributor!5e0!3m2!1sen!2sus!4v1704125198161!5m2!1sen!2sus"
            width="470"
            height="500"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="flex flex-col gap-4 text-xl">
            <p>{offersContacts.companyName}</p>
            <p>{offersContacts.workingDays}</p>
            <p>{offersContacts.phoneSale}</p>
            <p>{offersContacts.phoneService}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
