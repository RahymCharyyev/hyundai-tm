import {
  getModelsCharactericstics,
  getModelsDetailsPageData,
} from '@/api/getModelsDetailsPageData';
import { Loading } from '@/layout/Loading';
import { ModelsDetailsHero } from '@/shared/ui/ModelsDetailsHero';
import { ModelsDetailsNav } from '@/shared/ui/ModelsDetailsNav';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';

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

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <ModelsDetailsHero
        breadcrumbs={[
          { href: '/', text: t('main') },
          { href: '/models', text: t('modelsLineup') },
          { href: `/models/${id}/feature`, text: `${data.model.name.toUpperCase()}` },
          { href: `/models/${id}/characteristics`, text: t('characteristics') },
        ]}
        data={data.banner}
        model={data.model}
        t={t}
        id={id}
      />
      <h1 className="font-bold text-3xl my-4">{t('characteristics')}</h1>
      <div className="max-w-6xl mx-auto">
        {characteristicsData?.list.length !== 0 && (
          <div className="flex gap-2 items-center">
            <span>{t('chooseTrip')}</span>
            <select
              className="w-72 h-10 bg-accordionBg my-2 mx-2 border-black active:border-black"
              onChange={handleConfigChange}
              value={selectedConfigId}
            >
              {characteristicsData?.list?.map((complect) => (
                <option key={complect.id} value={complect.id}>
                  {complect.name}
                </option>
              ))}
            </select>
          </div>
        )}
        {characteristicsData?.details.subs.map((element) => (
          <div key={element.id} className="flex flex-col  items-center justify-center">
            <span className="text-2xl font-bold my-8">{element.name}</span>
            <table className="border-2 max-w-xl">
              {element.details.map((item, itemIndex) => (
                <Fragment key={++itemIndex}>
                  <thead className="bg-primary text-white">
                    <tr>
                      <th colSpan={2} className="py-3 px-3">
                        {item.name}
                      </th>
                    </tr>
                  </thead>
                  {item.values.map((value) => (
                    <tbody key={value.id} className="border-2">
                      <tr>
                        <td className="bg-accordionBg py-5 px-16">{value.name}</td>
                        <td className="py-5 px-16">{value.value}</td>
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
        nextLink="characteristics"
        prevLink="comfort"
        showNext={false}
        id={id}
      />
      <span className="mx-auto max-w-6xl mb-10 text-gray-600">
        {t('modelDetailsInfo')}
      </span>
    </main>
  );
}
