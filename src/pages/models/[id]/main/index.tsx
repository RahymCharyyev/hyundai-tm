import { getModelsDetailsPageData } from '@/api/getModelsDetailsPageData';
import { Loading } from '@/layout/Loading';
import { ModelsDetailsHero } from '@/shared/ui/ModelsDetailsHero';
import { ModelsDetailsNav } from '@/shared/ui/ModelsDetailsNav';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ModelsMain() {
  const imageData = [
    {
      imgelink: 'http://hyundai.com.tm/public/palisade_banner.webp',
    },
    {
      imgelink: 'http://hyundai.com.tm/public/sonata_banner.webp',
    },
    {
      imgelink: 'http://hyundai.com.tm/public/palisade_banner.webp',
    },
    {
      imgelink: 'http://hyundai.com.tm/public/palisade_banner.webp',
    },
    {
      imgelink: 'http://hyundai.com.tm/public/palisade_banner.webp',
    },
  ];
  const [active, setActive] = useState(
    'http://hyundai.com.tm/public/palisade_banner.webp',
  );
  const { t } = useTranslation('common');
  const router = useRouter();
  const { id } = router.query;
  const { isPending, error, data } = useQuery({
    queryKey: ['modelsDetailsPage'],
    queryFn: () =>
      getModelsDetailsPageData({
        modelId: Number(id),
        key: 'main',
      }),
  });

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <ModelsDetailsHero
        breadcrumbs={[
          { href: '/', text: t('main') },
          { href: '/models', text: t('modelsLineup') },
          { href: `/models/${id}/main`, text: 'modelName' },
          { href: `/models/${id}/main`, text: t('features') },
        ]}
        data={data.banner}
        t={t}
        id={id}
      />
      {data.details.map((detail: any, index: number) => (
        <div
          key={detail.id}
          className={`flex flex-col items-center w-full text-center mb-20 py-8 ${
            index % 2 === 0 ? 'bg-accordionBg' : ''
          }`}
        >
          <h2 className="text-3xl font-bold">{detail.title}</h2>
          <span className="text-xl">{detail.text}</span>
          <Image src={detail.imagePath} alt="features images" width={1120} height={600} />
        </div>
      ))}
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto w-full max-w-full object-cover object-center md:h-[480px]"
            src={active}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
          {imageData?.map(({ imgelink }, index) => (
            <div key={index}>
              <Image
                onClick={() => setActive(imgelink)}
                src={imgelink}
                className="h-20 max-w-full cursor-pointer object-cover object-center"
                alt="gallery-image"
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
      <ModelsDetailsNav
        t={t}
        nextLink="exterior"
        prevLink="main"
        id={id}
        showPrev={false}
      />
      <span className="mx-auto max-w-6xl mb-10 text-gray-600">
        {t('modelDetailsInfo')}
      </span>
    </main>
  );
}
