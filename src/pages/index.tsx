import useTranslation from 'next-translate/useTranslation';
import { MainSlider } from '@/widgets/home/main-slider/MainSlider';
import { CarsSlider } from '@/widgets/home/cars-slider/CarsSlider';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1>{t('title')}</h1>
      <MainSlider />
      <CarsSlider />
    </main>
  );
}
