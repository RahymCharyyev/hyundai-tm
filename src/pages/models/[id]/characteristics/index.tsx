import {
  getModelsCharactericstics,
  getModelsDetailsPageData,
} from '@/api/getModelsDetailsPageData';
import { ModelsDetailsHero, ModelsDetailsNav } from '@/components';
import { Loading } from '@/components/layout/Loading';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

export default function ModelsCharacteristics() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = router.locale;
  const { id } = router.query;
  const [selectedConfigId, setSelectedConfigId] = useState(1);
  const { isPending, error, data } = useQuery({
    queryKey: ['modelsDetailsPage'],
    queryFn: () =>
      getModelsDetailsPageData({
        modelId: Number(id),
        key: 'safety',
        lang: currentLang,
      }),
  });
  const handleConfigChange = (event: any) => {
    setSelectedConfigId(event?.target?.value);
  };
  const { data: characteristicsData } = useQuery({
    queryKey: ['modelsCharacteristics', selectedConfigId],
    queryFn: () =>
      getModelsCharactericstics({
        modelId: Number(id),
        configurationId: selectedConfigId,
        lang: currentLang,
      }),
  });

  useEffect(() => {
    if (
      characteristicsData &&
      characteristicsData.list.length > 0 &&
      selectedConfigId === 1
    )
      setSelectedConfigId(characteristicsData.list[0].id);
  }, [characteristicsData, selectedConfigId]);

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
          { href: `/models/${id}/characteristics`, text: t('characteristics') },
        ]}
        data={data?.banner}
        model={data?.model}
        t={t}
        id={id}
      />
      <h1 className='font-bold text-3xl my-4 md:px-3 md:text-2xl sm:!text-xl'>
        {t('characteristics')}
      </h1>
      <div className='max-w-6xl mx-auto'>
        {characteristicsData?.list?.length !== 0 && (
          <div className='flex gap-2 items-center sm:flex-col'>
            <span>{t('chooseTrip')}</span>
            <select
              className='w-72 h-10 bg-accordionBg my-2 mx-2 sm:text-sm sm:px-3 border-black active:border-black'
              onChange={handleConfigChange}
              value={selectedConfigId}
            >
              {characteristicsData?.list?.map((complect) => (
                <option key={complect?.id} value={complect?.id}>
                  {complect?.name}
                </option>
              ))}
            </select>
          </div>
        )}
        {characteristicsData?.details?.subs.map((element) => (
          <div
            key={element?.id}
            className='flex flex-col items-center justify-center'
          >
            <span className='text-2xl font-bold my-8 sm:text-xl'>
              {element.name}
            </span>
            <table className='border-2 mx-3'>
              {element?.details?.map((item, itemIndex) => (
                <Fragment key={++itemIndex}>
                  <thead className='bg-primary text-white'>
                    <tr>
                      <th
                        colSpan={2}
                        className='py-3 px-3 md:py-2 md:px-2 sm:py-1 sm:px-1 md:text-sm sm:text-xs'
                      >
                        {item?.name}
                      </th>
                    </tr>
                  </thead>
                  {item?.values?.map((value) => (
                    <tbody key={value.id} className='border-2'>
                      <tr>
                        <td className='bg-accordionBg py-5 px-16 md:py-2 md:px-2 sm:py-1 sm:px-1 md:text-sm sm:text-xs'>
                          {value?.name}
                        </td>
                        <td className='py-5 px-16 md:py-2 md:px-2 sm:py-1 sm:px-1 md:text-sm sm:text-xs'>
                          {value?.value}
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </Fragment>
              ))}
            </table>
          </div>
        ))}
      </div>
      <ModelsDetailsNav
        t={t}
        nextLink='characteristics'
        prevLink='comfort'
        showNext={false}
        id={id}
      />
      <span className='mx-auto max-w-6xl text-gray-600 mb-10 md:text-sm md:px-3 sm:!text-xs'>
        {t('modelDetailsInfo')}
      </span>
    </main>
  );
}
