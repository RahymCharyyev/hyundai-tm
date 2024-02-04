import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react';
import ShareIcon from '@/assets/share_icon.svg';
import { useQuery } from '@tanstack/react-query';
import { getContacts } from '@/api/getContacts';
import { useRouter } from 'next/router';
import { Loading } from '@/layout/Loading';

export const SocialLinksSelector = () => {
  const router = useRouter();
  const currentLang = router.locale;
  const { isPending, error, data } = useQuery({
    queryKey: ['contactsPage'],
    queryFn: () => getContacts({ lang: currentLang }),
  });

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <Menu>
      <MenuHandler className="cursor-pointer">
        <Image
          className="lg:w-[15px]"
          src={ShareIcon}
          alt="social links select logo"
          width={20}
          height={20}
        />
      </MenuHandler>
      <MenuList className="flex items-center justify-center">
        <MenuItem className="flex items-center gap-2">
          <Link target="_blank" href={data.data.Youtube.value}>
            <Image
              src={`http://hyundai.com.tm/public/${data.data.Youtube.icon}`}
              alt="icon"
              width={20}
              height={20}
            />
          </Link>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <Link target="_blank" href={data.data.Telegram.value}>
            <Image
              src={`http://hyundai.com.tm/public/${data.data.Telegram.icon}`}
              alt="icon"
              width={20}
              height={20}
            />
          </Link>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <Link target="_blank" href={data.data.Instagram.value}>
            <Image
              src={`http://hyundai.com.tm/public/${data.data.Instagram.icon}`}
              alt="icon"
              width={20}
              height={20}
            />
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
