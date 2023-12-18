import React, { useState } from 'react';
import { Button, ButtonGroup as MTBButtonGroup } from '@material-tailwind/react';

interface ButtonProps {
  text: string;
  className?: string;
}

interface ButtonGroupProps {
  buttons: ButtonProps[];
  className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons, className }) => {
  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (index: number) => {
    setActiveButton(index);
  };

  return (
    <MTBButtonGroup className={className}>
      {buttons.map((button, index) => (
        <Button
          className={
            index === activeButton
              ? 'rounded-none bg-primary border-none'
              : 'rounded-none bg-thirdColor border-none'
          }
          key={index}
          onClick={() => handleClick(index)}
        >
          {button.text}
        </Button>
      ))}
    </MTBButtonGroup>
  );
};
