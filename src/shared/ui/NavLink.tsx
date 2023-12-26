import Link from 'next/link';

interface NavLinkProps {
  href: string;
  text: string;
  pathname: string;
  t: (key: string) => string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, text, pathname, t }) => (
  <Link
    href={href}
    className={`rounded-none bg-${
      pathname === href ? 'primary' : 'thirdColor'
    } border-none px-6 py-3 text-white hover:shadow-lg hover:shadow-gray-900/20`}
  >
    {t(text)}
  </Link>
);
