import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ApplicationModel } from '@/types/applicationForm';

interface FormProps {
  onSubmit: SubmitHandler<ApplicationModel>;
}

const ApplicationForm: React.FC<FormProps> = ({ onSubmit }) => {
  const { t } = useTranslation('common');
  const { register, handleSubmit } = useForm<ApplicationModel>();

  return (
    <div className="flex flex-col gap-4 items-center bg-secondary py-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-y-10 justify-between flex-wrap py-10 px-10 lg:py-2 lg:px-4 3xl:px-2 sm:justify-center"
      >
        <input
          {...register('fullName')}
          className="w-[300px] h-[55px] bg-white  px-3 py-3 lg:w-[150px] lg:text-xs lg:h-[35px] sm:!w-[250px]"
          placeholder={t('name')}
        />
        <input
          {...register('phone')}
          className="w-[300px] h-[55px] bg-white px-3 py-3 lg:w-[150px] lg:text-xs lg:h-[35px] sm:!w-[250px]"
          type="tel"
          placeholder={t('phone')}
        />
        <input
          {...register('email')}
          className="w-[300px] h-[55px] bg-white  px-3 py-3 lg:w-[150px] lg:text-xs lg:h-[35px] sm:!w-[250px]"
          type="email"
          placeholder={t('mail')}
        />
        <textarea
          {...register('message')}
          className="w-full bg-white placeholder:pt-3 px-3 py-3  lg:text-xs"
          placeholder={t('message')}
        />
        <button
          className="font-bold mx-auto bg-primary w-[300px] h-[50px] lg:w-[150px] lg:text-sm lg:h-[35px] text-white hover:underline"
          type="submit"
        >
          {t('sendRequest')}
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
