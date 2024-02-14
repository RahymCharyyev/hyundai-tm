import {
  getModelsDetailsPageData,
  getModelsImages,
} from '@/api/getModelsDetailsPageData';
import { Loading } from '@/layout/Loading';
import { ModelsDetailsHero } from '@/shared/ui/ModelsDetailsHero';
import { ModelsDetailsNav } from '@/shared/ui/ModelsDetailsNav';
import '@photo-sphere-viewer/core/index.css';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
const ReactPhotoSphereViewer = dynamic(
  () => import('react-photo-sphere-viewer').then((mod) => mod.ReactPhotoSphereViewer),
  {
    ssr: false,
  },
);

export default function ModelsInterior() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = router.locale;
  const { id } = router.query;
  const { isPending, error, data } = useQuery({
    queryKey: ['modelsDetailsPage'],
    queryFn: () =>
      getModelsDetailsPageData({
        modelId: Number(id),
        key: 'interior',
        lang: currentLang,
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
  const interiorPath = interior?.map((image) => image.imagePath.toString());

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <ModelsDetailsHero
        breadcrumbs={[
          { href: '/', text: t('main') },
          { href: '/models', text: t('modelsLineup') },
          { href: `/models/${id}/feature`, text: `${data.model.name.toUpperCase()}` },
          { href: `/models/${id}/interior`, text: t('interior') },
        ]}
        data={data.banner}
        model={data.model}
        t={t}
        id={id}
      />
      <h1 className="font-bold text-3xl md:text-xl sm:!text-lg mb-4">{t('360Review')}</h1>
      <span className="mb-4 text-center">
        {t('pressAndTurn')}, {t('mouseWheel')}
      </span>
      {interiorPath !== undefined && (
        <ReactPhotoSphereViewer
          src={interiorPath.toString()}
          height={'50vh'}
          width={'50%'}
        />
      )}
      {data.details.map((detail: any, index: number) => (
        <div
          key={detail.id}
          className={`flex flex-col items-center w-full text-center my-20 py-8 md:my-4  ${
            index % 2 === 0 ? 'bg-accordionBg' : ''
          }`}
        >
          <h2 className="text-3xl font-bold md:px-3 md:text-2xl sm:!text-xl">
            {detail.title}
          </h2>
          <div
            className="max-w-6xl my-4 md:px-3 sm:text-sm"
            dangerouslySetInnerHTML={{ __html: detail.text }}
          />
          <Image src={detail.imagePath} alt="features images" width={1120} height={600} />
        </div>
      ))}
      <ModelsDetailsNav t={t} nextLink="performance" prevLink="exterior" id={id} />
      <span className="mx-auto max-w-6xl  text-gray-600 mb-10 md:text-sm md:px-3 sm:!text-xs">
        {t('modelDetailsInfo')}
      </span>
    </main>
  );
}
