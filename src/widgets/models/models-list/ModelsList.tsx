import { FC } from 'react';
import Image from 'next/image';
import { FrameModel } from '@/types/modelsPage';

type ModelsListProps = {
  data: FrameModel[];
  handleOpen: (model: any, frame: any) => void;
};

export const ModelsList: FC<ModelsListProps> = ({ handleOpen, data }) => {
  return (
    <div className="flex flex-col gap-12 lg:px-10">
      {data.map((frame) => (
        <div className="flex flex-wrap md:flex-col" key={frame.id}>
          {frame.models.length > 0 && (
            <h2 className="text-2xl font-bold lg:text-xl">{frame.name}</h2>
          )}
          {frame.models.map((model) => (
            <div key={model.id} className="">
              <button type="submit" onClick={() => handleOpen(model, frame)}>
                <Image
                  className="lg:w-[200px]"
                  src={model.imagePath}
                  alt={model.name}
                  width={300}
                  height={200}
                />
                <div className="font-bold text-lg uppercase hover:underline">
                  {model.name}
                </div>
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
