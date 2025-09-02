import {forwardRef} from 'react';
import {twMerge} from 'tailwind-merge';

type TInputProps = React.ComponentPropsWithRef<'input'>;

const InputPage = forwardRef<HTMLInputElement, TInputProps>(
  ({className, ...rest}, ref) => {
    return (
      <>
        <input
          ref={ref}
          className={twMerge(
            `w-full h-[44px] rounded-lg placeholder:text-[#acacac] border border-[#4F4F4F] py-[13.5px] px-[16px] text-sm outline-none`,
            className,
          )}
          aria-disabled={rest.disabled ? 'true' : 'false'}
          aria-label='input'
          aria-placeholder={rest.placeholder}
          aria-required={rest.required ? 'true' : 'false'}
          aria-readOnly={rest.readOnly ? 'true' : 'false'}
          {...rest}
        />
      </>
    );
  },
);

InputPage.displayName = 'InputPage';

export default InputPage;
