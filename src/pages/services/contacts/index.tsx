import { getContacts } from '@/api/getContacts';
import { postApplication } from '@/api/postApplication';
import { Loading } from '@/layout/Loading';
import ApplicationForm from '@/shared/ui/ApplicationForm';
import { CommonHero } from '@/shared/ui/CommonHero';
import { NavLink } from '@/shared/ui/NavLink';
import { ApplicationModel } from '@/types/applicationForm';
import { ButtonGroup } from '@material-tailwind/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function ServicesContactsPage() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = router.locale;
  const { register, handleSubmit, reset } = useForm<ApplicationModel>();
  const queryClient = useQueryClient();
  const { isPending, error, data } = useQuery({
    queryKey: ['contacts'],
    queryFn: () =>
      getContacts({
        lang: currentLang,
      }),
  });

  const mutation = useMutation({
    mutationFn: (formData: ApplicationModel) => postApplication(formData, 'contactUs'),
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
        title={t('contactUs')}
        breadcrumbs={[
          { href: '/services', text: t('services') },
          { href: '/services/contacts', text: t('contactUs') },
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
        <h1 className="text-4xl font-bold my-16 text-center lg:text-2xl sm:!text-lg">
          {t('contactWithUs')}
        </h1>
        <ApplicationForm
          onSubmit={onSubmit}
          register={register}
          handleSubmit={handleSubmit}
        />
        <div className="flex gap-10 justify-between my-16 lg:flex-col lg:items-center px-6">
          <iframe
            className="sm:w-[250px] sm:h-[250px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d486.8104361208546!2d31.104625!3d12.550339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6fff7552c8a2f9%3A0xa91ad91cf22f5d22!2sHyundai%20Distributor!5e0!3m2!1sen!2sus!4v1704125198161!5m2!1sen!2sus"
            width="470"
            height="500"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="flex flex-col gap-4 text-xl lg:text-base ">
            <p>{data.data.companyName.value}</p>
            <p>
              {t('workingDays')} {data.data.workingDays.value}
            </p>
            <p>
              {t('phoneService')} &nbsp;
              {data.data.serviceDepartmentPhone.value}
            </p>
            <p>
              {t('phoneSale')} &nbsp;{data.data.salesDepartmentPhone.value}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
