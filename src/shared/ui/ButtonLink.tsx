import Link from 'next/link';
import { HTMLAttributes, ReactNode } from 'react';

// в папке shared/ui будут храниться ui компоненты которые также используются много где
// например кнопки, инпуты, селекты, дропдауны

// HTMLAttributes<HTMLButtonElement> - это нужно для того чтобы мы могли прокидывать такие базовые штуки как onClick, value и тд
// нам не нужно описывать типы уже итак описанные в самом реакте для базовых элементов
// поэтому мы просто наследуемся от них а если мы хотим передать свои кастомные пропсы просто пишем их после children
interface IProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href?: string;
  target?: string;
}
export const ButtonLink = ({ children, href, target, ...rest }: IProps) => {
  return (
    <Link target={target} href={href!} {...rest}>
      {children}
    </Link>
  );
};
