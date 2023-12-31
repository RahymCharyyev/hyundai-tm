import { getMediaData } from '@/api/getHistoryPageData';
import { Loading } from '@/layout/Loading';
import { CommonHero } from '@/shared/ui/CommonHero';
import { NavLink } from '@/shared/ui/NavLink';
import { NewsList } from '@/widgets/history/news/NewsList';
import { Button, ButtonGroup } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function NewsPage() {
  const { t } = useTranslation('common');
  const { pathname } = useRouter();
  const [selectedMediaType, setSelectedMediaType] = useState<string | null>('video');

  const { isPending, error, data } = useQuery({
    queryKey: ['historyPage'],
    queryFn: () => getMediaData(),
  });

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

  const handleMediaTypeChange = (mediaType: string) => {
    setSelectedMediaType(mediaType);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CommonHero
        showSearch={false}
        title={t('media')}
        breadcrumbs={[
          { href: '/history', text: t('hyundaiHistory') },
          { href: '/history/media', text: t('media') },
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
      <ButtonGroup className="mt-8">
        <Button
          className={`border-none rounded-none bg-thirdColor ${
            selectedMediaType === 'video' ? 'bg-primary' : ''
          }`}
          onClick={() => handleMediaTypeChange('video')}
        >
          {t('video')}
        </Button>
        <Button
          className={`border-none rounded-none bg-thirdColor ${
            selectedMediaType === 'image' ? 'bg-primary' : ''
          }`}
          onClick={() => handleMediaTypeChange('image')}
        >
          {t('photo')}
        </Button>
      </ButtonGroup>
      <div className="my-10">
        <NewsList t={t} data={data.rows} selectedNewsType={selectedMediaType} />
      </div>
    </main>
  );
}
