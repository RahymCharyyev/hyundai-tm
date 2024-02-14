import { DetailedNewsHistory } from '@/types/historyPage';
import dayjs from 'dayjs';
import Image from 'next/image';
import { FC } from 'react';
import ViewIcon from '@/assets/view_icon.svg';

type DetailedNewsProps = {
  detailedNews: DetailedNewsHistory;
  t: Function;
};
export const DetailedNews: FC<DetailedNewsProps> = ({ t, detailedNews }) => {
  return (
    <div className="flex flex-wrap gap-12 justify-between max-w-[1000px]">
      <div className="flex flex-col px-10 ">
        <Image
          className="mb-2"
          width={1000}
          height={500}
          src={detailedNews.data.imagePath}
          alt={detailedNews.data.title}
        />
        <div className="flex mb-10 text-linkColor justify-between">
          <span>{dayjs(detailedNews.data.createdAt).format('DD.MM.YYYY')}</span>
          <span className="flex gap-2 items-center">
            <Image src={ViewIcon} alt="view count" width={17} height={17} />
            {detailedNews.data.viewCount}
          </span>
        </div>
        <div className="ql">
          <div dangerouslySetInnerHTML={{ __html: detailedNews.data.description }} />
        </div>
      </div>
    </div>
  );
};
