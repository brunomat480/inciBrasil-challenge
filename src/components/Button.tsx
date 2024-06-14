import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        'py-3 px-[1.15625rem] font-semibold rounded w-full disabled:bg-gray-300 disabled:cursor-not-allowed hover:brightness-125 hover:transition hover:duration-200',
        rest.className,
      )}
    >
      {children}
    </button>
  );
}
