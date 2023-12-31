import React, { FC, useState } from 'react';
import { Button, Checkbox } from '@material-tailwind/react';
import { ModelsResponse, Option, RangedOption } from '@/types/modelsPage';
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

  const handleSubmit = () => changeParams({ options: selectedOptions.join() });
  const handleReset = () => changeParams({}, 'all');
  const handleInputChange = (id: number, value: number) => {
    setValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  return (
    <div className="flex gap-32 bg-secondary px-44 py-10">
      {data.options.map((item) => (
        <div key={item.id} className="flex flex-col items-start">
          <p className="font-bold">{item.name}</p>
          <div className="flex gap-2 items-center">
            <Checkbox
              color="blue-gray"
              className="rounded-none"
              crossOrigin="true"
              defaultChecked
            />
            <p>{t('all')}</p>
          </div>
          {item.availableOptions.map((option) => (
            <div key={option.id} className="flex items-center gap-3">
              <Checkbox
                color="blue-gray"
                className="rounded-none"
                crossOrigin="true"
                onChange={() => handleOptionClick(option)}
                checked={selectedOptions.includes(option.id)}
              />
              <p>{option.name}</p>
            </div>
          ))}
        </div>
      ))}
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-5">
          {data.rangedOptions?.map((option: RangedOption) => (
            <div key={option.id}>
              <RangeInput
                label={option.name}
                min={option.from.toString()}
                max={option.to.toString()}
                value={values[option.id.toString()] || 0}
                step="1000"
                onChange={(e) =>
                  handleInputChange(option.id, parseInt(e.target.value, 10))
                }
              />
            </div>
          ))}
        </div>
        <div className="flex gap-5">
          <Button
            className="bg-thirdColor text-white py-4 px-5 hover:underline mb-20 rounded-none"
            onClick={handleReset}
          >
            {t('removeFilter')}
          </Button>
          <Button
            className="bg-primary text-white py-4 px-5 hover:underline mb-20 rounded-none"
            onClick={handleSubmit}
          >
            {t('useFilter')}
          </Button>
        </div>
      </div>
    </div>
  );
};
