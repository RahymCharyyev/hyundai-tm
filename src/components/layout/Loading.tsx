import { Spinner } from '@material-tailwind/react';

export function Loading() {
  return (
    <div className='h-[100vh] flex items-center justify-center'>
      <Spinner color='blue' className='h-16 w-16' />
    </div>
  );
}
