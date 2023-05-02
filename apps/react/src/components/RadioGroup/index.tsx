import React from 'react';
import { CSS } from '../../styles';

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
  name: string;
  value: string;
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
  css?: CSS;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'>;

export const RadioGroup = ({
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
  css,
}: RadioGroupProps): JSX.Element => {
  const areErrorsEmpty = Boolean(errors) && Object.keys(errors).length === 0;

  return (
    <S.Root
      defaultValue={defaultValue}
      aria-label={legend}
      name={name}
      disabled={disabled}
      value={value}
      onValueChange={onChange}
      css={css}
      fullWidth={fullWidth}
    >
      <Text
        as="legend"
        size="sm"
        color="body-lighter"
        weight="regular"
        css={{ mb: '$spacing-2' }}
      >
        {legend}
      </Text>

      <S.Fieldset
        tabIndex={0}
        role="radiogroup"
        aria-labelledby={legend}
        variant={variant}
        fullWidth={fullWidth}
      >
        {React.Children.toArray(
          options.map((option) => (
            <S.Item
              value={option.value}
              id={option.value}
              variant={variant}
              hasError={Boolean(errors)}
              isDisabled={disabled}
              hasIcon={!!option.icon}
              fullWidth={fullWidth}
            >
              <S.Svg
                width="20px"
                height="20px"
                viewBox="0 0 20 20"
                hasError={Boolean(errors)}
                isDisabled={disabled}
              >
                <circle cx="10" cy="10" r="9"></circle>
                <path
                  d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                  className="inner"
                ></path>
                <path
                  d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                  className="outer"
                ></path>
              </S.Svg>

              {Boolean(option.icon) && (
                <Icon
                  label={option.icon || 'icon'}
                  name={option.icon || 'design'}
                  size="md"
                  color="body"
                  className="radio__icon"
                />
              )}

              <Text as="label" className={option.label} htmlFor={option.value}>
                {option.label}
              </Text>
            </S.Item>
          ))
        )}
      </S.Fieldset>

      {Boolean(errors) && !areErrorsEmpty ? (
        <FormErrorMessage variant="outside">{errors.message}</FormErrorMessage>
      ) : null}
    </S.Root>
  );
};

RadioGroup.displayName = 'RadioGroup';
