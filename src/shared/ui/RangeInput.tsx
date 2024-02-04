import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';

interface RangeInputProps {
  label: string;
  min: number;
  max: number;
  step?: number;
  onChange: any;
  value: number[];
  t: Function;
}

export const RangeInput: React.FC<RangeInputProps> = ({
  label,
  min,
  value,
  max,
  step,
  onChange,
  t,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-bold lg:text-sm">{label}</span>
      <Slider
        value={value}
        min={min}
        max={max}
        step={step}
        range
        onChange={onChange}
        styles={{
          rail: {
            background: '#002C5F',
            color: '#002C5F',
          },
          track: {
            background: '#002C5F',
            color: '#002C5F',
          },
        }}
      />
      <div className="flex justify-between lg:text-sm">
        <div className="flex flex-col items-start">
          <span className="">{t('from')}</span>
          <span className="bg-white py-1 px-6 lg:px-2">{value[0]}</span>
        </div>
        <div className="flex flex-col items-end">
          <span> {t('to')}</span>
          <span className="bg-white py-1 px-6 lg:px-2">{value[1]}</span>
        </div>
      </div>
    </div>
  );
};
