import { ButtonLink } from '@/shared/ui';
import { Dialog, IconButton, Option, Select } from '@material-tailwind/react';
import Image from 'next/image';
import { FC } from 'react';
import PdfIcon from '../../../../public/pdf_icon.svg';
import SonataImage from '../../../../public/test.png';

type ModelsModalProps = {
  open: boolean;
  handleOpen: () => void;
  t: Function;
};

export const ModelsModal: FC<ModelsModalProps> = ({ t, handleOpen, open }) => {
  return (
    <Dialog
      size="xs"
      className="flex justify-around py-5"
      open={open}
      handler={handleOpen}
    >
      <div className="flex flex-col items-center justify-center">
        <Image src={SonataImage} alt="hyundai sonata" width={540} />
        <div className="flex gap-3 items-center">
          <ButtonLink className="bg-primary text-white py-4 px-5 hover:underline" href="">
            {t('knowMore')}
          </ButtonLink>
          <ButtonLink className="bg-primary text-white py-4 px-5 hover:underline" href="">
            {t('360View')}
          </ButtonLink>
          <ButtonLink
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
          <Option>Sonata 8AT ( SONATA )</Option>
          <Option>Sonata 8AT ( SONATA )</Option>
        </Select>
        <h2 className="text-black text-xl font-bold">{t('review')}</h2>
        <p className="text-black text-base font-bold">
          {t('category')} <span className="font-normal">Легковые</span>
        </p>
        <p className="text-black text-base font-bold">
          {t('modelName')} <span className="font-normal">Новая SONATA</span>
        </p>
        <p className="text-black text-base font-bold">
          {t('trip')} <span className="font-normal">Sonata 8AT ( SONATA )</span>
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
