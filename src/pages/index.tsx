import { MainSlider } from '@/widgets/home/main-slider/MainSlider';
import { CarsSlider } from '@/widgets/home/cars-slider/CarsSlider';
import { useQuery } from '@tanstack/react-query';
import { getMainPageData } from '@/api/getMainPageData';
import useTranslation from 'next-translate/useTranslation';
import { NewsSlider } from '@/widgets/home/news-slider/NewsSlider';

export default function Home() {
  const { t } = useTranslation('common');
  const { isPending, error, data } = useQuery({
    queryKey: ['mainPage'],
    queryFn: () => getMainPageData(),
  });

  if (isPending) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <MainSlider data={data.banners} t={t} />
      <CarsSlider data={data.models} t={t} />
      <NewsSlider data={data.news} t={t} />
    </main>
  );
}
