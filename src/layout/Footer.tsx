import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import HyundaiWhiteLogo from '@/assets/hyundai_white_logo.png';
import LocationIcon from '@/assets/location_icon.svg';
import PhoneIcon from '@/assets/phone_icon.svg';
import MailIcon from '@/assets/mail_icon.svg';

export function Footer() {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-[400px] flex flex-col justify-between bg-primary">
      <div className="flex flex-wrap justify-between pt-20 px-28">
        <div className="flex flex-col gap-3 max-w-[250px]">
          <Image src={HyundaiWhiteLogo} alt="hyundai logo" width={190} height={30} />
          <span className="text-white">{t('officialDistributor')}</span>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-white font-medium">{t('maintenance')}</h2>
          <Link className="text-thirdColor hover:text-white" href="/maintenance">
            {t('maintenanceEvent')}
          </Link>
          <Link className="text-thirdColor hover:text-white" href="/maintenance/register">
            {t('maintenanceRegister')}
          </Link>
          <Link className="text-thirdColor hover:text-white" href="/maintenance/warranty">
            {t('warranty')}
          </Link>
          <Link
            className="text-thirdColor hover:text-white"
            href="/maintenance/car-maintenance"
          >
            {t('carMaintenance')}
          </Link>
          <Link className="text-thirdColor hover:text-white" href="/maintenance/map">
            {t('maintenanceMap')}
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-white font-medium">{t('forBuyer')}</h2>
          <Link className="text-thirdColor hover:text-white" href="/models">
            {t('modelsLineup')}
          </Link>
          <Link className="text-thirdColor hover:text-white" href="/services/test-drive">
            {t('testDrive')}
          </Link>
          <Link className="text-thirdColor hover:text-white" href="/stock">
            {t('stock')}
          </Link>
          <Link
            className="text-thirdColor hover:text-white"
            href="/maintenance/car-maintenance"
          >
            {t('carMaintenance')}
          </Link>
          <Link
            className="text-thirdColor hover:text-white"
            href="/history/social-responsibility"
          >
            {t('socialResponsibility')}
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-white font-medium">{t('aboutHyundai')}</h2>
          <Link className="text-thirdColor hover:text-white" href="/history">
            Hyundai Turkmenistan
          </Link>
          <Link className="text-thirdColor hover:text-white" href="/history/media">
            {t('media')}
          </Link>
          <Link className="text-thirdColor hover:text-white" href="/history/news">
            {t('news')}
          </Link>
          <Link
            className="text-thirdColor hover:text-white"
            href="/maintenance/car-maintenance"
          >
            {t('carMaintenance')}
          </Link>
          <Link
            className="text-thirdColor hover:text-white"
            target="_blank"
            href="https://www.hyundai.com/worldwide/en/"
          >
            Hyundai Worldwide
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-white font-medium">{t('contacts')}</h2>
          <Link
            className="text-thirdColor font-bold hover:text-white"
            href="tel:+993 12 12-12-12"
          >
            {t('callCenter')}: &nbsp; +993 12 12-12-12
          </Link>
          <Link
            target="_blank"
            href="https://maps.app.goo.gl/QJL9GKfyRv3dCb6D9"
            className="flex gap-2 items-center text-thirdColor hover:text-white"
          >
            <Image src={LocationIcon} alt="share logo" width={10} height={15} />
            58 ул. Г. Кулиева, 744015 Ашхабад, Туркменистан
          </Link>
          <Link
            href="tel:+993 12 75 44 85"
            className="flex gap-2 items-center text-thirdColor hover:text-white"
          >
            <Image src={PhoneIcon} alt="share logo" width={15} height={14} />
            +993 12 75 44 85
          </Link>
          <Link
            href="mailto:hyundai.ashgabat2023@gmail.com"
            className="flex gap-2 items-center text-thirdColor hover:text-white"
          >
            <Image src={MailIcon} alt="share logo" width={15} height={15} />
            hyundai.ashgabat2023@gmail.com
          </Link>
        </div>
      </div>
      <div className="text-center text-white mb-3">
        Copyright {currentYear} Hyundai Motor Company. {t('allRightsReserved')}
      </div>
    </footer>
  );
}
