import React from 'react';
import { Breadcrumbs as MTBreadcrumbs } from '@material-tailwind/react';
import Link from 'next/link';

interface Breadcrumb {
  href: string;
  text: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs, className }) => {
  return (
    <MTBreadcrumbs className={className}>
      {breadcrumbs.map((breadcrumb, index) => (
        <Link href={breadcrumb.href} key={index}>
          <span>{breadcrumb.text}</span>
        </Link>
      ))}
    </MTBreadcrumbs>
  );
};
