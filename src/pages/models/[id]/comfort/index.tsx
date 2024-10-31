import { getModelsDetailsPageData } from '@/api/getModelsDetailsPageData';
import { ModelsDetailsHero, ModelsDetailsNav } from '@/components';
import { Loading } from '@/components/layout/Loading';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ModelsComfort() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = router.locale;
  const { id } = router.query;
  const { isPending, error, data } = useQuery({
    queryKey: ['modelsDetailsPage'],
    queryFn: () =>
      getModelsDetailsPageData({
        modelId: Number(id),
        key: 'comfort',
        lang: currentLang,
      }),
  });
  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;
  return (
    <main className='flex min-h-screen flex-col items-center justify-start'>
      <ModelsDetailsHero
        breadcrumbs={[
          { href: '/', text: t('main') },
          { href: '/models', text: t('modelsLineup') },
          {
            href: `/models/${id}/feature`,
            text: `${data?.model?.name?.toUpperCase()}`,
          },
          { href: `/models/${id}/comfort`, text: t('comfort') },
        ]}
        data={data?.banner}
        model={data?.model}
        t={t}
        id={id}
      />
      {data?.details?.length !== 0 && (
        <>
          <div className='flex flex-col items-center w-full text-center mb-20 py-8 md:my-4'>
            <h2 className='text-3xl font-bold md:px-3 md:text-2xl sm:!text-xl'>
              {data?.details?.[0].title}
            </h2>
            <div
              className='max-w-6xl my-4 md:px-3 sm:text-sm'
              dangerouslySetInnerHTML={{ __html: data?.details?.[0].text }}
            />
            {data?.details?.[0]?.image &&
              (data?.details?.[0].imagePath?.split('.').at(-1) == 'mp4' ? (
                <video
                  className='mb-10'
                  autoPlay
                  crossOrigin='anonymous'
                  width={540}
                  height={360}
                  src={data?.details?.[0].imagePath}
                  controls={false}
                />
              ) : (
                <Image
                  className='mb-10'
                  src={data?.details?.[0].imagePath}
                  alt='features images'
                  width={540}
                  height={360}
                />
              ))}
            <div className='flex flex-wrap gap-4 justify-between max-w-[1120px]'>
              {data?.details?.slice(1).map((detail: any) => (
                <div
                  key={detail?.id}
                  className='flex flex-col mb-10 max-w-[500px]'
                >
                  {detail?.image &&
                    (detail?.imagePath?.split('.').at(-1) == 'mp4' ? (
                      <video
                        autoPlay
                        crossOrigin='anonymous'
                        width={540}
                        height={360}
                        src={detail?.imagePath}
                        controls={false}
                      />
                    ) : (
                      <Image
                        src={detail?.imagePath}
                        alt='features images'
                        width={540}
                        height={360}
                      />
                    ))}
                  <h2 className='text-xl font-bold my-2 md:text-2xl sm:!text-xl'>
                    {detail?.title}
                  </h2>
                  <div
                    className='max-w-lg md:px-3 sm:text-sm'
                    dangerouslySetInnerHTML={{ __html: detail?.text }}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      <ModelsDetailsNav
        t={t}
        nextLink='characteristics'
        prevLink='safety'
        id={id}
      />
      <span className='mx-auto max-w-6xl text-gray-600 mb-10 md:text-sm md:px-3 sm:!text-xs'>
        {t('modelDetailsInfo')}
      </span>
    </main>
  );
}
