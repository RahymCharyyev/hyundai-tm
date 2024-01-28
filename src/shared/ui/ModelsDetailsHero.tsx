import DownloadIcon from '@/assets/download.png';
import RequestIcon from '@/assets/requestIcon.png';
import TestDriveIcon from '@/assets/testDriveIcon.png';
import { Breadcrumbs } from '@/shared/ui';
import { Model } from '@/types/mainPage';
import { Banner } from '@/types/modelsDetailsPage';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

type ModelsDetailsHeroProps = {
  breadcrumbs: { href: string; text: string }[];
  data: Banner;
  model: Model;
  t: Function;
  id: string | undefined | string[];
};

export const ModelsDetailsHero: FC<ModelsDetailsHeroProps> = ({
  breadcrumbs,
  data,
  t,
  id,
  model,
}) => {
  const router = useRouter();

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-evenly bg-cover bg-[url('/slider_bg.webp')]">
        <Breadcrumbs breadcrumbs={breadcrumbs} className="bg-opacity-0 lg:hidden" />
        <Image src={data.imageRuPath} alt="banner" width={1850} height={500} />
        <div className={`flex justify-center gap-14 bg-primary w-full py-4`}>
          <Link
            href="/services"
            className="flex items-center gap-4 text-white font-bold hover:underline"
          >
            <Image src={TestDriveIcon} alt="test drive icon" />
            <p>{t('testDriveFormTitle')}</p>
          </Link>

          <Link
            href="/services/contacts"
            className="flex items-center gap-4 text-white font-bold hover:underline"
          >
            <Image src={RequestIcon} alt="request icon" />
            <p>{t('leaveRequest')}</p>
          </Link>
        </div>
        <div className="flex flex-wrap gap-5 justify-center w-full py-4 text-sm bg-white">
          <p className="uppercase font-bold">{model?.name}</p>
          <Link
            className={`hover:text-fourthColor ${
              router.asPath === `/models/${id}/feature` ? 'text-fourthColor' : ''
            }`}
            href={`/models/${id}/feature`}
          >
            {t('feature')}
          </Link>
          <Link
            className={`hover:text-fourthColor ${
              router.asPath === `/models/${id}/exterior` ? 'text-fourthColor' : ''
            }`}
            href={`/models/${id}/exterior`}
          >
            {t('exterior')}
          </Link>
          <Link
            className={`hover:text-fourthColor ${
              router.asPath === `/models/${id}/interior` ? 'text-fourthColor' : ''
            }`}
            href={`/models/${id}/interior`}
          >
            {t('interior')}
          </Link>
          <Link
            className={`hover:text-fourthColor ${
              router.asPath === `/models/${id}/performance` ? 'text-fourthColor' : ''
            }`}
            href={`/models/${id}/performance`}
          >
            {t('performance')}
          </Link>
          <Link
            className={`hover:text-fourthColor ${
              router.asPath === `/models/${id}/safety` ? 'text-fourthColor' : ''
            }`}
            href={`/models/${id}/safety`}
          >
            {t('safety')}
          </Link>
          <Link
            className={`hover:text-fourthColor ${
              router.asPath === `/models/${id}/comfort` ? 'text-fourthColor' : ''
            }`}
            href={`/models/${id}/comfort`}
          >
            {t('comfort')}
          </Link>
          <Link
            className={`hover:text-fourthColor ${
              router.asPath === `/models/${id}/characteristics` ? 'text-fourthColor' : ''
            }`}
            href={`/models/${id}/characteristics`}
          >
            {t('characteristics')}
          </Link>
          <div className="flex gap-2 items-center">
            <Image src={DownloadIcon} alt="Download icon" />
            <Link className="hover:text-fourthColor" href={model?.catalogPath}>
              {t('downloadCatalog')}
            </Link>
          </div>
        </div>
      </div>
      <hr className="w-full h-px bg-thirdColor mb-8"></hr>
    </div>
  );
};
