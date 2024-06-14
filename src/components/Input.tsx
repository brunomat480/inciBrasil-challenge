import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends ComponentProps<'input'> { }

export function Input({ ...rest }: InputProps) {
  return (
    <input
      {...rest}
      type="text"
      className={twMerge(
        'h-10 border-[0.1px] border-gray-300 rounded pl-2',
        rest.className,
      )}
    />
  );
}
