import { NavLink } from '@/shared/ui/NavLink';
import { CommonHero } from '@/shared/ui/CommonHero';
import { ButtonGroup } from '@material-tailwind/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Image from 'next/image';
import HyundaiTurkmenistanImage from '@/assets/hyundaiTurkmenistan.webp';

export default function HistoryPage() {
  const { t } = useTranslation('common');

  const { pathname } = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <CommonHero
        showSearch={false}
        title={t('hyundaiTurkmenistan')}
        breadcrumbs={[
          { href: '/history', text: t('hyundaiHistory') },
          { href: '/history', text: t('hyundaiTurkmenistan') },
        ]}
        t={t}
      />
      <ButtonGroup className="flex flex-wrap items-center justify-center">
        <NavLink href="/history" text="hyundaiTurkmenistan" pathname={pathname} t={t} />
        <NavLink href="/history/media" text="media" pathname={pathname} t={t} />
        <NavLink href="/history/news" text="news" pathname={pathname} t={t} />
        <NavLink
          href="/history/social-responsibility"
          text="socialResponsibility"
          pathname={pathname}
          t={t}
        />
      </ButtonGroup>
      <div className="flex flex-col gap-4 items-center max-w-5xl my-16 lg:max-w-2xl ">
        <h1 className="text-4xl font-bold lg:text-2xl">Hyundai Motor Company</h1>
        <span className="lg:text-sm lg:px-6">
          Компания Hyundai Motor признает важность и влияние автомобилей на человечество.
          Мы стремимся играть роль, выходящую за рамки простого производителя, желая стать
          пожизненным спутником клиента.
        </span>
        <Image
          className="lg:w-[400px] lg:px-6"
          src={HyundaiTurkmenistanImage}
          alt="hyundai Turkmenistan image"
          width={550}
          height={435}
        />
        <span className="lg:text-sm lg:px-6">
          Мы стараемся держать добрые связи с клиентами, выполняя свое видение стать
          «пожизненным автомобильным партнером и даже больше» и участвовать в «совместной
          работе для лучшего будущего» в составе Hyundai Motor Group. Мы продвигаем
          корпоративную культуру, ориентированную на клиента, предоставляя наилучшее
          качество и безупречный сервис всеми усилиями. Мы отказываемся быть
          самодовольными, c непоколебимой страстью и изобретательностью беремся за любую
          возможность, не важно большой это вызов или маленький, т.к. уверены в достижении
          наших целей. Мы создаем синергию через чувство «единения», чему способствует
          взаимное общение и сотрудничество внутри компании, а также с нашими деловыми
          партнерами. Hyundai Motor Group разработала новое видение «Вместе к лучшему
          будущему», ответственно выполняя свою роль в качестве надежной глобальной
          компании.
        </span>
        <span className="lg:text-sm lg:px-6">
          Мы считаем, что будущее нашей организации лежит в сердцах и возможностях
          отдельных членов и поможет им развить свой потенциал, создав корпоративную
          культуру, которая уважает талант. Мы уважаем разнообразие культур и обычаев,
          стремимся быть лучшими в мире в том, что мы делаем, а также стать уважаемым
          глобальным корпоративным гражданином. Компания Hyundai Motor определила свое
          видение как «Пожизненного партнера в автомобилях и не только», чтобы стать на
          шаг ближе к своим клиентам и стать их любимым брендом. На сегодня автомобиль уже
          не просто средство передвижения, которое связывает людей друг с другом; оно
          стало жизненным пространством, которое занимает большое место в жизни людей.
          Таким образом, Hyundai Motor Company стремится стать постоянным партнером в
          повседневной жизни клиентов. В настоящий момент компания разрабатывает
          экологически чистые и ориентированные на человека технологии для будущего и
          настраивает оптимизированные глобальные системы управления для обеспечения
          наилучшего опыта своих клиентов.
        </span>
      </div>
    </main>
  );
}
