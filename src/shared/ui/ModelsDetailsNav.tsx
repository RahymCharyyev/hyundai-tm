import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import PrevArrow from '@/assets/prev_arrow.png';
import NextArrow from '@/assets/next_arrow.png';

type ModelsDetailsNavProps = {
  id: string | string[] | undefined;
  t: Function;
  prevLink: string;
  nextLink: string;
  showPrev?: boolean;
  showNext?: boolean;
};

export const ModelsDetailsNav: FC<ModelsDetailsNavProps> = ({
  id,
  prevLink,
  nextLink,
  showPrev = true,
  showNext = true,
  t,
}) => {
  return (
    <div className="bg-accordionBg w-full py-16 my-16">
      <div
        className={` ${
          showPrev && showNext && 'flex justify-between max-w-6xl mx-auto'
        } ${!showPrev && 'flex justify-end max-w-6xl mx-auto'} ${
          !showNext && 'flex justify-start max-w-6xl mx-auto'
        }`}
      >
        <Link
          href={`/models/${id}/${prevLink}`}
          className={`flex items-center gap-4 font-bold text-3xl hover:underline ${
            !showPrev && 'hidden'
          }`}
        >
          <Image src={PrevArrow} alt="previous icon" />
          <p>{t(prevLink)}</p>
        </Link>
        <Link
          href={`/models/${id}/${nextLink}`}
          className={`flex items-center gap-4 font-bold text-3xl hover:underline ${
            !showNext && 'hidden'
          }`}
        >
          <p>{t(nextLink)}</p>
          <Image src={NextArrow} alt="next icon" />
        </Link>
      </div>
    </div>
  );
};
