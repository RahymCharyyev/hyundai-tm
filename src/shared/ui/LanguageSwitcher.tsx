import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dropdown } from 'flowbite-react';

export const LanguageSwitcher = () => {
  return (
    <div className="flex gap-2">
      <Dropdown
        arrowIcon={false}
        label={
          <Image
            src="/language_icon.svg"
            alt="language select logo"
            width={20}
            height={20}
          />
        }
      >
        <Dropdown.Item>
          <Link href="/" locale="ru">
            Русский
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link href="/" locale="tm">
            Türkmençe
          </Link>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};
