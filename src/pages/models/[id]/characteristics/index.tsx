import {
  getModelsCharactericstics,
  getModelsDetailsPageData,
} from '@/api/getModelsDetailsPageData';
import { Loading } from '@/layout/Loading';
import { ModelsDetailsHero } from '@/shared/ui/ModelsDetailsHero';
import { ModelsDetailsNav } from '@/shared/ui/ModelsDetailsNav';
import { Option, Select } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export default function ModelsCharacteristics() {
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
  const { data: characteristicsData } = useQuery({
    queryKey: ['modelsCharacteristics'],
    queryFn: () =>
      getModelsCharactericstics({
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
          { href: `/models/${id}/feature`, text: t('feature') },
        ]}
        data={data.banner}
        model={data.model}
        t={t}
        id={id}
      />
      <h1 className="font-bold text-3xl my-4">{t('characteristics')}</h1>
      <div className="max-w-6xl mx-auto">
        <Select label={t('chooseTrip')}>
          {characteristicsData?.list?.map((complect) => (
            <Option key={complect.id}>{complect.name}</Option>
          ))}
        </Select>
        {characteristicsData?.details.subs.map((element) => (
          <div key={element.id} className="flex flex-col  items-center justify-center">
            <span className="text-2xl font-bold my-8">{element.name}</span>
            <table className="border-2">
              {element.details.map((item) => (
                <>
                  <thead className="bg-primary text-white" key={item.id}>
                    <th colSpan={2} className="py-3 px-3">
                      {item.name}
                    </th>
                  </thead>
                  {item.values.map((value) => (
                    <tbody key={value.id} className="border-2">
                      <td className="bg-accordionBg py-5 px-16">{value.name}</td>
                      <td className="py-5 px-16">{value.value}</td>
                    </tbody>
                  ))}
                </>
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
