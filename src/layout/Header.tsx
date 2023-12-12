import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export function Header() {
  const { t } = useTranslation('common');
  console.log(t('common:title'));
  console.log('sadasdasd');

  return (
    <header>
      <div className="h-11 flex items-center bg-secondary">
        <span className="text-primary px-28">
          {t('title')}: &nbsp;
          <Link className="font-bold" href="tel:+993 12 12-12-12">
            +993 12 12-12-12
          </Link>
        </span>
      </div>
    </header>
  );
}
