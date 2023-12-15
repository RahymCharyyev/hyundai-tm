import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useQuery } from '@tanstack/react-query';
import { getMainPageData } from '@/api/getMainPageData';
import { Breadcrumb, TextInput } from 'flowbite-react';
import { HiSearch } from 'react-icons/hi';
import Image from 'next/image';

export default function Models() {
  const { t } = useTranslation('common');
  const { isPending, error, data } = useQuery({
    queryKey: ['mainPage'],
    queryFn: () => getMainPageData(),
  });

  if (isPending) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className=" h-[325px] w-full bg-cover bg-[url('/bg_for_pages.webp')]">
        <Breadcrumb aria-label="Breadcrumb">
          <Link href="/">{t('main')}</Link>
          <Breadcrumb.Item href="/models">{t('modelsLineup')}</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-5xl font-bold">{t('allVehicles')}</h1>
        <div className="relative">
          <input
            type="text"
            className="w-full py-2 pr-10 pl-4 text-gray-700 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Search..."
          />
          <button type="submit" className="absolute right-0 top-0 mt-2 mr-2">
            <svg
              className="h-6 w-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 15l5.5 5.5M15 9a6 6 0 1 1-6 6 6 6 0 0 1 6-6z"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
