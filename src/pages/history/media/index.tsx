import { getMediaData } from '@/api/getHistoryPageData';
import { CommonHero, NavLink } from '@/components';
import { MediaList } from '@/components/history/MediaList';
import { Loading } from '@/components/layout/Loading';
import { Button, ButtonGroup } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function MediaPage() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = router.locale;
  const [selectedMediaType, setSelectedMediaType] = useState<string | null>(
    'video'
  );

  const { isPending, error, data } = useQuery({
    queryKey: ['historyPage'],
    queryFn: () => getMediaData({ lang: currentLang }),
  });

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

  const handleMediaTypeChange = (mediaType: string) => {
    setSelectedMediaType(mediaType);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-start'>
      <CommonHero
        showSearch={false}
        title={t('media')}
        breadcrumbs={[
          { href: '/history', text: t('hyundaiHistory') },
          { href: '/history/media', text: t('media') },
        ]}
        t={t}
      />
      <ButtonGroup className='flex flex-wrap items-center justify-center'>
        <NavLink
          href='/history'
          text='hyundaiTurkmenistan'
          pathname={router.pathname}
          t={t}
        />
        <NavLink
          href='/history/media'
          text='media'
          pathname={router.pathname}
          t={t}
        />
        <NavLink
          href='/history/news'
          text='news'
          pathname={router.pathname}
          t={t}
        />
        <NavLink
          href='/history/social-responsibility'
          text='socialResponsibility'
          pathname={router.pathname}
          t={t}
        />
      </ButtonGroup>
      <ButtonGroup className='mt-8'>
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
      <div className='my-10'>
        {data.data !== undefined && (
          <MediaList data={data} selectedMediaType={selectedMediaType} />
        )}
      </div>
    </main>
  );
}
