import { ButtonLink } from '@/shared/ui';
import { Dialog, IconButton, Option, Select } from '@material-tailwind/react';
import Image from 'next/image';
import { FC } from 'react';
import PdfIcon from '../../../../public/pdf_icon.svg';
import { FrameModel, ModelWithEquipment } from '@/types/modelsPage';

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
      className="flex justify-around py-5"
      open={open}
      handler={handleOpen}
    >
      <div className="flex flex-col items-center justify-center">
        <Image src={model.imagePath} alt={model.name} width={540} height={200} />
        <div className="flex gap-3 items-center">
          <ButtonLink
            target="_blank"
            className="bg-primary text-white py-4 px-5 hover:underline"
            href={model.link}
          >
            {t('knowMore')}
          </ButtonLink>
          <ButtonLink
            target="_blank"
            className="bg-primary text-white py-4 px-5 hover:underline"
            href=""
          >
            {t('360View')}
          </ButtonLink>
          <ButtonLink
            target="_blank"
            className="bg-primary text-white py-4 px-8 hover:underline flex gap-2 items-center justify-between"
            href=""
          >
            {t('eBroshure')}
            <Image src={PdfIcon} alt="pdf icon" />
          </ButtonLink>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-black text-xl font-bold">{t('chooseTrip')}</h2>
        <Select label={t('chooseTrip')}>
          {selectedModelEquipments.map((equipment) => (
            <Option key={equipment.id}>{equipment.name}</Option>
          ))}
        </Select>
        <h2 className="text-black text-xl font-bold">{t('review')}</h2>
        <p className="text-black text-base font-bold">
          {t('category')} <span className="font-normal">{frameName}</span>
        </p>
        <p className="text-black text-base font-bold">
          {t('modelName')} <span className="font-normal">{model.name}</span>
        </p>
        <p className="text-black text-base font-bold">
          {t('trip')}{' '}
          {selectedModelEquipments.map((equipment) => (
            <span key={equipment.id} className="font-normal">
              {equipment.name}
            </span>
          ))}
        </p>
        <p className="text-black text-base font-bold">
          {t('capacity')} <span className="font-normal">5</span>
        </p>
      </div>
      <IconButton color="blue-gray" size="sm" variant="text" onClick={handleOpen}>
        <span className="text-xl">X</span>
      </IconButton>
    </Dialog>
  );
};
