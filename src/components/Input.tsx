import { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> { }

export function Input({ ...rest }: InputProps) {
  return (
    <input
      type="text"
      className="h-10 border-[0.1px] border-gray-300 rounded pl-2 filter"
      {...rest}
    />
  );
}
