import { getMainPageData } from '@/api/getMainPageData';
import { Loading } from '@/layout/Loading';
import { CarsSlider } from '@/widgets/home/cars-slider/CarsSlider';
import { MainSlider } from '@/widgets/home/main-slider/MainSlider';
import { NewsSlider } from '@/widgets/home/news-slider/NewsSlider';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

export default function Home() {
  const { t } = useTranslation('common');
  const { isPending, error, data } = useQuery({
    queryKey: ['mainPage'],
    queryFn: () => getMainPageData(),
  });

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <MainSlider data={data.banners} t={t} />
      <CarsSlider data={data.models} t={t} />
      <NewsSlider data={data.news} t={t} />
      <div className="flex h-[400px] w-full">
        <Link
          href="/history/media"
          className="h-full w-full bg-cover text-white text-5xl font-bold bg-[url('/media_bg.webp')] flex items-center justify-center hover:underline"
        >
          {t('media')}
        </Link>
        <Link
          href="/stock"
          className="h-full w-full bg-cover text-white text-5xl font-bold bg-[url('/sales_bg.webp')] flex items-center justify-center hover:underline"
        >
          {t('stock')}
        </Link>
      </div>
    </main>
  );
}
