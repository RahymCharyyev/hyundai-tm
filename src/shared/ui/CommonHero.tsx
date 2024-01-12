import { Breadcrumbs } from '@/shared/ui';
import Image from 'next/image';
import { ChangeEvent, FC, KeyboardEvent } from 'react';
import SearchIcon from '@/assets/search_icon.svg';
import { Input } from '@material-tailwind/react';

type CommonHeroProps = {
  t: Function;
  title: string;
  breadcrumbs: { href: string; text: string }[];
  searchQuery?: string;
  handleSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearchKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
  showSearch: boolean;
  subtitle?: string;
};

export const CommonHero: FC<CommonHeroProps> = ({
  t,
  title,
  subtitle,
  breadcrumbs,
  searchQuery,
  handleSearchChange,
  handleSearchKeyPress,
  showSearch = true,
}) => {
  return (
    <div className="h-[180px] w-full flex flex-col items-center justify-evenly bg-cover bg-[url('/bg_for_pages.webp')]">
      <Breadcrumbs breadcrumbs={breadcrumbs} className="bg-opacity-0 lg:hidden" />
      <h1 className="text-5xl font-bold lg:text-3xl md:text-center sm:!text-lg">
        {title}
      </h1>
      <h2 className="font-bold lg:text-sm mx-10 mx:auto text-center sm:!text-xs">
        {subtitle}
      </h2>
      {showSearch && (
        <div>
          <Input
            size="lg"
            color="blue-gray"
            className="bg-white rounded-none focus:rounded-none focus:outline-0"
            crossOrigin="true"
            label={t('search')}
            icon={<Image src={SearchIcon} alt="search icon" />}
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyPress}
          />
        </div>
      )}
    </div>
  );
};
