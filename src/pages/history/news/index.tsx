import { getNewsData } from '@/api/getHistoryPageData';
import { Loading } from '@/layout/Loading';
import { useQueryParams } from '@/shared/hooks/useQueryParams';
import { NavLink } from '@/shared/ui/NavLink';
import { CommonHero } from '@/shared/ui/CommonHero';
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
  const router = useRouter();
  const currentLang = router.locale;
  const [selectedNewsType, setSelectedNewsType] = useState<string | null>('local');

  const { isPending, error, data } = useQuery({
    queryKey: ['historyPage', query.search],
    queryFn: () =>
      getNewsData({
        lang: currentLang,
        search: query.search as string,
      }),
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
      <CommonHero
        showSearch
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        handleSearchKeyPress={handleSearchKeyPress}
        title={t('news')}
        breadcrumbs={[
          { href: '/history', text: t('hyundaiHistory') },
          { href: '/history', text: t('news') },
        ]}
        t={t}
      />
      <ButtonGroup className="flex flex-wrap items-center justify-center">
        <NavLink
          href="/history"
          text="hyundaiTurkmenistan"
          pathname={router.pathname}
          t={t}
        />
        <NavLink href="/history/media" text="media" pathname={router.pathname} t={t} />
        <NavLink href="/history/news" text="news" pathname={router.pathname} t={t} />
        <NavLink
          href="/history/social-responsibility"
          text="socialResponsibility"
          pathname={router.pathname}
          t={t}
        />
      </ButtonGroup>
      <ButtonGroup>
        <Button
          className={`border-none rounded-none bg-thirdColor ${
            selectedNewsType === 'local' ? 'bg-primary' : ''
          } lg:px-1 lg:py-1 lg:text-sm md:!text-xs`}
          onClick={() => handleNewsTypeChange('local')}
        >
          {t('localNews')}
        </Button>
        <Button
          className={`border-none rounded-none bg-thirdColor ${
            selectedNewsType === 'global' ? 'bg-primary' : ''
          } lg:px-1 lg:py-1 lg:text-sm md:!text-xs`}
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
