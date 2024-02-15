import { Button } from '@material-tailwind/react';
import Image from 'next/image';
import { useState } from 'react';

const SmartSenseComponent = ({ gifs, t }: any) => {
  const [selectedEngine, setSelectedEngine] = useState(0);
  const handleButtonClick = (index: number) => {
    setSelectedEngine(index);
  };

  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-4xl font-bold md:px-3 md:text-2xl sm:!text-xl">
            Hyundai SmartSense
          </h1>
          <h2 className="text-lg md:px-3 sm:text-sm">{t('smartSenseDescription')}</h2>
        </div>
        <div className="flex flex-wrap sm:px-3 text-center items-center gap-2 justify-between">
          {gifs?.map((gif: any, index: number) => (
            <Button
              className="rounded-none w-40 h-20 md:h-24 md:w-32 sm:!w-28 sm:text-xs"
              key={gif?.id}
              onClick={() => handleButtonClick(index)}
            >
              {gif?.name}
            </Button>
          ))}
        </div>
        <div className="my-4 max-w-3xl mx-auto text-center">
          {gifs[selectedEngine]?.description}
        </div>
        {gifs && (
          <Image
            src={gifs[selectedEngine]?.imagePath}
            alt={gifs[selectedEngine]?.image}
            width={800}
            height={250}
          />
        )}
      </div>
    </>
  );
};

export default SmartSenseComponent;
