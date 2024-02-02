import { useQueryParams } from '@/shared/hooks/useQueryParams';
import { RangeInput } from '@/shared/ui';
import { ModelsResponse } from '@/types/modelsPage';
import { Button, Checkbox } from '@material-tailwind/react';
import { FC, useState } from 'react';

type ModelsFilterProps = {
  data: ModelsResponse['data'];
  t: Function;
  handleOptionClick: (option: { id: number }) => void;
  selectedOptions: any;
};
export const ModelsFilter: FC<ModelsFilterProps> = ({
  data,
  t,
  handleOptionClick,
  selectedOptions,
}) => {
  const [board, setBoard] = useState([
    data.rangedOptions[0].from,
    data.rangedOptions[0].to,
  ]);
  const [fuel, setFuel] = useState([
    data.rangedOptions[1].from,
    data.rangedOptions[1].to,
  ]);
  const [price, setPrice] = useState([
    data.rangedOptions[2].from,
    data.rangedOptions[2].to,
  ]);
  const { changeParams } = useQueryParams();

  const handleSubmit = () => {
    const params = {
      boardMin: board[0],
      boardMax: board[1],
      fuelMin: fuel[0],
      fuelMax: fuel[1],
      priceMin: price[0],
      priceMax: price[1],
    };

    const updatedParams = {
      options: selectedOptions.join(),
      ...params,
    };

    changeParams(updatedParams);
  };

  const handleReset = () => {
    setBoard([data.rangedOptions[0].from, data.rangedOptions[0].to]);
    setFuel([data.rangedOptions[1].from, data.rangedOptions[1].to]);
    setPrice([data.rangedOptions[2].from, data.rangedOptions[2].to]);
    changeParams({}, 'all');
  };

  return (
    <div className="flex gap-32 bg-secondary px-44 py-10 2xl:!px-2 xl:max-w-[800px] xl:flex-col xl:!gap-16 lg:!max-w-[500px] md:w-[350px] xs:!w-[250px]">
      <div className="flex gap-12 xl:!gap-0 xl:justify-between md:flex-wrap">
        {data.options.map((item) => (
          <div key={item.id} className="flex flex-col items-start sm:!flex-wrap">
            <p className="font-bold">{item.name}</p>
            <div className="flex gap-2 items-center">
              <Checkbox
                color="blue-gray"
                className="rounded-none lg:w-3 lg:h-3"
                crossOrigin="true"
                defaultChecked
              />
              <p className="lg:text-xs">{t('all')}</p>
            </div>
            {item.availableOptions.map((option) => (
              <div key={option.id} className="flex items-center gap-3 sm:gap-1">
                <Checkbox
                  color="blue-gray"
                  className="rounded-none lg:w-3 lg:h-3"
                  crossOrigin="true"
                  onChange={() => handleOptionClick(option)}
                  checked={selectedOptions.includes(option.id)}
                />
                <p className="lg:text-xs">{option.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-5 xl:flex-row xl:flex-wrap xl:justify-between xl:gap-2">
          <RangeInput
            value={board}
            label={data.rangedOptions[0].name}
            min={data.rangedOptions[0].from}
            max={data.rangedOptions[0].to}
            step={1}
            onChange={setBoard}
          />
          <RangeInput
            value={fuel}
            label={data.rangedOptions[1].name}
            min={data.rangedOptions[1].from}
            max={data.rangedOptions[1].to}
            step={1}
            onChange={setFuel}
          />
          <RangeInput
            value={price}
            label={data.rangedOptions[2].name}
            min={data.rangedOptions[2].from}
            max={data.rangedOptions[2].to}
            step={1000}
            onChange={setPrice}
          />
        </div>
        <div className="flex gap-5 xl:justify-center mb-20 xl:mt-10 xl:mb-4">
          <Button
            className="bg-thirdColor text-white py-4 px-5 hover:underline rounded-none lg:py-3 lg:px-2"
            onClick={handleReset}
          >
            {t('removeFilter')}
          </Button>
          <Button
            className="bg-primary text-white py-4 px-5 hover:underline rounded-none lg:py-3 lg:px-2"
            onClick={handleSubmit}
          >
            {t('useFilter')}
          </Button>
        </div>
      </div>
    </div>
  );
};
