import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Banner } from '@/types/mainPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';

type MainSliderProps = {
  data: Banner[];
  t: Function;
};

export const MainSlider: FC<MainSliderProps> = ({ data, t }) => {
  return (
    <>
      <Swiper
        className='banner'
        modules={[Navigation, Pagination, Autoplay, A11y]}
        navigation
        a11y={{ enabled: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        keyboard={{ enabled: true, pageUpDown: true }}
        grabCursor={true}
        loop={true}
        slidesPerView={1}
        lazyPreloadPrevNext={0}
      >
        {data.map((banner, index) => (
          <SwiperSlide key={banner.id}>
            <div className='relative h-[680px] w-full lg:h-[160px]'>
              <Image
                className='object-cover'
                src={banner.imageRuPath}
                alt={banner.image_ru}
                fill
                priority={index === 0}
                loading={index === 0 ? undefined : 'lazy'}
                sizes='(max-width: 768px) 100vw, 1860px'
              />
              <Link
                className='bg-primary text-white py-4 px-5 absolute bottom-6 right-20 hover:underline lg:text-sm lg:py-2 lg:px-3 md:!py-1 md:!px-2 sm:!text-xs sm:right-6 sm:bottom-2'
                target='_blank'
                href={banner.link}
              >
                {t('knowMore')}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
