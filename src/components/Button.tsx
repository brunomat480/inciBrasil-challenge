import { ComponentProps, ReactNode } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secundary';
  children: ReactNode;
}

export function Button({ variant = 'primary', children, ...rest }: ButtonProps) {
  return (
    <button
      className={`py-3 px-[1.15625rem] ${variant === 'primary' ? 'bg-blue-primary text-white' : 'bg-yellow text-gray-600'}  font-semibold rounded w-full disabled:bg-gray-300 disabled:cursor-not-allowed`}
      {...rest}
    >
      {children}
    </button>
  )
}