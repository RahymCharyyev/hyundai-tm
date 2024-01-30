import { FrameModel, ModelWithEquipment } from '@/types/modelsPage';
import { Dialog, IconButton, Option, Select } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type ModelsModalProps = {
  open: boolean;
  handleOpen: () => void;
  t: Function;
  model: ModelWithEquipment;
  frameModel?: FrameModel;
};

export const ModelsModal: FC<ModelsModalProps> = ({
  t,
  handleOpen,
  open,
  model,
  frameModel,
}) => {
  const frameName = frameModel ? frameModel.name : 'Unknown Frame';
  const selectedModelEquipments = model.equipments || [];

  return (
    <Dialog
      size="xs"
      className="flex justify-around py-5 2xl:min-w-[80%] sm:flex-col sm:px-6 sm:items-end"
      open={open}
      handler={handleOpen}
    >
      <div className="flex flex-col items-center justify-center sm:order-3">
        <Image
          className="lg:w-[300px]"
          src={model.imagePath}
          alt={model.name}
          width={540}
          height={200}
        />
        <div className="flex gap-3 items-center">
          <Link
            className="bg-primary text-white py-4 px-5 hover:underline lg:py-2 lg:px-3 lg:text-sm"
            href={`models/${model.id}/feature`}
          >
            {t('knowMore')}
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-5 sm:order-2">
        <h2 className="text-black text-xl font-bold lg:text-sm">{t('chooseTrip')}</h2>
        <Select className="lg:text-sm" label={t('chooseTrip')}>
          {selectedModelEquipments.map((equipment) => (
            <Option className="lg:text-sm" key={equipment.id}>
              {equipment.name}
            </Option>
          ))}
        </Select>
        <h2 className="text-black text-xl font-bold lg:text-sm">{t('review')}</h2>
        <p className="text-black text-base font-bold lg:text-sm">
          {t('category')} <span className="font-normal lg:text-sm">{frameName}</span>
        </p>
        <p className="text-black text-base font-bold lg:text-sm">
          {t('modelName')} <span className="font-normal">{model.name}</span>
        </p>
        <p className="text-black text-base font-bold lg:text-sm">
          {t('trip')}
          {selectedModelEquipments.map((equipment) => (
            <span key={equipment.id} className="font-normal">
              {equipment.name}
            </span>
          ))}
        </p>
        <p className="text-black text-base font-bold lg:text-sm">
          {t('capacity')} <span className="font-normal">{model.seat}</span>
        </p>
      </div>
      <IconButton
        aria-label="close button"
        className="sm:order-1"
        color="blue-gray"
        size="sm"
        variant="text"
        onClick={handleOpen}
      >
        <span className="text-xl lg:text-sm">X</span>
      </IconButton>
    </Dialog>
  );
};
