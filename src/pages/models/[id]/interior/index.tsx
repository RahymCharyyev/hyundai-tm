import {
  getModelsDetailsPageData,
  getModelsImages,
} from '@/api/getModelsDetailsPageData';
import { Loading } from '@/layout/Loading';
import { ModelsDetailsHero } from '@/shared/ui/ModelsDetailsHero';
import { ModelsDetailsNav } from '@/shared/ui/ModelsDetailsNav';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const ReactPhotoSphereViewer = dynamic(
  () => import('react-photo-sphere-viewer').then((mod) => mod.ReactPhotoSphereViewer),
  {
    ssr: false,
  },
);

export default function ModelsInterior() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { id } = router.query;
  const { isPending, error, data } = useQuery({
    queryKey: ['modelsDetailsPage'],
    queryFn: () =>
      getModelsDetailsPageData({
        modelId: Number(id),
        key: 'interior',
      }),
  });

  const { data: interior } = useQuery({
    queryKey: ['360-interior'],
    queryFn: () =>
      getModelsImages({
        modelId: Number(id),
        type: '360-interior',
      }),
  });

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

  const interiorPath = interior?.map((image) => image.imagePath.toString());

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <ModelsDetailsHero
        breadcrumbs={[
          { href: '/', text: t('main') },
          { href: '/models', text: t('modelsLineup') },
          { href: `/models/${id}/feature`, text: `${data.model.name.toUpperCase()}` },
          { href: `/models/${id}/feature`, text: t('feature') },
        ]}
        data={data.banner}
        model={data.model}
        t={t}
        id={id}
      />
      <h1 className="font-bold text-3xl md:text-xl sm:!text-lg mb-4">{t('360Review')}</h1>
      <span className="mb-4">
        {t('pressAndTurn')}, {t('mouseWheel')}
      </span>
      <ReactPhotoSphereViewer src={interiorPath![0]} height={'50vh'} width={'50%'} />
      {data.details.map((detail: any, index: number) => (
        <div
          key={detail.id}
          className={`flex flex-col items-center w-full text-center my-20 py-8  ${
            index % 2 === 0 ? 'bg-accordionBg' : ''
          }`}
        >
          <h2 className="text-3xl font-bold">{detail.title}</h2>
          <span className="text-xl">{detail.text}</span>
          <Image src={detail.imagePath} alt="features images" width={1120} height={600} />
        </div>
      ))}
      <ModelsDetailsNav t={t} nextLink="performance" prevLink="exterior" id={id} />
      <span className="mx-auto max-w-6xl mb-10">{t('modelDetailsInfo')}</span>
    </main>
  );
}
