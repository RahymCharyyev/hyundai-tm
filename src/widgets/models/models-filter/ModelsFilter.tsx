import { ButtonLink, RangeInput } from '@/shared/ui';
import { Option } from '@/types/modelsPage';
import { Checkbox } from '@material-tailwind/react';
import React, { FC, useState } from 'react';

type ModelsFilterProps = {
  data: Option[];
  t: Function;
};
export const ModelsFilter: FC<ModelsFilterProps> = ({ data, t }) => {
  const [value, setValue] = useState(0);
  const [kmValue, setKmValue] = useState(0);
  const [capacityValue, setCapacityValue] = useState(0);

  return (
    <div className="flex gap-32 bg-secondary px-44 py-10">
      {data.map((item) => (
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
                defaultChecked
              />
              <p>{option.name}</p>
            </div>
          ))}
        </div>
      ))}
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-5">
          <RangeInput
            label="Рекомендованная розничная цена, ТМТ"
            min="0"
            max="1000000"
            value={value}
            step="1000"
            onChange={(e) => setValue(parseInt(e.target.value, 10))}
          />
          <RangeInput
            label="Топливная экономичность(км/литр)"
            min="0"
            max="200"
            value={kmValue}
            step="5"
            onChange={(e) => setKmValue(parseInt(e.target.value, 10))}
          />
          <RangeInput
            label="Вместимость"
            min="0"
            max="12"
            value={capacityValue}
            onChange={(e) => setCapacityValue(parseInt(e.target.value, 10))}
          />
        </div>
        <div className="flex gap-5">
          <ButtonLink
            href=""
            className="bg-thirdColor text-white py-4 px-5 hover:underline mb-20"
          >
            {t('removeFilter')}
          </ButtonLink>
          <ButtonLink
            href=""
            className="bg-primary text-white py-4 px-5 hover:underline mb-20"
          >
            {t('useFilter')}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};
