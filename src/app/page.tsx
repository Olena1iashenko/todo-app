import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Головна - ToDo App',
};

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-yellow-300 via-pink-400 to-blue-400'>
      <h1 className='text-8xl font-bold mb-4 text-white drop-shadow-2xl '>
        ToDo App
      </h1>
      <p className='text-3xl text-white mb-6 drop-shadow-md drop-shadow-yellow-300 '>
        This is a simple to-do list management app. You can add, view, and
        delete your tasks.
      </p>
      <Image
        className='m-10'
        src='/todo.png'
        alt='ToDo preview'
        width={330}
        height={180}
        priority
      />
      <Link href='/todos'>
        <Button>Start your ToDo List</Button>
      </Link>
    </main>
  );
}
