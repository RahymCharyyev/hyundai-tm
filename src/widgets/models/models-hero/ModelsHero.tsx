import { FC } from 'react';
import { Breadcrumbs, ButtonLink } from '@/shared/ui';
import { Input } from '@material-tailwind/react';
import Image from 'next/image';
import FilterIcon from '../../../../public/filter_icon.svg';
import SearchIcon from '../../../../public/search_icon.svg';

type ModelsHeroProps = {
  t: Function;
  toggleFilter: () => void;
  showFilter: boolean;
};

export const ModelsHero: FC<ModelsHeroProps> = ({ t, toggleFilter, showFilter }) => {
  return (
    <div className="h-[325px] w-full flex flex-col items-center justify-around bg-cover bg-[url('/bg_for_pages.webp')]">
      <Breadcrumbs
        breadcrumbs={[
          { href: '/', text: t('main') },
          { href: '/models', text: t('modelsLineup') },
        ]}
        className="bg-opacity-0"
      />
      <h1 className="text-5xl font-bold">{t('allVehicles')}</h1>
      <div className="flex gap-4">
        <Input
          size="lg"
          color="blue-gray"
          className="bg-white rounded-none focus:rounded-none focus:outline-0"
          crossOrigin="true"
          label={t('vehicleSearch')}
          icon={<Image src={SearchIcon} alt="search icon " />}
        />
        <ButtonLink
          onClick={toggleFilter}
          href=""
          className="flex items-center gap-4 bg-primary text-white py-2 px-5 hover:underline"
        >
          {t('filter')}
          {showFilter === true ? (
            <Image className="rotate-180" src={FilterIcon} alt="filter icon" />
          ) : (
            <Image src={FilterIcon} alt="filter icon" />
          )}
        </ButtonLink>
      </div>
    </div>
  );
};
