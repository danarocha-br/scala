import { ElementRef, forwardRef } from 'react';
import {
  PrimitiveButtonProps,
  Root as CheckboxPrimitiveRoot,
} from '@radix-ui/react-checkbox';

import { FormErrorMessage } from '../FormErrorMessage';
import { Text } from '../Text';
import { Box } from '../Box';
import * as S from './styles';

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
      className = '',
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
                  className={S.svgPathRegular({ disabled })}
                  style={{
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  }}
                  d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"
                ></path>
                <polyline
                  points="4 12 8 15 16 6"
                  className={S.svgPolylineRegular()}
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
                height="13px"
                viewBox="0 0 20 20"
                className={S.svgTask()}
                style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}
              >
                <polyline
                  className={S.svgPolylineTask()}
                  points="5 12 10 17 19 8"
                  style={{
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: 2,
                  }}
                />
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
