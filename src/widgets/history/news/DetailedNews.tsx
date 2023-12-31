import { DetailedNewsHistory } from '@/types/historyPage';
import dayjs from 'dayjs';
import Image from 'next/image';
import { FC } from 'react';

type DetailedNewsProps = {
  detailedNews: DetailedNewsHistory;
  t: Function;
};
export const DetailedNews: FC<DetailedNewsProps> = ({ t, detailedNews }) => {
  return (
    <div className="flex flex-wrap gap-12 justify-between max-w-[1000px]">
      <div className="flex flex-col">
        <Image
          className="mb-2"
          width={1000}
          height={500}
          src={detailedNews.data.imagePath}
          alt={detailedNews.data.title}
        />
        <span className="mb-10 text-linkColor">
          {dayjs(detailedNews.data.createdAt).format('DD.MM.YYYY')}
        </span>
        <div>{detailedNews.data.description}</div>
      </div>
    </div>
  );
};
