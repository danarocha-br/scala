import { ElementRef, forwardRef } from 'react';
import {
  PrimitiveButtonProps,
  Root as CheckboxPrimitiveRoot,
} from '@radix-ui/react-checkbox';

import { FormErrorMessage } from '../FormErrorMessage';
import { Text } from '../Text';
import * as S from './styles';
import { Box } from '../Box';

export type CheckboxFieldsetProps = {
  legend: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'regular' | 'task';
};

export type CheckboxProps = {
  name?: string;
  label?: string;
  variant?: 'regular' | 'task';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any | undefined;
  disabled?: boolean;
  className?: string;
} & Omit<PrimitiveButtonProps, 'name'>;

const CheckboxFieldset = ({
  legend,
  children,
  className,
  variant = 'regular',
}: CheckboxFieldsetProps) => (
  <Box
    as="fieldset"
    aria-labelledby={legend}
    className={S.fieldset({ className, variant })}
  >
    {Boolean(legend) && (
      <Text as="legend" size="sm" color="body-lighter" className="mb-3">
        {legend}
      </Text>
    )}

    {children}
  </Box>
);
CheckboxFieldset.displayName = 'Fieldset';

const CheckboxItem = forwardRef<
  ElementRef<typeof CheckboxPrimitiveRoot>,
  CheckboxProps
>(
  (
    {
      className,
      variant = 'regular',
      name,
      errors,
      label,
      disabled = false,
      ...props
    }: CheckboxProps,
    ref
  ): JSX.Element => {
    const areErrorsEmpty = Boolean(errors) && Object.keys(errors).length === 0;

    return (
      <Box className={S.container({ className })}>
        <CheckboxPrimitiveRoot
          {...props}
          id={name}
          name={name}
          ref={ref}
          disabled={disabled}
          className={S.root({ variant, hasError: Boolean(errors) })}
        >
          {variant === 'regular' && (
            <Box
              className={S.checkboxWrapper({
                variant,
                hasError: Boolean(errors) && !areErrorsEmpty ? true : false,
              })}
            >
              <Box
                as="svg"
                width="20px"
                height="20px"
                viewBox="0 0 20 20"
                className={S.svg()}
              >
                <path
                  className="fill-none stroke-interactive-color-background-enabled stroke-2 transition-all duration-[0.6s] [stroke-dasharray:71px] [stroke-dashoffset:0] group-hover:[stroke-dashoffset:0] group-data-[disabled]:fill-form-color-border-default group-data-[state=checked]:fill-interactive-color-border-enabled"
                  style={{
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                  d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"
                ></path>
                <polyline
                  points="4 12 8 15 16 6"
                  className="ml-1 translate-x-[2px] translate-y-[1px] scale-[.85] fill-none stroke-white stroke-2 transition-all duration-300 [stroke-dasharray:18px] [stroke-dashoffeset:18px] group-data-[state=checked]:[stroke-dashoffset:0]"
                  style={{
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                ></polyline>
              </Box>
            </Box>
          )}

          {variant === 'task' && (
            <Box className={S.checkboxWrapperTask()}>
              <Box
                as="svg"
                width="14px"
                height="12px"
                viewBox="0 0 14 12"
                className={S.svgTask()}
                style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}
              >
                <polyline
                  className="stroke-feedback-color-background-success-enabled stroke-2"
                  points="1 7.6 5 11 13 1"
                ></polyline>
              </Box>
            </Box>
          )}

          {Boolean(label) && (
            <Text as="label" htmlFor={name} className={S.label({ variant })}>
              {label}
            </Text>
          )}
        </CheckboxPrimitiveRoot>

        {Boolean(errors) && !areErrorsEmpty ? (
          <FormErrorMessage variant="outside">
            {errors.message}
          </FormErrorMessage>
        ) : null}
      </Box>
    );
  }
);

CheckboxItem.displayName = 'Item';

export const Checkbox = { Item: CheckboxItem, Fieldset: CheckboxFieldset };
