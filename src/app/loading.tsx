export default function Loading() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center p-8 text-center bg-gradient-to-bl from-yellow-300 via-pink-300 to-green-300'>
      <div className='animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-blue-500'></div>
    </div>
  );
}
