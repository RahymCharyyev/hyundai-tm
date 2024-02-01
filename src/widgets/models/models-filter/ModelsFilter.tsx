import React, { FC, useState } from 'react';
import { Button, Checkbox } from '@material-tailwind/react';
import { ModelsResponse, RangedOption } from '@/types/modelsPage';
import { useQueryParams } from '@/shared/hooks/useQueryParams';
import { RangeInput } from '@/shared/ui';

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
  const [value, setValue] = useState(0);
  const [kmValue, setKmValue] = useState(0);
  const [capacityValue, setCapacityValue] = useState(0);
  const [values, setValues] = useState<{ [key: string]: number }>({});
  const { changeParams } = useQueryParams();
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e: any) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const handleSubmit = () => changeParams({ options: selectedOptions.join() });
  const handleReset = () => changeParams({}, 'all');
  const handleInputChange = (id: number, value: number) => {
    setValues((prevValues) => ({ ...prevValues, [id]: value }));
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
            label={data.rangedOptions[0].name}
            min={data.rangedOptions[0].from.toString()}
            max={data.rangedOptions[0].to.toString()}
            step={1000}
            minValue={data.rangedOptions[0].from.toString()}
            maxValue={data.rangedOptions[0].to.toString()}
            onInput={(e: any) => {
              handleInput(e);
            }}
          />
          <RangeInput
            label={data.rangedOptions[1].name}
            min={data.rangedOptions[1].from.toString()}
            max={data.rangedOptions[1].to.toString()}
            step={1}
            minValue={data.rangedOptions[1].from.toString()}
            maxValue={data.rangedOptions[1].to.toString()}
            onInput={(e: any) => {
              handleInputChange(data.rangedOptions[1].id, parseInt(e.target.value, 10));
            }}
          />
          <RangeInput
            label={data.rangedOptions[0].name}
            min={data.rangedOptions[2].from.toString()}
            max={data.rangedOptions[2].to.toString()}
            step={1}
            minValue={data.rangedOptions[2].from.toString()}
            maxValue={data.rangedOptions[2].to.toString()}
            onInput={(e: any) => {
              handleInput(e);
            }}
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
