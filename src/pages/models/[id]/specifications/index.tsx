import { getModelsDetailsSpecificationsData } from '@/api/getModelsDetailsPageData';
import { Loading } from '@/layout/Loading';
import { ModelsDetailsHero } from '@/shared/ui/ModelsDetailsHero';
import { ModelsDetailsNav } from '@/shared/ui/ModelsDetailsNav';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DownloadIcon from '@/assets/download.png';

export default function ModelsSpecification() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = router.locale;
  const { id } = router.query;

  const { isPending, error, data } = useQuery({
    queryKey: ['modelsDetailsPage'],
    queryFn: () =>
      getModelsDetailsSpecificationsData({
        modelId: Number(id),
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
          {
            href: `/models/${id}/specifications`,
            text: `${data?.model?.name?.toUpperCase()}`,
          },
          { href: `/models/${id}/specifications`, text: t('specifications') },
        ]}
        data={data?.banner}
        model={data?.model}
        t={t}
        id={id}
      />
      <h2 className="text-xl mb-2 font-bold sm:text-base">
        {t('modelName')} {data.model.name}
      </h2>
      <table className="text-center border-2 mb-8 sm:mx-2 w-96">
        <tr className="bg-primary text-white py-3 px-3 border-2 md:py-2 md:px-2 sm:py-1 sm:px-1 sm:text-xs">
          <th className="py-3 px-3 md:py-2 md:px-2 sm:py-1 sm:px-1 border-2">
            {t('modelEquipment')}
          </th>
          <th className="py-3 px-3 md:py-2 md:px-2 sm:py-1 sm:px-1 border-2">
            {t('download')} pdf
          </th>
        </tr>
        {data.model.characteristics.map((e) => (
          <tr key={data?.model?.id} className="hover:bg-accordionBg sm:text-xs">
            <td className="border-2 py-3 md:px-2 sm:py-1">{e.name}</td>
            {e?.brochure && (
              <Link href={e?.brochure}>
                <td className="border-2 py-3 md:px-2 sm:py-1 flex gap-2 items-center justify-center">
                  <Image src={DownloadIcon} alt="download" />
                  {t('download')}
                </td>
              </Link>
            )}
          </tr>
        ))}
      </table>
      <ModelsDetailsNav
        t={t}
        nextLink="exterior"
        prevLink="feature"
        id={id}
        showPrev={true}
      />
      <span className="mx-auto max-w-6xl mb-10 text-gray-600 md:text-sm md:px-3 sm:!text-xs">
        {t('modelDetailsInfo2')}
      </span>
    </main>
  );
}
