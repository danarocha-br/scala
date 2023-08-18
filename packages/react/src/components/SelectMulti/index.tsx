import React, { forwardRef } from 'react';
import { Command as CommandPrimitive } from 'cmdk';

import { Icon, iconPath } from '../Icon';
import { FormErrorMessage } from '../FormErrorMessage';
import { Box } from '../Box';
import { Command } from '../Command';
import { Stack } from '../Stack';
import { Spinner } from '../Spinner';
import * as S from './styles';
import { Button } from '../Button';

type Option = {
  readonly label: string;
  readonly value: string;
};

export type SelectMultiProps = {
  label?: string;
  name?: string;
  isEmptyMessage?: string;
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'default' | 'table';
  defaultOptions?: Option[];
  options: Option[];
  icon?: keyof typeof iconPath;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any | undefined;
  onCreateOption?: () => void;
  onCreateOptionLabel?: string;
  className?: string;
};

export const SelectMulti = forwardRef<HTMLInputElement, SelectMultiProps>(
  (
    {
      name,
      label,
      disabled = false,
      loading = false,
      placeholder = 'Selecione',
      options,
      defaultOptions,
      variant = 'default',
      onCreateOptionLabel = 'Create new',
      isEmptyMessage = 'No options found.',
      icon,
      errors,
      className,
      onCreateOption,
      ...props
    }: SelectMultiProps,
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState<Option[]>(
      defaultOptions || []
    );
    const [inputValue, setInputValue] = React.useState('');

    const handleOutsideClick = (
      e: React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
      //@ts-ignore
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setInputValue('');
      }
    };

    const createOption = (label: string) => ({
      label,
      value: label.toLowerCase().replace(/\W/g, ''),
    });

    const handleCreateOption = (inputValue: string) => {
      setIsLoading(true);

      const newOption = createOption(inputValue);
      setIsLoading(false);
      setSelected((prev) => [...prev, newOption]);

      setInputValue('');
    };

    const handleUnselect = React.useCallback((option: Option) => {
      setSelected((prev) => prev.filter((s) => s.value !== option.value));
    }, []);

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        const input = inputRef.current;
        if (input) {
          if (e.key === 'Delete' || e.key === 'Backspace') {
            if (input.value === '') {
              setSelected((prev) => {
                const newSelected = [...prev];
                newSelected.pop();
                return newSelected;
              });
            }
            if (
              selectableItems.filter((option) => option.value !== input.value)
            ) {
              setSelected((prev) => {
                return [...prev];
              });
            }
          }

          if (e.key === 'Escape') {
            input.blur();
          }

          if (e.key === 'Enter') {
            input.value = '';
            input.blur();
          }
        }
      },
      []
    );

    const selectableItems = options.filter(
      (option) => !selected.includes(option)
    );

    const areErrorsEmpty = Boolean(errors) && Object.keys(errors).length === 0;

    return (
      <Stack direction="column-reverse" gap="0" fullWidth>
        {Boolean(errors) && !areErrorsEmpty ? (
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        ) : null}

        <Box
          className={S.container({
            variant,
            isFocused: open,
            isDisabled: disabled,
            hasError: Boolean(errors) && !areErrorsEmpty ? true : false,
            className,
          })}
        >
          <CommandPrimitive onKeyDown={handleKeyDown} className="w-full">
            {variant !== 'table' && (
              <Box
                className={S.label({
                  isFocused: open,
                  isDisabled: disabled,
                })}
              >
                <Stack gap="2" align="center">
                  {Boolean(icon) && (
                    <Icon
                      label="input icon"
                      name={icon || 'user'}
                      size="xs"
                      className={S.icon()}
                    />
                  )}

                  {label}
                </Stack>

                {loading && (
                  <Box
                    as="span"
                    className="select-icon--loading absolute right-2"
                  >
                    <Spinner size="xs" />
                  </Box>
                )}

                {Boolean(errors) && !areErrorsEmpty ? (
                  <Icon
                    className="select-icon--error mr-[-8px]"
                    label="error"
                    name="alert"
                    size="xs"
                    color="danger"
                  />
                ) : null}
              </Box>
            )}

            <div className="w-full rounded-bl-md rounded-br-md">
              <div
                className={S.inputWrapper({
                  isFocused: open,
                  variant,
                  isDisabled: disabled,
                })}
              >
                {selected.map((option) => {
                  return (
                    <div key={option.value} className="bg-neutral-100">
                      {option.label}
                      <button
                        className="ring-offset-background rounded-full focus:ring-ring ml-1 outline-none focus:ring-2 focus:ring-offset-2"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleUnselect(option);
                          }
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        onClick={() => handleUnselect(option)}
                      >
                        <Icon name="close" label="remove option" />
                      </button>
                    </div>
                  );
                })}

                <CommandPrimitive.Input
                  id={name}
                  name={name}
                  ref={inputRef}
                  value={inputValue}
                  onValueChange={setInputValue}
                  // onKeyDown={handleKeyDown}
                  onBlur={(e) => {
                    setOpen(false);
                  }}
                  onMouseDown={(e) => handleOutsideClick(e)}
                  onFocus={() => setOpen(true)}
                  placeholder={selected.length === 0 ? placeholder : ''}
                  className={S.input()}
                  disabled={disabled}
                  {...props}
                />

                <Icon
                  name="chevronDown"
                  label="dropdown"
                  size="xs"
                  color="current"
                />
              </div>
            </div>

            <div className="relative">
              {open && selectableItems.length > 0 ? (
                <div className={S.dialog()}>
                  <Command.Empty className={S.empty()}>
                    {isEmptyMessage}

                    {Boolean(onCreateOption) && (
                      <Button
                        label={onCreateOptionLabel}
                        color="secondary"
                        size="sm"
                        fullWidth
                        onClick={onCreateOption}
                      />
                    )}
                  </Command.Empty>

                  <Command.Group className="h-full overflow-auto">
                    {selectableItems.map((option) => {
                      return (
                        <Command.Item
                          key={option.value}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setInputValue('');
                          }}
                          onSelect={(value) => {
                            setInputValue('');
                            setSelected((prev) => {
                              const findOption = selectableItems.filter(
                                (item) => item.value !== option.value
                              );

                              const optionDoesntExist = findOption.length
                                ? false
                                : true;

                              if (optionDoesntExist) {
                                return [...prev];
                              } else return [...prev, option];
                            });
                          }}
                          className="cursor-pointer"
                        >
                          {option.label}
                        </Command.Item>
                      );
                    })}
                  </Command.Group>
                </div>
              ) : null}
            </div>
          </CommandPrimitive>
        </Box>
      </Stack>
    );
  }
);

SelectMulti.displayName = 'SelectMulti';
