import { getModelsDetailsPageData } from '@/api/getModelsDetailsPageData';
import { getModelsImages360 } from '@/api/getModelsImages360';
import { Loading } from '@/layout/Loading';
import { ModelsDetailsHero } from '@/shared/ui/ModelsDetailsHero';
import { ModelsDetailsNav } from '@/shared/ui/ModelsDetailsNav';
import { Image360 } from '@/types/models360';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { React360Viewer } from 'react-360-product-viewer';

export default function ModelsExterior() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = router.locale;
  const { id } = router.query;
  const [images, setImages] = useState<Image360>();
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

  useEffect(() => {
    setImages(models360);
  }, [models360]);

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
      {images !== undefined && (
        <React360Viewer
          showRotationIconOnStartup={true}
          width={800}
          imageFilenamePrefix={images?.prefix}
          imagesBaseUrl="http://hyundai.com.tm/public"
          imagesCount={images?.imageCount - 1}
          imagesFiletype={images?.fileType}
          mouseDragSpeed={20}
        />
      )}
      {data.details.map((detail: any, index: number) => (
        <div
          key={detail.id}
          className={`flex flex-col items-center w-full text-center mb-20 py-8 md:my-4 ${
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
          {detail.image &&
            (detail.imagePath.split('.').at(-1) == 'mp4' ? (
              <video
                autoPlay
                crossOrigin="anonymous"
                className="!inline-block pt-6 pb-3"
                width="1120"
                height="600"
                src={detail.imagePath}
                controls={false}
              />
            ) : (
              <Image
                src={detail.imagePath}
                alt="features images"
                width={1120}
                height={600}
              />
            ))}
        </div>
      ))}
      <ModelsDetailsNav t={t} nextLink="interior" prevLink="feature" id={id} />
      <span className="mx-auto max-w-6xl mb-10 text-gray-600 md:text-sm md:px-3 sm:!text-xs">
        {t('modelDetailsInfo')}
      </span>
    </main>
  );
}
