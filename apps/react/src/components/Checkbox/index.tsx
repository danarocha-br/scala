import { PrimitiveButtonProps } from '@radix-ui/react-checkbox';
import { CSS } from '../../styles';

import { FormErrorMessage } from '../FormErrorMessage';
import { Text } from '../Text';

import * as S from './styles';

export type CheckboxFieldsetProps = {
  legend: string;
  children: React.ReactNode;
  css?: CSS;
};

export type CheckboxProps = {
  name: string;
  label?: string;
  variant: 'regular' | 'task';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any | undefined;
  disabled?: boolean;
  css?: CSS;
} & Omit<PrimitiveButtonProps, 'name'>;

const CheckboxFieldset = ({ legend, children, css }: CheckboxFieldsetProps) => (
  <S.Fieldset aria-labelledby={legend} css={css}>
    {Boolean(legend) && (
      <Text
        as="legend"
        size="sm"
        color="body-lighter"
        css={{ mb: '$spacing-3' }}
      >
        {legend}
      </Text>
    )}

    {children}
  </S.Fieldset>
);
CheckboxFieldset.displayName = 'Fieldset';

const CheckboxItem = ({
  css,
  variant = 'regular',
  name,
  errors,
  label,
  disabled = false,
  ...props
}: CheckboxProps): JSX.Element => {
  const areErrorsEmpty = Boolean(errors) && Object.keys(errors).length === 0;

  return (
    <S.Container css={css}>
      <S.Root
        {...props}
        id={name}
        name={name}
        disabled={disabled}
        variant={variant}
        hasError={Boolean(errors)}
      >
        {variant === 'regular' && (
          <S.CheckboxWrapper
            hasError={Boolean(errors) && !areErrorsEmpty ? true : false}
          >
            <S.Svg width="20px" height="20px" viewBox="0 0 20 20">
              <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
              <polyline points="4 12 8 15 16 6"></polyline>
            </S.Svg>
          </S.CheckboxWrapper>
        )}

        {variant === 'task' && (
          <S.CheckboxWrapperTask>
            <S.SvgTask width="14px" height="12px" viewBox="0 0 14 12">
              <polyline points="1 7.6 5 11 13 1"></polyline>
            </S.SvgTask>
          </S.CheckboxWrapperTask>
        )}

        {Boolean(label) && (
          <Text as="label" htmlFor={name}>
            {label}
          </Text>
        )}
      </S.Root>

      {Boolean(errors) && !areErrorsEmpty ? (
        <FormErrorMessage variant="outside">{errors.message}</FormErrorMessage>
      ) : null}
    </S.Container>
  );
};

CheckboxItem.displayName = 'Item';

export const Checkbox = { Item: CheckboxItem, Fieldset: CheckboxFieldset };
