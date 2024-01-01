import { offersTestDrive } from '@/fakeData/offersTestDrive';
import { CommonHero } from '@/shared/ui/CommonHero';
import { NavLink } from '@/shared/ui/NavLink';
import { ButtonGroup } from '@material-tailwind/react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ServicesPage() {
  const { t } = useTranslation('common');
  const { pathname } = useRouter();
  offersTestDrive;
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CommonHero
        showSearch={false}
        title={t('testDrive')}
        breadcrumbs={[
          { href: '/services', text: t('services') },
          { href: '/services', text: t('testDrive') },
        ]}
        t={t}
      />
      <ButtonGroup>
        <NavLink href="/services" text="testDrive" pathname={pathname} t={t} />
        <NavLink href="/services/contacts" text="contactUs" pathname={pathname} t={t} />
      </ButtonGroup>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-16">{offersTestDrive.title}</h1>
        <h2 className="text-linkColor font-bold mb-10">{offersTestDrive.subtitle}</h2>
        <Image
          className="mb-10"
          src={offersTestDrive.imagePath}
          alt="Test drive picture"
          width={500}
          height={300}
        />
        <h2 className="text-4xl font-bold mb-8">{offersTestDrive.formTitle}</h2>
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
          <span>{offersTestDrive.phoneService}</span>
          <span>{offersTestDrive.phoneSale}</span>
        </div>
      </div>
    </main>
  );
}
