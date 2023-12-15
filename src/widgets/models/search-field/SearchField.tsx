import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Banner } from '@/types/mainPage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';

type MainSliderProps = {
  data: Banner[];
  t: Function;
};

export const SearchField: FC<MainSliderProps> = ({ data, t }) => {
  return <></>;
};
