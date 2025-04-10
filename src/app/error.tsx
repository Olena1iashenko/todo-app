'use client';

import Button from '@/components/ui/Button';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-8 text-center'>
      <h2 className='text-4xl text-center m-auto text-black bg-gradient-to-r from-pink-400 via-red-500 to-pink-400'>
        Something went wrong!
      </h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
