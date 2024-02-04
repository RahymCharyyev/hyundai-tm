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
      <div className="flex flex-col items-center w-full text-center mb-20 py-8 ">
        <h2 className="text-3xl font-bold"> {data.details[0].title}</h2>
        <div
          className="max-w-6xl my-4"
          dangerouslySetInnerHTML={{ __html: data.details[0].text }}
        />
        <Image
          src={data.details[0].imagePath}
          alt="features images"
          width={1120}
          height={600}
        />
      </div>
      <EnginesComponent engines={engines} t={t} />
      {data.details.slice(1).map((detail: any, index: number) => (
        <div
          key={detail.id}
          className={`flex flex-col items-center w-full text-center mb-20 py-8 ${
            index % 2 === 0 ? 'bg-accordionBg' : ''
          }`}
        >
          <h2 className="text-3xl font-bold">{detail.title}</h2>
          <div
            className="max-w-6xl my-4"
            dangerouslySetInnerHTML={{ __html: detail.text }}
          />
          <Image src={detail.imagePath} alt="features images" width={1120} height={600} />
        </div>
      ))}
      <ModelsDetailsNav t={t} nextLink="safety" prevLink="interior" id={id} />
      <span className="mx-auto max-w-6xl mb-10 text-gray-600">
        {t('modelDetailsInfo')}
      </span>
    </main>
  );
}
