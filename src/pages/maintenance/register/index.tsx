import { getContacts } from '@/api/getContacts';
import { postApplication } from '@/api/postApplication';
import { CommonHero, NavLink } from '@/components';
import ApplicationForm from '@/components/ApplicationForm';
import { Loading } from '@/components/layout/Loading';
import { ApplicationModel } from '@/types/applicationForm';
import { ButtonGroup } from '@material-tailwind/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function MaintenanceRegisterPage() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = router.locale;
  const { register, handleSubmit, reset } = useForm<ApplicationModel>();
  const queryClient = useQueryClient();
  const { isPending, error, data } = useQuery({
    queryKey: ['contacts'],
    queryFn: () => getContacts({ lang: currentLang }),
  });

  const mutation = useMutation({
    mutationFn: (formData: ApplicationModel) =>
      postApplication(formData, 'contactUs'),
    onSuccess: () => {
      queryClient.invalidateQueries();
      reset();
      alert(t('formSuccess'));
    },
    onError: () => {
      alert(t('formError'));
    },
  });
  const onSubmit: SubmitHandler<ApplicationModel> = (data) => {
    mutation.mutate(data);
  };

  if (isPending) return <Loading />;
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <main className='flex min-h-screen flex-col items-center justify-start'>
      <CommonHero
        showSearch={false}
        title={t('maintenanceRegister')}
        breadcrumbs={[
          { href: '/maintenance', text: t('maintenance') },
          { href: '/maintenance/register', text: t('maintenanceRegister') },
        ]}
        t={t}
      />
      <ButtonGroup className='flex flex-wrap items-center justify-center'>
        <NavLink
          href='/maintenance'
          text='maintenanceEvent'
          pathname={router.pathname}
          t={t}
        />
        <NavLink
          href='/maintenance/register'
          text='maintenanceRegister'
          pathname={router.pathname}
          t={t}
        />
        <NavLink
          href='/maintenance/warranty'
          text='warranty'
          pathname={router.pathname}
          t={t}
        />
        <NavLink
          href='/maintenance/car-maintenance'
          text='carMaintenance'
          pathname={router.pathname}
          t={t}
        />
        <NavLink
          href='/maintenance/map'
          text='maintenanceMap'
          pathname={router.pathname}
          t={t}
        />
      </ButtonGroup>
      <h1 className='font-bold text-2xl max-w-[930px] my-16 text-center lg:text-xl lg:px-20 sm:!text-lg'>
        {t('serviceRegisterTitle')}
      </h1>
      <ApplicationForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
      />
      <div className='flex flex-wrap items-center text-center justify-between my-8 w-[60%] md:justify-center sm:text-sm sm:w-[100%]'>
        <span>
          {t('phoneService')} &nbsp;
          {data.data.serviceDepartmentPhone.value}
        </span>
        <span>
          {t('phoneSale')} &nbsp;{data.data.salesDepartmentPhone.value}
        </span>
      </div>
    </main>
  );
}
