import { FC } from 'react';
import Image from 'next/image';
import { Banner } from '@/types/mainPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';
import { ButtonLink } from '@/shared/ui';

type MainSliderProps = {
  data: Banner[];
  t: Function;
};

export const MainSlider: FC<MainSliderProps> = ({ data, t }) => {
  return (
    <>
      <Swiper
        className="banner"
        modules={[Navigation, Pagination, Autoplay, A11y]}
        navigation
        a11y={{ enabled: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        keyboard={{ enabled: true, pageUpDown: true }}
        grabCursor={true}
        loop={true}
        slidesPerView={1}
      >
        {data.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div>
              <Image
                src={banner.imageRuPath}
                alt={banner.image_ru}
                width={1860}
                height={720}
                priority
              />
              <ButtonLink
                className="bg-primary text-white py-4 px-5 absolute bottom-6 right-20 hover:underline"
                target="_blank"
                href={banner.link}
              >
                {t('readMore')}
              </ButtonLink>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
