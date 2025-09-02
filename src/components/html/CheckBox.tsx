import {useId} from 'react';
import {twMerge} from 'tailwind-merge';

interface CheckBoxProps extends React.ComponentPropsWithoutRef<'input'> {
  children: React.ReactNode;
}

const CheckBox = ({children, ...rest}: CheckBoxProps) => {
  const uuid = useId();

  return (
    <div className='flex items-center gap-2 relative'>
      <input
        type='checkbox'
        id={uuid}
        className={twMerge(
          `appearance-none w-5 h-5 border border-[#4F4F4F] rounded-[5px] bg-white peer/agree`,
          `checked:bg-[#4f4f4f] checked:[background-image:url('/html/check_icon.svg')] checked:bg-no-repeat checked:bg-center checked:bg-[length:16px_16px]`,
        )}
        aria-disabled={rest.disabled ? 'true' : 'false'}
        {...rest}
      />
      <label htmlFor={uuid} className='text-sm inter'>
        {children}
      </label>
    </div>
  );
};

export default CheckBox;
