import Image from 'next/image';
import React from 'react';
import BsdGif from '@/assets/bsd.gif';
import AsccGif from '@/assets/ascc.gif';
import DblGif from '@/assets/dbl.gif';
import EscGif from '@/assets/esc.gif';
import HacGif from '@/assets/hac.gif';

const GifPlayer = () => {
  return (
    <>
      <Image src={BsdGif} alt="Bsd gif" width={500} height={300} />
      <Image src={AsccGif} alt="Ascc gif" width={500} height={300} />
      <Image src={DblGif} alt="Dbl gif" width={500} height={300} />
      <Image src={EscGif} alt="Esc gif" width={500} height={300} />
      <Image src={HacGif} alt="Hac gif" width={500} height={300} />
    </>
  );
};

export default GifPlayer;
