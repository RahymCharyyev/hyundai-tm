import { NewsHistory } from '@/types/historyPage';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type NewsListProps = {
  data: NewsHistory[] | undefined;
  t: Function;
  selectedNewsType: string | null;
};
export const NewsList: FC<NewsListProps> = ({ t, data, selectedNewsType }) => {
  const filteredNews = selectedNewsType
    ? data?.filter((news) => news.type === selectedNewsType)
    : data;
  return (
    <div className="flex flex-wrap gap-12 justify-center max-w-[1000px] lg:max-w-2xl">
      {filteredNews?.map((news) => (
        <Link
          key={news.id}
          className="flex flex-col gap-3 hover:scale-105"
          href={`/history/news/${news.id}`}
        >
          <Image src={news.imagePath} alt={news.title} width={300} height={150} />
          <span className="text-sm text-linkColor">
            {dayjs(news.createdAt).format('DD.MM.YYYY')}
          </span>
          <h2 className="w-[280px] font-bold text-sm">{news.title}</h2>
        </Link>
      ))}
    </div>
  );
};
