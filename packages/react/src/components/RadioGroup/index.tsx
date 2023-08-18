import React, { ElementRef, forwardRef } from 'react';
import * as PrimitiveRadioGroup from '@radix-ui/react-radio-group';

import { Icon, iconPath } from '../Icon';
import { Text } from '../Text';
import { FormErrorMessage } from '../FormErrorMessage';
import * as S from './styles';

export type RadioOptionProps = {
  value: string;
  label: string;
  icon?: keyof typeof iconPath;
  color?: string;
};

export type RadioGroupProps = {
  name?: string;
  value?: string;
  defaultValue?: string;
  /** to use for the group title */
  legend?: string;
  options: RadioOptionProps[];
  variant?: 'primary' | 'secondary' | 'boxed';
  disabled?: boolean;
  fullWidth?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any | undefined;
  onChange?: (value: string) => void;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'>;

export const RadioGroup = forwardRef<
  ElementRef<typeof PrimitiveRadioGroup.Root>,
  RadioGroupProps
>(
  (
    {
      name,
      value,
      legend,
      variant = 'primary',
      disabled = false,
      fullWidth = false,
      errors,
      defaultValue,
      options,
      onChange,
      className = '',
    }: RadioGroupProps,
    ref
  ): JSX.Element => {
    const areErrorsEmpty = Boolean(errors) && Object.keys(errors).length === 0;

    return (
      <PrimitiveRadioGroup.Root
        ref={ref}
        defaultValue={defaultValue}
        aria-label={legend}
        name={name}
        disabled={disabled}
        value={value}
        onValueChange={onChange}
        className={S.root({ fullWidth, className })}
      >
        <Text
          as="legend"
          size="sm"
          color="body-lighter"
          weight="regular"
          className="mb-2"
        >
          {legend}
        </Text>

        <fieldset
          className={S.fieldset({ variant, fullWidth })}
          tabIndex={0}
          role="radiogroup"
          aria-labelledby={legend}
        >
          {React.Children.toArray(
            options.map((option) => (
              <PrimitiveRadioGroup.Item
                value={option.value}
                id={option.value}
                className={S.item({
                  fullWidth,
                  variant,
                  isDisabled: disabled,
                  hasError: !!errors,
                  hasIcon: !!option.icon,
                })}
              >
                <svg
                  className={S.svg({
                    variant,
                    hasError: !!errors,
                    isDisabled: disabled,
                  })}
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="9"></circle>
                  <path
                    d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                    className={S.svgInner()}
                  ></path>
                  <path
                    d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                    className={S.svgOuter({variant})}
                  ></path>
                </svg>

                {Boolean(option.icon) && (
                  <Icon
                    label={option.icon || 'icon'}
                    name={option.icon || 'design'}
                    size="md"
                    color="body"
                    className={S.radioIcon({ variant, isDisabled: disabled })}
                  />
                )}

                <Text
                  as="label"
                  className={option.label}
                  htmlFor={option.value}
                >
                  {option.label}
                </Text>
              </PrimitiveRadioGroup.Item>
            ))
          )}
        </fieldset>

        {Boolean(errors) && !areErrorsEmpty ? (
          <FormErrorMessage variant="outside">
            {errors.message}
          </FormErrorMessage>
        ) : null}
      </PrimitiveRadioGroup.Root>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';
