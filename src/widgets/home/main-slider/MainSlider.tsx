import { FC } from 'react';
import { Banner } from '@/types/banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

type MainSliderProps = {
  data: Banner[];
};

export const MainSlider: FC<MainSliderProps> = ({ data }) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        {data.map((banner) => (
          <div key={banner.id}>
            <SwiperSlide>
              <Image
                src={banner.imageRuPath}
                alt={banner.image_ru}
                width={500}
                height={300}
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
};
