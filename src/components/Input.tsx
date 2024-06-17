import { ComponentProps } from 'react';
import { useController } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface InputProps extends ComponentProps<'input'> {
  nameField?: string;
}

export function Input({ nameField = '', ...rest }: InputProps) {
  const {
    field,
    fieldState: { error },
  } = useController({ name: nameField });

  return (
    <>
      <input
        {...rest}
        className={twMerge(
          'h-10 border-[1px] border-gray-300 rounded pl-2 outline-none',
          error?.message ? 'border-rose-500 ' : 'focus:border-primary-inci-300',
          rest.className,
        )}
        {...field}
      />
      {error?.message && (
        <span className="text-xs font-medium text-rose-500 mt-2">
          {error.message}
        </span>
      )}
    </>
  );
}
