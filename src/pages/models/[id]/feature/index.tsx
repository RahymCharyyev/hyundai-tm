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
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function ModelsMain() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = router.locale;
  const { id } = router.query;
  const { isPending, error, data } = useQuery({
    queryKey: ['modelsDetailsPage'],
    queryFn: () =>
      getModelsDetailsPageData({
        modelId: Number(id),
        key: 'feature',
        lang: currentLang,
      }),
  });

  const { data: gallery } = useQuery({
    queryKey: ['gallery'],
    queryFn: () =>
      getModelsImages({
        modelId: Number(id),
        type: 'gallery',
      }),
  });

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

  type Images = {
    original: string;
    thumbnail: string;
  };

  const images: Images[] = (gallery || []).map((item) => ({
    original: item.imagePath,
    thumbnail: item.imagePath,
  }));

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
      <h2 className="text-center my-4 font-bold text-4xl">{t('gallery')}</h2>
      {gallery?.length !== 0 && <ImageGallery lazyLoad showNav={false} items={images} />}
      <ModelsDetailsNav
        t={t}
        nextLink="exterior"
        prevLink="feature"
        id={id}
        showPrev={false}
      />
      <span className="mx-auto max-w-6xl mb-10 text-gray-600">
        {t('modelDetailsInfo')}
      </span>
    </main>
  );
}
