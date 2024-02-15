import {
  getModelsDetailsPageData,
  getModelsImages,
} from '@/api/getModelsDetailsPageData';
import { Loading } from '@/layout/Loading';
import EnginesComponent from '@/shared/ui/Engines';
import { ModelsDetailsHero } from '@/shared/ui/ModelsDetailsHero';
import { ModelsDetailsNav } from '@/shared/ui/ModelsDetailsNav';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ModelsPerformace() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = router.locale;
  const { id } = router.query;
  const { isPending, error, data } = useQuery({
    queryKey: ['modelsDetailsPage'],
    queryFn: () =>
      getModelsDetailsPageData({
        modelId: Number(id),
        key: 'performance',
        lang: currentLang,
      }),
  });

  const { data: engines } = useQuery({
    queryKey: ['models-engines'],
    queryFn: () =>
      getModelsImages({
        modelId: Number(id),
        type: 'engine',
        lang: currentLang,
      }),
  });

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

  console.log(data?.details?.[0].image);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <ModelsDetailsHero
        breadcrumbs={[
          { href: '/', text: t('main') },
          { href: '/models', text: t('modelsLineup') },
          { href: `/models/${id}/feature`, text: `${data.model.name.toUpperCase()}` },
          { href: `/models/${id}/performance`, text: t('performance') },
        ]}
        data={data.banner}
        model={data.model}
        t={t}
        id={id}
      />
      <div className="flex flex-col items-center w-full text-center mb-20 py-8 md:my-4">
        <h2 className="text-3xl font-bold md:text-2xl sm:!text-xl">
          {data?.details?.[0].title}
        </h2>
        <div
          className="max-w-6xl my-4 md:px-3 sm:text-sm"
          dangerouslySetInnerHTML={{ __html: data?.details?.[0].text }}
        />
        {data?.details?.[0].image && (
          <Image
            src={data?.details?.[0].imagePath}
            alt="features images"
            width={1120}
            height={600}
          />
        )}
      </div>
      {engines?.length && <EnginesComponent engines={engines} t={t} />}
      {data?.details?.slice(1).map((detail: any, index: number) => (
        <div
          key={detail?.id}
          className={`flex flex-col items-center w-full text-center mb-20 py-8 md:my-4 ${
            index % 2 === 0 ? 'bg-accordionBg' : ''
          }`}
        >
          <h2 className="text-3xl font-bold md:px-3 md:text-2xl sm:!text-xl">
            {detail?.title}
          </h2>
          <div
            className="max-w-6xl my-4 md:px-3 sm:text-sm"
            dangerouslySetInnerHTML={{ __html: detail.text }}
          />
          {detail.image && (
            <Image
              src={detail?.imagePath}
              alt="features images"
              width={1120}
              height={600}
            />
          )}
        </div>
      ))}
      <ModelsDetailsNav t={t} nextLink="safety" prevLink="interior" id={id} />
      <span className="mx-auto max-w-6xl text-gray-600 mb-10 md:text-sm md:px-3 sm:!text-xs">
        {t('modelDetailsInfo')}
      </span>
    </main>
  );
}
