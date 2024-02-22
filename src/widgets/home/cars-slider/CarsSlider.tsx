import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Model } from '@/types/mainPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';

type CarsSliderProps = {
  data: Model[];
  t: Function;
};

export const CarsSlider: FC<CarsSliderProps> = ({ data, t }) => {
  return (
    <>
      <h2 className="font-bold text-5xl mb-10 lg:text-3xl sm:mb-0">{t('models')}</h2>
      <Swiper
        className="model"
        modules={[Navigation, Pagination, Autoplay, A11y]}
        navigation
        a11y={{ enabled: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        keyboard={{ enabled: true, pageUpDown: true }}
        grabCursor={true}
        loop={true}
        slidesPerView={3}
        centeredSlides={true}
      >
        {data.map((model) => (
          <SwiperSlide key={model.id}>
            <Link
              href={`/models/${model.id}/feature`}
              className="mb-20 mt-5 lg:text-xl md:!text-xs sm:mb-10"
            >
              <Image
                className="lg:w-72"
                src={model.imagePath}
                alt={model.name}
                width={1860}
                height={100}
              />
              <h2 className="font-bold text-3xl hover:underline uppercase">
                {model.name}
              </h2>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link
        className="bg-primary text-white py-4 px-5 hover:underline mb-20 lg:py-2 lg:px-3 lg:text-sm"
        href="/models"
      >
        {t('moreModels')}
      </Link>
      <hr className="w-full h-px bg-thirdColor mb-8"></hr>
    </>
  );
};
