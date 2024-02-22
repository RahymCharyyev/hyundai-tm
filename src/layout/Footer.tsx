import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import HyundaiWhiteLogo from '@/assets/hyundai_white_logo.png';
import LocationIcon from '@/assets/location_icon.svg';
import PhoneIcon from '@/assets/phone_icon.svg';
import MailIcon from '@/assets/mail_icon.svg';
import { useRouter } from 'next/router';
import { Loading } from './Loading';
import { useQuery } from '@tanstack/react-query';
import { getContacts } from '@/api/getContacts';
import EmeliAkylLogo from '@/assets/emeli_akyl_logo.png';

export function Footer() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = router.locale;
  const currentYear = new Date().getFullYear();

  const { isPending, error, data } = useQuery({
    queryKey: ['contactsPage'],
    queryFn: () => getContacts({ lang: currentLang }),
  });

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <footer className="h-auto flex flex-col justify-between bg-primary">
      <div className="hidden flex-col items-center justify-center gap-3 4xl:flex 4xl:pt-20 lg:!pt-5">
        <Image
          className="lg:w-[120px]"
          src={HyundaiWhiteLogo}
          alt="hyundai logo"
          width={190}
          height={30}
        />
        <span className="text-white lg:text-sm text-center">
          {t('officialDistributor')}
        </span>
      </div>
      <div className="flex flex-wrap justify-between pt-20 px-28 4xl:pt-8 2xl:justify-center 2xl:gap-10 lg:px-10 lg:!justify-start sm:!px-2">
        <div className="flex flex-col gap-3 max-w-[250px] 4xl:hidden">
          <Image src={HyundaiWhiteLogo} alt="hyundai logo" width={190} height={30} />
          <span className="text-white">{t('officialDistributor')}</span>
        </div>
        <div className="flex flex-col gap-5 lg:gap-2 lg:text-sm">
          <h2 className="text-white font-medium">{t('maintenance')}</h2>
          <Link className="text-header hover:text-white" href="/maintenance">
            {t('maintenanceEvent')}
          </Link>
          <Link className="text-header hover:text-white" href="/maintenance/register">
            {t('maintenanceRegister')}
          </Link>
          <Link className="text-header hover:text-white" href="/maintenance/warranty">
            {t('warranty')}
          </Link>
          <Link
            className="text-header hover:text-white"
            href="/maintenance/car-maintenance"
          >
            {t('carMaintenance')}
          </Link>
          <Link className="text-header hover:text-white" href="/maintenance/map">
            {t('maintenanceMap')}
          </Link>
        </div>
        <div className="flex flex-col gap-5  lg:gap-2 lg:text-sm">
          <h2 className="text-white font-medium">{t('forBuyer')}</h2>
          <Link className="text-header hover:text-white" href="/models">
            {t('modelsLineup')}
          </Link>
          <Link className="text-header hover:text-white" href="/services">
            {t('testDrive')}
          </Link>
          <Link className="text-header hover:text-white" href="/promotions">
            {t('promotions')}
          </Link>
          <Link
            className="text-header hover:text-white"
            href="/maintenance/car-maintenance"
          >
            {t('carMaintenance')}
          </Link>
          <Link
            className="text-header hover:text-white"
            href="/history/social-responsibility"
          >
            {t('socialResponsibility')}
          </Link>
        </div>
        <div className="flex flex-col gap-5  lg:gap-2 lg:text-sm">
          <h2 className="text-white font-medium">{t('aboutHyundai')}</h2>
          <Link className="text-header hover:text-white" href="/history">
            Hyundai Turkmenistan
          </Link>
          <Link className="text-header hover:text-white" href="/history/media">
            {t('media')}
          </Link>
          <Link className="text-header hover:text-white" href="/history/news">
            {t('news')}
          </Link>
          <Link
            className="text-header hover:text-white"
            href="/maintenance/car-maintenance"
          >
            {t('carMaintenance')}
          </Link>
          <Link
            className="text-header hover:text-white"
            target="_blank"
            href="https://www.hyundai.com/worldwide/en/"
          >
            Hyundai Worldwide
          </Link>
        </div>
        <div className="flex flex-col gap-5  lg:gap-2 lg:text-sm">
          <h2 className="text-white font-medium">{t('contacts')}</h2>
          <Link
            className="text-header font-bold hover:text-white"
            href={`tel:${data.data.callCenter.value}`}
          >
            {t('callCenter')}: &nbsp; {data.data.callCenter.value}
          </Link>
          <Link
            target="_blank"
            href="https://maps.app.goo.gl/QJL9GKfyRv3dCb6D9"
            className="flex gap-2 items-center text-header hover:text-white"
          >
            <Image src={LocationIcon} alt="share logo" width={10} height={15} />
            {data.data.address.value}
          </Link>
          <Link
            href={`tel:${data.data.phone.value}`}
            className="flex gap-2 items-center text-header hover:text-white"
          >
            <Image src={PhoneIcon} alt="share logo" width={15} height={14} />
            {data.data.phone.value}
          </Link>
          <Link
            href={`mailto:${data.data.email.value}`}
            className="flex gap-2 items-center text-header hover:text-white"
          >
            <Image src={MailIcon} alt="share logo" width={15} height={15} />
            {data.data.email.value}
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center text-center text-white mt-12 mb-3 lg:text-xs lg:mt-6 max-w-xs mx-auto sm:px-2">
        <span>Copyright {currentYear} Hyundai Motor Company.</span>
        <span className="flex gap-2 items-center">
          Powered by
          <Image src={EmeliAkylLogo} width={100} height={10} alt="Emeli Akyl logo" />
        </span>
        <span>{t('allRightsReserved')}</span>
      </div>
    </footer>
  );
}
