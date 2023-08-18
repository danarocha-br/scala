import { ElementRef, forwardRef, useCallback, useState } from 'react';

import { Box } from '../Box';
import { Stack } from '../Stack';
import { Icon, iconPath } from '../Icon';
import { TextInput, TextInputProps } from '../TextInput';
import * as S from './styles';

export type PasswordInputProps = {
  name?: string;
  label: string;
  placeholder?: string;
  icon?: keyof typeof iconPath;
  value?: string;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> &
  TextInputProps;

export const PasswordInput = forwardRef<
  ElementRef<typeof TextInput>,
  PasswordInputProps
>(
  (
    {
      name,
      label,
      placeholder,
      icon,
      value,
      className,
      ...props
    }: PasswordInputProps,
    ref
  ): JSX.Element => {
    const [isVisible, setVisible] = useState(false);
    const [isHovered, setHover] = useState(false);

    const handleTooglePasswordMask = useCallback(() => {
      setVisible(!isVisible);
    }, [isVisible]);

    const handleHover = useCallback(() => {
      setHover(true);
    }, []);

    const handleUnhover = useCallback(() => {
      setHover(false);
    }, []);

    return (
      <Stack
        align="center"
        justify="end"
        fullWidth
        className={`relative ${className}`}
        {...props}
      >
        <Box
          className="relative w-full"
          onMouseEnter={handleHover}
          onMouseLeave={handleUnhover}
        >
          <TextInput
            id={name}
            name={name}
            label={label}
            placeholder={placeholder}
            icon={icon}
            type={isVisible ? 'text' : 'password'}
            value={value}
            ref={ref}
            {...props}
          />
        </Box>

        <Box
          as="button"
          className={S.button()}
          aria-label="view password"
          type="button"
          onClick={handleTooglePasswordMask}
        >
          <Icon
            label="view password"
            name={`${isVisible ? 'hide' : 'eye'}`}
            size="sm"
            color={`${isHovered ? 'on-dark' : 'body'}`}
            className="input__icon--password"
          />
        </Box>
      </Stack>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
