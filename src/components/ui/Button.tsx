import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import { CircleCheckBig, Circle } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?:
    | 'homeButton'
    | 'deleteButton'
    | 'addButton'
    | 'linkButton'
    | 'outline';
  check?: 'on' | 'off';
}

export default function Button({
  children,
  variant,
  check,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        ' text-black hover:text-white  bg-yellow-200 outline-none font-bold transition duration-200 rounded-4xl ',
        variant === 'homeButton' &&
          'h-24 w-[340px] text-3xl hover:bg-green-400 shadow-2xs ',
        variant === 'deleteButton' &&
          'h-[50px] w-[140px] text-xl hover:bg-red-400 shadow-2xs ',
        variant === 'addButton' &&
          'border-2 border-cyan-900 h-[50px] w-[250px] text-xl hover:bg-green-400 shadow-2xl',
        variant === 'linkButton' && 'w-[150px] text-xl shadow-2xl py-2',
        variant === 'outline' &&
          'w-[150px] text-xl shadow-2xl py-2 border-2 border-cyan-900',
        className
      )}
    >
      {check === 'on' && <CircleCheckBig size={32} />}
      {check === 'off' && <Circle size={32} />}
      {children}
    </button>
  );
}
