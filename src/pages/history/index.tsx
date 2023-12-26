import { getHistoryPageData } from '@/api/getHistoryPageData';
import { Loading } from '@/layout/Loading';
import { useQueryParams } from '@/shared/hooks/useQueryParams';
import { NavLink } from '@/shared/ui/NavLink';
import { HistoryHero } from '@/widgets/history/history-hero/HistoryHero';
import { ButtonGroup } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { KeyboardEvent, useState } from 'react';

export default function HistoryPage() {
  const { t } = useTranslation('common');
  const [searchQuery, setSearchQuery] = useState('');
  const { query, changeParams } = useQueryParams();
  const { pathname } = useRouter();

  const { isPending, error, data } = useQuery({
    queryKey: ['historyPage'],
    queryFn: () => getHistoryPageData(),
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <HistoryHero
        showSearch={false}
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        handleSearchKeyPress={handleSearchKeyPress}
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
    </main>
  );
}
