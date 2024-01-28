import { getModelsDetailsPageData } from '@/api/getModelsDetailsPageData';
import { Loading } from '@/layout/Loading';
import { ModelsDetailsHero } from '@/shared/ui/ModelsDetailsHero';
import { ModelsDetailsNav } from '@/shared/ui/ModelsDetailsNav';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ModelsComfort() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { id } = router.query;
  const { isPending, error, data } = useQuery({
    queryKey: ['modelsDetailsPage'],
    queryFn: () =>
      getModelsDetailsPageData({
        modelId: Number(id),
        key: 'safety',
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
          { href: `/models/${id}/feature`, text: 'modelName' },
          { href: `/models/${id}/safety`, text: t('safety') },
        ]}
        data={data.banner}
        t={t}
        id={id}
      />
      <div className="flex flex-col items-center w-full text-center mb-20 py-8">
        <h2 className="text-3xl font-bold">{data.details[0].title}</h2>
        <span className="text-xl">{data.details[0].text}</span>
        <Image
          className="mb-10"
          src={data.details[0].imagePath}
          alt="features images"
          width={1120}
          height={600}
        />
        <div className="flex flex-wrap justify-between max-w-[1120px]">
          {data.details.slice(1).map((detail: any) => (
            <div key={detail.id} className="flex flex-col mb-10">
              <Image
                src={detail.imagePath}
                alt="features images"
                width={540}
                height={360}
              />
              <h2 className="text-xl font-bold">{detail.title}</h2>
              <span>{detail.text}</span>
            </div>
          ))}
        </div>
      </div>
      <ModelsDetailsNav t={t} nextLink="characteristics" prevLink="safety" id={id} />
      <span className="mx-auto max-w-6xl mb-10 text-gray-600">
        {t('modelDetailsInfo')}
      </span>
    </main>
  );
}
