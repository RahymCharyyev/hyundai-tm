import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { Loading } from '@/layout/Loading';
import { getMediaData } from '@/api/getHistoryPageData';
import { CommonHero } from '@/shared/ui/CommonHero';
import { NavLink } from '@/shared/ui/NavLink';
import { MediaList } from '@/widgets/history/media/MediaList';
import { Button, ButtonGroup } from '@material-tailwind/react';
import useTranslation from 'next-translate/useTranslation';

export default function MediaPage() {
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
      <ButtonGroup className="flex flex-wrap items-center justify-center">
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
          className={`border-none rounded-none bg-thirdColor lg:px-2 lg:py-2 lg:text-sm md:!text-xs ${
            selectedMediaType === 'video' ? 'bg-primary' : ''
          }`}
          onClick={() => handleMediaTypeChange('video')}
        >
          {t('video')} ({data.data.videos?.count})
        </Button>
        <Button
          className={`border-none rounded-none bg-thirdColor lg:px-2 lg:py-2 lg:text-sm md:!text-xs ${
            selectedMediaType === 'image' ? 'bg-primary' : ''
          }`}
          onClick={() => handleMediaTypeChange('image')}
        >
          {t('photo')}({data.data.images?.count})
        </Button>
      </ButtonGroup>
      <div className="my-10">
        <MediaList data={data} selectedMediaType={selectedMediaType} />
      </div>
    </main>
  );
}
