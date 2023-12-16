import React from 'react';
import { Breadcrumbs as MTBreadcrumbs, Typography } from '@material-tailwind/react';
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
          <Typography variant="small" color="blue-gray">
            {breadcrumb.text}
          </Typography>
        </Link>
      ))}
    </MTBreadcrumbs>
  );
};
