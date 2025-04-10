import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-8 text-center bg-gradient-to-tr from-yellow-300 via-pink-300 to-green-300'>
      <h2 className='text-4xl mb-4 text-black drop-shadow-2xl font-bold'>
        Not Found
      </h2>
      <p className='text-2xl text-white mb-16 drop-shadow-md drop-shadow-yellow-300 '>
        Could not find requested resource
      </p>
      <Link href='/'>
        <Button variant='addButton'>Return Home</Button>
      </Link>
    </div>
  );
}
