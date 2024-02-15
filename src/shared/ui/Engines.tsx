import { Button } from '@material-tailwind/react';
import Image from 'next/image';
import { useState } from 'react';

const EnginesComponent = ({ engines, t }: any) => {
  const [selectedEngine, setSelectedEngine] = useState(0);
  const handleButtonClick = (index: number) => {
    setSelectedEngine(index);
  };

  return (
    <>
      <div className="flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl font-bold md:text-2xl sm:!text-xl">{t('engine')}</h1>
        <div className="flex md:flex-wrap md:justify-center gap-2 justify-between">
          {engines?.map((engine: any, index: number) => (
            <Button
              className="rounded-none w-64 md:w-48 sm:!w-32 sm:text-xs"
              key={engine?.id}
              onClick={() => handleButtonClick(index)}
            >
              {engine?.name}
            </Button>
          ))}
        </div>

        {engines && (
          <Image
            src={engines[selectedEngine]?.imagePath}
            alt={engines[selectedEngine]?.image}
            width={800}
            height={250}
          />
        )}
        <div className="mb-4 px-3 text-center sm:text-sm">
          {engines[selectedEngine]?.description}
        </div>
      </div>
    </>
  );
};

export default EnginesComponent;
