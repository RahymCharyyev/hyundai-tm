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
        <h1 className="text-4xl font-bold">{t('engine')}</h1>
        <div className="flex gap-2 justify-between">
          {engines?.map((engine: any, index: number) => (
            <Button
              className="rounded-none w-64"
              key={engine.id}
              onClick={() => handleButtonClick(index)}
            >
              2.0 MPi бензин
              {/* {engine.name} */}
            </Button>
          ))}
        </div>

        {engines && (
          <Image
            src={engines[selectedEngine].imagePath}
            alt={engines[selectedEngine].image}
            width={800}
            height={250}
          />
        )}
        <div className="mb-4">
          Максимальная мощность 152 л.с. при 6200 об/мин и максимальный крутящий момент
          19,6 кг ∙ м при 4000 об/мин.
        </div>
      </div>
    </>
  );
};

export default EnginesComponent;
