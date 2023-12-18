import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react';

export const LanguageSwitcher = () => {
  return (
    <Menu>
      <MenuHandler className="cursor-pointer">
        <Image
          src="/language_icon.svg"
          alt="language select logo"
          width={20}
          height={20}
        />
      </MenuHandler>
      <MenuList>
        <MenuItem className="flex items-center gap-2">
          <Link href="/" locale="ru">
            Русский
          </Link>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <Link href="/" locale="tm">
            Türkmençe
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );

