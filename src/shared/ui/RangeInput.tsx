import React from 'react';

interface RangeInputProps {
  label: string;
  min: string;
  max: string;
  value: number;
  step?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RangeInput: React.FC<RangeInputProps> = ({
  label,
  min,
  max,
  value,
  step,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-bold">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={onChange}
        className="w-full h-1 bg-primary appearance-none range"
      />
      <div className="flex justify-between">
        <div className="flex flex-col items-start">
          <span>от</span>
          <span className="bg-white py-1 px-6">{value}</span>
        </div>
        <div className="flex flex-col items-end">
          <span>до</span>
          <span className="bg-white py-1 px-6">{max}</span>
        </div>
      </div>
    </div>
  );
};
