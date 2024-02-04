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
          <h1 className="text-4xl font-bold">Hyundai SmartSense</h1>
          <h2 className="text-lg">{t('smartSenseDescription')}</h2>
        </div>
        <div className="flex flex-wrap items-center gap-2 justify-between">
          {gifs?.map((engine: any, index: number) => (
            <Button
              className="rounded-none w-40"
              key={engine.id}
              onClick={() => handleButtonClick(index)}
            >
              Blind Spot Detection (BSD)
              {/* {engine.name} */}
            </Button>
          ))}
        </div>

        {gifs && (
          <Image
            src={gifs[selectedEngine].imagePath}
            alt={gifs[selectedEngine].image}
            width={800}
            height={250}
          />
        )}
        <div className="mb-4">
          BSD detects approaching vehicles or unforeseen objects in the blind spot and
          triggers a warning light and acoustic alert when changing lanes.
        </div>
      </div>
    </>
  );
};

export default SmartSenseComponent;
