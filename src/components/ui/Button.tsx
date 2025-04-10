import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'h-24 w-[340px] text-3xl rounded-4xl bg-yellow-200 hover:bg-green-400 text-black hover:text-white font-bold transition duration-200',
        className
      )}
    >
      {children}
    </button>
  );
}
