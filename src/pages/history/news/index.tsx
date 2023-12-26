import { getNewsData } from '@/api/getHistoryPageData';
import { Loading } from '@/layout/Loading';
import { useQueryParams } from '@/shared/hooks/useQueryParams';
import { NavLink } from '@/shared/ui/NavLink';
import { HistoryHero } from '@/widgets/history/history-hero/HistoryHero';
import { NewsList } from '@/widgets/history/news/NewsList';
import { Button, ButtonGroup } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { KeyboardEvent, useState } from 'react';

export default function NewsPage() {
  const { t } = useTranslation('common');
  const [searchQuery, setSearchQuery] = useState('');
  const { query, changeParams } = useQueryParams();
  const { pathname } = useRouter();
  const [selectedNewsType, setSelectedNewsType] = useState<string | null>('local');

  const { isPending, error, data } = useQuery({
    queryKey: ['historyPage'],
    queryFn: () => getNewsData(),
  });

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);
  };
  const handleSearchKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      changeParams({ search: searchQuery });
    }
  };
  const handleNewsTypeChange = (newsType: string) => {
    setSelectedNewsType(newsType);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <HistoryHero
        showSearch={false}
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        handleSearchKeyPress={handleSearchKeyPress}
        title={t('news')}
        breadcrumbs={[
          { href: '/', text: t('main') },
          { href: '/history', text: t('hyundaiHistory') },
          { href: '/history', text: t('news') },
        ]}
        t={t}
      />
      <ButtonGroup>
        <NavLink href="/history" text="hyundaiTurkmenistan" pathname={pathname} t={t} />
        <NavLink href="/history/media" text="media" pathname={pathname} t={t} />
        <NavLink href="/history/news" text="news" pathname={pathname} t={t} />
        <NavLink
          href="/history/social-responsibility"
          text="socialResponsibility"
          pathname={pathname}
          t={t}
        />
      </ButtonGroup>
      <ButtonGroup>
        <Button
          className={`border-none rounded-none bg-thirdColor ${
            selectedNewsType === 'local' ? 'bg-primary' : ''
          }`}
          onClick={() => handleNewsTypeChange('local')}
        >
          {t('localNews')}
        </Button>
        <Button
          className={`border-none rounded-none bg-thirdColor ${
            selectedNewsType === 'global' ? 'bg-primary' : ''
          }`}
          onClick={() => handleNewsTypeChange('global')}
        >
          {t('globalNews')}
        </Button>
      </ButtonGroup>
      <div className="my-10">
        <NewsList t={t} data={data.rows} selectedNewsType={selectedNewsType} />
      </div>
    </main>
  );
}
