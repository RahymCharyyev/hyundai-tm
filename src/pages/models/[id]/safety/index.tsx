import {
  getModelsDetailsPageData,
  getModelsImages,
} from '@/api/getModelsDetailsPageData';
import { Loading } from '@/layout/Loading';
import { ModelsDetailsHero, ModelsDetailsNav } from '@/shared/ui';
import SmartSenseComponent from '@/shared/ui/SmartSense';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ModelsSafety() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { id } = router.query;
  const currentLang = router.locale;
  const { isPending, error, data } = useQuery({
    queryKey: ['modelsDetailsPage'],
    queryFn: () =>
      getModelsDetailsPageData({
        modelId: Number(id),
        key: 'safety',
        lang: currentLang,
      }),
  });

  const { data: gifs } = useQuery({
    queryKey: ['models-engines'],
    queryFn: () =>
      getModelsImages({
        modelId: Number(id),
        type: 'smart-sense',
        lang: currentLang,
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
          { href: `/models/${id}/feature`, text: `${data.model.name.toUpperCase()}` },
          { href: `/models/${id}/safety`, text: t('safety') },
        ]}
        data={data.banner}
        model={data.model}
        t={t}
        id={id}
      />
      <h1 className="text-4xl font-bold md:px-3 md:text-2xl sm:!text-xl mb-2">
        Hyundai SmartSense
      </h1>
      {gifs?.length !== 0 && <SmartSenseComponent gifs={gifs} t={t} />}
      {data?.details?.map((detail: any, index: number) => (
        <div
          key={detail?.id}
          className={`flex flex-col items-center w-full text-center mb-20 py-8 ${
            index % 2 === 0 ? 'bg-accordionBg' : ''
          }`}
        >
          <h2 className="text-3xl font-bold md:px-3 md:text-2xl sm:!text-xl">
            {detail.title}
          </h2>
          <div
            className="max-w-6xl my-4 md:px-3 sm:text-sm"
            dangerouslySetInnerHTML={{ __html: detail?.text }}
          />
          <Image
            src={detail?.imagePath}
            alt="features images"
            width={1120}
            height={600}
          />
        </div>
      ))}
      <ModelsDetailsNav t={t} nextLink="comfort" prevLink="performance" id={id} />
      <span className="mx-auto max-w-6xl text-gray-600 mb-10 md:text-sm md:px-3 sm:!text-xs">
        {t('modelDetailsInfo')}
      </span>
    </main>
  );
}
