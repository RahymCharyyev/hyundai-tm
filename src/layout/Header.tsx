import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { LanguageSwitcher } from '@/shared/ui';
import HyundaiBlueLogo from '@/assets/hyundai_blue_logo.png';
import ShareIcon from '@/assets/share_icon.svg';
import SearchIcon from '@/assets/search_icon.svg';
import HambugerIcon from '@/assets/hamburger.svg';
import { useState } from 'react';
import { Drawer, Button, Typography, IconButton } from '@material-tailwind/react';

export function Header() {
  const { t } = useTranslation('common');
  const { pathname } = useRouter();
  const activeLink = 'active font-medium hover:font-medium';
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <header>
      <div className="h-11 flex items-center bg-header">
        <span className="text-primary px-28">
          {t('callCenter')}: &nbsp;
          <Link className="font-bold" href="tel:+993 12 12-12-12">
            +993 12 12-12-12
          </Link>
        </span>
      </div>
      <div className="flex justify-between items-center h-24 px-28">
        <Image src={HyundaiBlueLogo} alt="hyundai logo" width={190} height={30} />
        <div className="flex gap-8 2xl:hidden">
          <Link className={pathname == '/' ? activeLink : 'hover:font-medium'} href="/">
            {t('main')}
          </Link>
          <Link
            className={pathname == '/models' ? activeLink : 'hover:font-medium'}
            href="/models"
          >
            {t('modelsLineup')}
          </Link>
          <Link
            className={pathname == '/maintenance' ? activeLink : 'hover:font-medium'}
            href="/maintenance"
          >
            {t('maintenance')}
          </Link>
          <Link
            className={pathname == '/history' ? activeLink : 'hover:font-medium'}
            href="/history"
          >
            {t('hyundaiHistory')}
          </Link>
          <Link
            className={pathname == '/stock' ? activeLink : 'hover:font-medium'}
            href="/stock"
          >
            {t('stock')}
          </Link>
          <Link
            className={pathname == '/services' ? activeLink : 'hover:font-medium'}
            href="/services"
          >
            {t('services')}
          </Link>
        </div>
        <div className="flex gap-5">
          <LanguageSwitcher />
          <Image src={ShareIcon} alt="share logo" width={20} height={20} />
          <Image src={SearchIcon} alt="search logo" width={20} height={20} />
          <Image
            className="hidden 2xl:block"
            src={HambugerIcon}
            alt="hamburger menu"
            onClick={openDrawer}
          />
          <Drawer placement="right" open={open} onClose={closeDrawer} className="p-4 ">
            <div className="mb-6 flex  justify-end">
              <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
            <div className="flex flex-col gap-10 items-center">
              <Link
                className={pathname == '/' ? activeLink : 'hover:font-medium'}
                href="/"
              >
                {t('main')}
              </Link>
              <Link
                className={pathname == '/models' ? activeLink : 'hover:font-medium'}
                href="/models"
              >
                {t('modelsLineup')}
              </Link>
              <Link
                className={pathname == '/maintenance' ? activeLink : 'hover:font-medium'}
                href="/maintenance"
              >
                {t('maintenance')}
              </Link>
              <Link
                className={pathname == '/history' ? activeLink : 'hover:font-medium'}
                href="/history"
              >
                {t('hyundaiHistory')}
              </Link>
              <Link
                className={pathname == '/stock' ? activeLink : 'hover:font-medium'}
                href="/stock"
              >
                {t('stock')}
              </Link>
              <Link
                className={pathname == '/services' ? activeLink : 'hover:font-medium'}
                href="/services"
              >
                {t('services')}
              </Link>
            </div>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
