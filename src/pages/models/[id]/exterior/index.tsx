import {
  getModelsDetailsPageData,
  getModelsImages,
} from '@/api/getModelsDetailsPageData';
import { getModelsImages360 } from '@/api/getModelsImages360';
import { Loading } from '@/layout/Loading';
import { ModelsDetailsHero } from '@/shared/ui/ModelsDetailsHero';
import { ModelsDetailsNav } from '@/shared/ui/ModelsDetailsNav';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { React360Viewer } from 'react-360-product-viewer';

export default function ModelsExterior() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = router.locale;
  const { id } = router.query;
  const { isPending, error, data } = useQuery({
    queryKey: ['modelsDetailsPage'],
    queryFn: () =>
      getModelsDetailsPageData({
        modelId: Number(id),
        key: 'exterior',
        lang: currentLang,
      }),
  });

  const { data: models360 } = useQuery({
    queryKey: ['models-360'],
    queryFn: () =>
      getModelsImages360({
        modelId: Number(id),
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
          { href: `/models/${id}/exterior`, text: t('exterior') },
        ]}
        data={data.banner}
        model={data.model}
        t={t}
        id={id}
      />
      <h1 className="font-bold text-3xl md:text-xl sm:!text-lg mb-4">{t('360Review')}</h1>
      <span className="mb-4">{t('pressAndTurn')}</span>
      {models360 !== undefined && (
        <React360Viewer
          width={800}
          imageFilenamePrefix={models360?.prefix}
          imagesBaseUrl="http://hyundai.com.tm/public"
          imagesCount={35}
          imagesFiletype={models360.fileType}
          mouseDragSpeed={20}
        />
      )}
      {data.details.map((detail: any, index: number) => (
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
      <ModelsDetailsNav t={t} nextLink="interior" prevLink="feature" id={id} />
      <span className="mx-auto max-w-6xl mb-10 text-gray-600">
        {t('modelDetailsInfo')}
      </span>
    </main>
  );
}
