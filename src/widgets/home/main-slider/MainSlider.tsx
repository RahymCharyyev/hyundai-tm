import { FC } from 'react';
import { Banner } from '@/types/banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Keyboard, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/a11y';
import Image from 'next/image';
import Link from 'next/link';

type MainSliderProps = {
  data: Banner[];
  t: Function;
};

export const MainSlider: FC<MainSliderProps> = ({ data, t }) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard, A11y]}
        navigation
        a11y={{ enabled: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        keyboard={{ enabled: true, pageUpDown: true }}
        grabCursor={true}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {data.map((banner) => (
          <div key={banner.id}>
            <SwiperSlide>
              <div>
                <Image
                  src={banner.imageRuPath}
                  alt={banner.image_ru}
                  width={1860}
                  height={720}
                />
                <Link
                  target="_blank"
                  className="bg-primary text-white py-4 px-5 absolute bottom-6 right-20 hover:underline"
                  href={banner.link}
                >
                  {t('knowMore')}
                </Link>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
};
