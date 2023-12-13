import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import leaf from '@/images/leaf.png';
import clouds from '@/images/clouds.jpg';

import 'swiper/css';
import Image from 'next/image';

export const MainSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image src={clouds} alt="" width={50} height={100} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={leaf} alt="" width={50} height={100} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={clouds} alt="" width={50} height={100} />{' '}
      </SwiperSlide>
      <SwiperSlide>
        <Image src={leaf} alt="" width={50} height={100} />
      </SwiperSlide>
    </Swiper>
  );
};
