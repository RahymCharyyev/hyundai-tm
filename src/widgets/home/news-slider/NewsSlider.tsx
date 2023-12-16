import { FC } from 'react';
import Link from 'next/link';
import { News } from '@/types/mainPage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';
import { getCurrentDate } from '@/shared/utils';
import { ButtonLink } from '@/shared/ui';

type NewsSliderProps = {
  data: News[];
  t: Function;
};

export const NewsSlider: FC<NewsSliderProps> = ({ data, t }) => {
  return (
    <>
      <h2 className="font-bold text-5xl mb-10">{t('latestNews')}</h2>
      <Swiper
        className="news"
        modules={[Navigation, Pagination, Autoplay, A11y]}
        navigation
        a11y={{ enabled: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        keyboard={{ enabled: true, pageUpDown: true }}
        grabCursor={true}
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
      >
        {data.map((news) => (
          <SwiperSlide key={news.id}>
            <div className="flex flex-col gap-10 items-center">
              <div>
                {news.type == 'global' ? (
                  <span>
                    {t('global')} | {getCurrentDate(news.createdAt)}
                  </span>
                ) : (
                  <span>
                    {t('local')} | {getCurrentDate(news.createdAt)}
                  </span>
                )}
              </div>
              <Link
                target="_blank"
                href={`/news/${news.id}`}
                className="font-bold text-3xl hover:underline uppercase"
              >
                {news.title}
              </Link>
              <ButtonLink
                target="_blank"
                className="bg-primary text-white py-4 px-5 hover:underline w-48 mb-10"
                href="/news"
              >
                {t('moreNews')}
              </ButtonLink>
            </div>
          </SwiperSlide>
        ))}
        <hr className="w-full h-px bg-thirdColor "></hr>
      </Swiper>
    </>
  );
};
