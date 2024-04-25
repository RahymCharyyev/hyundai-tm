import { getModelsDetailsPageData } from '@/api/getModelsDetailsPageData';
import { getModelsImages360 } from '@/api/getModelsImages360';
import { Loading } from '@/layout/Loading';
import { ModelsDetailsHero } from '@/shared/ui/ModelsDetailsHero';
import { ModelsDetailsNav } from '@/shared/ui/ModelsDetailsNav';
import CloudImageView from '@/widgets/models/models-360/CloudImageView';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ModelsExterior() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = router.locale;
  const { id } = router.query;
  const { isPending, error, data } = useQuery({
    queryKey: ['modelsDetailsPage', id],
    queryFn: () =>
      getModelsDetailsPageData({
        modelId: Number(id),
        key: 'exterior',
        lang: currentLang,
      }),
  });

  const { data: models360 } = useQuery({
    queryKey: ['models-360', id],
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
          { href: `/models/${id}/feature`, text: `${data?.model?.name?.toUpperCase()}` },
          { href: `/models/${id}/exterior`, text: t('exterior') },
        ]}
        data={data?.banner}
        model={data?.model}
        t={t}
        id={id}
      />
      {models360 !== undefined && (
        <>
          <h1 className="font-bold text-3xl md:text-xl sm:!text-lg mb-4">
            {t('360Review')}
          </h1>
          <span className="mb-4">{t('pressAndTurn')}</span>
          <div className="w-[1000px] h-[500px] 2xl:w-[800px] 2xl:h-[400px] !lg:w-[600px] !lg:h-[250px] md:hidden">
            <CloudImageView
              folder="http://hyundai.com.tm/public/"
              prefix={models360?.prefix}
              imageCount={models360?.imageCount - 1}
              fileType={models360?.fileType}
            />
          </div>
          <div className="hidden md:block md:w-[450px] md:h-[300px] !sm:w-[250px] sm:h-[250px] xs:hidden">
            <CloudImageView
              folder="http://hyundai.com.tm/public/"
              prefix={models360?.prefix}
              imageCount={models360?.imageCount - 1}
              fileType={models360?.fileType}
            />
          </div>
          <div className="hidden xs:block xs:w-[250px] xs:h-[200px]">
            <CloudImageView
              folder="http://hyundai.com.tm/public/"
              prefix={models360?.prefix}
              imageCount={models360?.imageCount - 1}
              fileType={models360?.fileType}
            />
          </div>
        </>
      )}
      {data?.details?.map((detail: any, index: number) => (
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
            dangerouslySetInnerHTML={{ __html: detail?.text }}
          />
          {detail?.image &&
            (detail?.imagePath.split('.').at(-1) == 'mp4' ? (
              <video
                autoPlay
                crossOrigin="anonymous"
                width="1120"
                height="600"
                src={detail?.imagePath}
                controls={false}
              />
            ) : (
              <Image
                src={detail?.imagePath}
                alt="features images"
                width={1120}
                height={600}
              />
            ))}
        </div>
      ))}
      <ModelsDetailsNav t={t} nextLink="interior" prevLink="specifications" id={id} />
      <span className="mx-auto max-w-6xl mb-10 text-gray-600 md:text-sm md:px-3 sm:!text-xs">
        {t('modelDetailsInfo')}
      </span>
    </main>
  );
}
