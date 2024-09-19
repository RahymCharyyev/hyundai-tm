import { getContacts } from '@/api/getContacts';
import { postApplication } from '@/api/postApplication';
import TestDriveImage from '@/assets/testDrive.webp';
import { Loading } from '@/layout/Loading';
import ApplicationForm from '@/shared/ui/ApplicationForm';
import { CommonHero } from '@/shared/ui/CommonHero';
import { NavLink } from '@/shared/ui/NavLink';
import { ApplicationModel } from '@/types/applicationForm';
import { ButtonGroup } from '@material-tailwind/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function ServicesPage() {
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
    mutationFn: (formData: ApplicationModel) => postApplication(formData, 'testDrive'),
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
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CommonHero
        showSearch={false}
        title={t('testDrive')}
        breadcrumbs={[
          { href: '/services', text: t('services') },
          { href: '/services', text: t('testDrive') },
        ]}
        t={t}
      />
      <ButtonGroup className="flex flex-wrap items-center justify-center">
        <NavLink href="/services" text="testDrive" pathname={router.pathname} t={t} />
        <NavLink
          href="/services/contacts"
          text="contactUs"
          pathname={router.pathname}
          t={t}
        />
      </ButtonGroup>
      <div className="flex flex-col items-center 2xl:max-w-5xl">
        <h1 className="text-4xl font-bold mt-16 text-center lg:text-2xl">
          {t('testDriveTitle')}
        </h1>
        <h2 className="text-linkColor font-bold mb-10 text-center">
          {t('testDriveSubtitle')}
        </h2>
        <Image
          className="mb-10"
          src={TestDriveImage}
          alt="Test drive picture"
          width={500}
          height={300}
        />
        <h2 className="text-4xl font-bold mb-8 lg:text-2xl text-center ">
          {t('testDriveFormTitle')}
        </h2>
        <ApplicationForm
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
        <div className="flex flex-wrap items-center text-center justify-between my-8 w-[60%] md:justify-center sm:text-sm sm:w-[100%]">
          <span>
            {t('phoneService')} &nbsp;
            {data.data.serviceDepartmentPhone.value}
          </span>
          <span>
            {t('phoneSale')} &nbsp;{data.data.salesDepartmentPhone.value}
          </span>
        </div>
      </div>
    </main>
  );
}
