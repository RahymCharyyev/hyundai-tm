import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

export function Footer() {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-[400px] flex flex-col justify-between bg-primary">
      <div className="flex justify-between pt-20 px-28">
        <div className="flex flex-col gap-3 max-w-[250px]">
          <Image
            src="/hyundai_white_logo.png"
            alt="hyundai logo"
            width={190}
            height={30}
          />
          <span className="text-white">{t('officialDistributor')}</span>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-white font-medium">{t('maintenance')}</h2>
          <Link className="text-thirdColor hover:text-white" href="/maintenance/event">
            {t('maintenanceEvent')}
          </Link>
          <Link className="text-thirdColor hover:text-white" href="/maintenance/sign">
            {t('signToMaintenance')}
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
            {t('ToMap')}
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
          <Link className="text-thirdColor hover:text-white" href="/services/stock">
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
          <Link
            className="text-thirdColor hover:text-white"
            href="/history/hyundai-turkmenistan"
          >
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
            href=""
            className="flex gap-2 items-center text-thirdColor hover:text-white"
          >
            <Image src="/location_icon.svg" alt="share logo" width={10} height={15} />
            58 ул. Г. Кулиева, 744015 Ашхабад, Туркменистан
          </Link>
          <Link
            href="tel:+993 12 75 44 85"
            className="flex gap-2 items-center text-thirdColor hover:text-white"
          >
            <Image src="/phone_icon.svg" alt="share logo" width={15} height={14} />
            +993 12 75 44 85
          </Link>
          <Link
            href="mailto:hyundai.ashgabat2023@gmail.com"
            className="flex gap-2 items-center text-thirdColor hover:text-white"
          >
            <Image src="/mail_icon.svg" alt="share logo" width={15} height={15} />
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
