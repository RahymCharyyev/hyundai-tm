import { MainSlider } from '@/widgets/home/main-slider/MainSlider';
import { CarsSlider } from '@/widgets/home/cars-slider/CarsSlider';
import { useQuery } from '@tanstack/react-query';
import { getBanners } from '@/api/getBanners';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('common');
  const { isPending, error, data } = useQuery({
    queryKey: ['banners'],
    queryFn: () => getBanners(),
  });

  if (isPending) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <MainSlider data={data} t={t} />
      <CarsSlider />
    </main>
  );
}
