import { ChangeEvent, KeyboardEvent, FC } from 'react';
import { Breadcrumbs } from '@/shared/ui';
import { Button, Input } from '@material-tailwind/react';
import Image from 'next/image';
import FilterIcon from '../../../../public/filter_icon.svg';
import SearchIcon from '../../../../public/search_icon.svg';

type ModelsHeroProps = {
  t: Function;
  toggleFilter: () => void;
  showFilter: boolean;
  searchQuery: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearchKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
};

export const ModelsHero: FC<ModelsHeroProps> = ({
  t,
  toggleFilter,
  showFilter,
  searchQuery,
  handleSearchChange,
  handleSearchKeyPress,
}) => {
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
          icon={<Image src={SearchIcon} alt="search icon" />}
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleSearchKeyPress}
        />
        <Button
          onClick={toggleFilter}
          className="flex items-center gap-2 bg-primary text-white py-2 px-7 pl-3 hover:underline rounded-none"
        >
          {t('filter')}
          {showFilter === true ? (
            <Image className="rotate-180" src={FilterIcon} alt="filter icon" />
          ) : (
            <Image src={FilterIcon} alt="filter icon" />
          )}
        </Button>
      </div>
    </div>
  );
};
