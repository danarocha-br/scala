import InputMask, { Props } from 'react-input-mask';

export const CalendarInput = ({
  children,
  value,
  ...props
}: Omit<Props, 'mask'>) => {
  return (
    <InputMask
      mask="99/99/9999"
      maskPlaceholder="dd/mm/yyyy"
      value={value}
      autoComplete="off"
      {...props}
    >
      {children}
    </InputMask>
  );
};
