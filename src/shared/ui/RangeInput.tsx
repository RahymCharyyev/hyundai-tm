import React from 'react';
// import MultiRangeSlider from 'multi-range-slider-react';
// import 'multi-range-slider-react/lib/multirangeslider.css';
import { RangeSlider } from 'next-range-slider';
import 'next-range-slider/dist/main.css';

interface RangeInputProps {
  label: string;
  min: string;
  minValue: string;
  max: string;
  maxValue: string;
  step?: number;
  onInput: any;
}

export const RangeInput: React.FC<RangeInputProps> = ({
  label,
  min,
  minValue,
  max,
  maxValue,
  step,
  onInput,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-bold lg:text-sm">{label}</span>
      {/* <MultiRangeSlider
        className=" border-none shadow-none  lg:text-sm py-4"
        barLeftColor="#002C5F"
        barRightColor="#002C5F"
        barInnerColor="#002C5F"
        thumbLeftColor="#002C5F"
        thumbRightColor="#002C5F"
        ruler={false}
        min={min}
        max={max}
        step={step}
        minValue={minValue}
        maxValue={maxValue}
        onInput={onInput}
      /> */}
      <RangeSlider
        min={-1000}
        max={1000}
        step={100}
        // options={{
        //   leftInputProps: {
        //     value: low,
        //     onChange: (e) => setLow(Number(e.target.value)),
        //   },
        //   rightInputProps: {
        //     value: high,
        //     onChange: (e) => setHigh(Number(e.target.value)),
        //   },
        // }}
      />
    </div>
  );
};
