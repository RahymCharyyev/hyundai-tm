import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { LanguageSwitcher } from '@/shared/ui';

export function Header() {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <header className="z-10">
      <div className="h-11 flex items-center bg-secondary">
        <span className="text-primary px-28">
          {t('callCenter')}: &nbsp;
          <Link className="font-bold" href="tel:+993 12 12-12-12">
            +993 12 12-12-12
          </Link>
        </span>
      </div>
      <div className="flex justify-between items-center h-24 px-28">
        <Image src="/hyundai_blue_logo.png" alt="hyundai logo" width={190} height={30} />
        <div className="flex gap-8">
          <Link
            className={
              router.pathname == '/' ? 'active font-medium' : 'hover:font-medium'
            }
            href="/"
          >
            {t('main')}
          </Link>
          <Link
            className={
              router.pathname == '/models' ? 'active font-medium' : 'hover:font-medium'
            }
            href="/models"
          >
            {t('modelsLineup')}
          </Link>
          <Link
            className={
              router.pathname == '/maintenance'
                ? 'active font-medium '
                : 'hover:font-medium'
            }
            href="/maintenance"
          >
            {t('maintenance')}
          </Link>
          <Link
            className={
              router.pathname == '/history' ? 'active font-medium' : 'hover:font-medium'
            }
            href="/history"
          >
            {t('hyundaiHistory')}
          </Link>
          <Link
            className={
              router.pathname == '/stock' ? 'active font-medium' : 'hover:font-medium'
            }
            href="/stock"
          >
            {t('stock')}
          </Link>
          <Link
            className={
              router.pathname == '/services' ? 'active font-medium' : 'hover:font-medium'
            }
            href="/services"
          >
            {t('services')}
          </Link>
        </div>
        <div className="flex gap-5">
          <LanguageSwitcher />
          <Image src="/share_icon.svg" alt="share logo" width={20} height={20} />
          <Image src="/search_icon.svg" alt="search logo" width={20} height={20} />
        </div>
      </div>
    </header>
  );
}
