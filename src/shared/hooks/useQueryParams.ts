import { useRouter } from 'next/router';
import { useCallback } from 'react';
import removeParams from '../utils/removeParams';
import removeEmpty from '../utils/removeEmpty';

export const useQueryParams = () => {
  const { query, pathname, push } = useRouter();

  const changeParams = useCallback(
    (params: any, deleteParams?: string[] | 'all') => {
      const { pathname: paramPathname, ...restParams } = params;
      const path = paramPathname as string;

      const newQuery =
        typeof deleteParams === 'string' && deleteParams === 'all'
          ? restParams
          : Object.assign({}, query, restParams);

      if (Array.isArray(deleteParams)) {
        removeParams(newQuery, deleteParams);
      }

      push({ pathname: path ?? pathname, query: removeEmpty(newQuery) }, undefined, {
        shallow: true,
      });
    },
    [pathname, push, query],
  );

  return { changeParams, query };
};
