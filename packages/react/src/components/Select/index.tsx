import React, { useRef, useState } from 'react';
import { Button } from '@ariakit/react';

import { Icon, iconPath } from '../Icon';
import { Popover } from '../Popover';
import { Command } from '../Command';
import { Stack } from '../Stack';
import { FormErrorMessage } from '../FormErrorMessage';
import { Box } from '../Box';
import { Spinner } from '../Spinner';
import { IconButton } from '../IconButton';
import { useToggle } from '../../hooks/useToggle';
import * as S from './styles';

export type SelectOption = {
  readonly label: string;
  readonly value: string;
  readonly slot?: React.ReactNode;
};

export type SelectProps = {
  label?: string;
  name?: string;
  value?: SelectOption;
  emptyMessage?: string;
  placeholder?: string;
  truncationLabel?: string;
  createOptionLabel?: string;
  searchPlaceholder?: string;
  disabled?: boolean;
  loading?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  isCreatable?: boolean;
  isMulti: boolean;
  options: SelectOption[];
  defaultOptions?: SelectOption[];
  variant?: 'default' | 'table';
  icon?: keyof typeof iconPath;
  actionLabel?: string;
  /**  action for the extra button on the menu options **/
  onAction?: () => void;
  actionIcon?: keyof typeof iconPath;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any | undefined;
  className?: string;
};

export const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      label,
      truncationLabel = 'labels selected',
      placeholder,
      name,
      options,
      defaultOptions = [],
      onAction,
      actionLabel = 'Edit',
      searchPlaceholder = 'Search...',
      createOptionLabel = 'Create new',
      emptyMessage = 'No items found.',
      actionIcon,
      variant = 'default',
      icon,
      disabled = false,
      loading = false,
      isSearchable = true,
      isCreatable = false,
      isClearable = false,
      isMulti = false,
      className,
      errors,
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [userOptions, setUserOptions] = useState<SelectOption[]>(options);
    const [openCombobox, setOpenCombobox] = useState(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedValues, setSelectedValues] =
      useState<SelectOption[]>(defaultOptions);
    const [isFocused, toggleFocus] = useToggle(false);

    const createOption = (name: string) => {
      const newOption = {
        value: name.toLowerCase(),
        label: name,
      };
      setUserOptions((prev) => [...prev, newOption]);
      setSelectedValues((prev) => [...prev, newOption]);
      setInputValue('');
    };

    const toggleOptionMulti = (option: SelectOption) => {
      setSelectedValues((currentOptions) => {
        if (!currentOptions.includes(option)) {
          return [...currentOptions, option];
        } else {
          return currentOptions.filter((l) => l.value !== option.value);
        }
      });
      // inputRef?.current?.focus();
    };
    const toggleOptionSingle = (option: SelectOption) => {
      setSelectedValues((currentOptions) => {
        if (!currentOptions.includes(option)) {
          return [option];
        } else {
          return currentOptions.filter((l) => l.value !== option.value);
        }
      });
    };

    const updateOption = (option: SelectOption, newOption: SelectOption) => {
      setUserOptions((prev) =>
        prev.map((f) => (f.value === option.value ? newOption : f))
      );
      setSelectedValues((prev) =>
        prev.map((f) => (f.value === option.value ? newOption : f))
      );
    };

    const deleteOption = (option: SelectOption) => {
      setUserOptions((prev) => prev.filter((f) => f.value !== option.value));
      setSelectedValues((prev) => prev.filter((f) => f.value !== option.value));
    };

    const handleDeleteAllOptions = () => {
      setUserOptions([]);
      setSelectedValues([]);
    };

    const onComboboxOpenChange = (value: boolean) => {
      inputRef.current?.blur(); // HACK: otherwise, would scroll automatically to the bottom of page
      setOpenCombobox(value);
    };

    const areErrorsEmpty = Boolean(errors) && Object.keys(errors).length === 0;

    return (
      <Stack direction="column-reverse" gap="0" fullWidth>
        {Boolean(errors) && !areErrorsEmpty ? (
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        ) : null}

        <Box
          className={S.container({
            variant,
            isFocused,
            isDisabled: disabled,
            hasError: Boolean(errors) && !areErrorsEmpty ? true : false,
            className,
          })}
        >
          {variant !== 'table' && (
            <Box
              className={S.label({
                isFocused: openCombobox,
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

          <Popover.Root
            open={openCombobox}
            onOpenChange={onComboboxOpenChange}
            trigger={
              <div className="w-full rounded-bl-md rounded-br-md">
                <Button
                  role="combobox"
                  name={name}
                  aria-expanded={openCombobox}
                  onFocus={() => toggleFocus()}
                  onBlur={() => toggleFocus()}
                  className={S.inputWrapper({
                    isFocused: openCombobox,
                    variant,
                    isDisabled: disabled,
                  })}
                >
                  <span className="w-full truncate text-left">
                    {selectedValues.length === 0 && (
                      <span
                        className={S.placeholder({
                          isDisabled: disabled,
                          isFocused: openCombobox,
                        })}
                      >
                        {placeholder}
                      </span>
                    )}

                    {!isMulti &&
                      selectedValues.length === 1 &&
                      options.find(
                        (option) => option.value === selectedValues[0].value
                      )?.label}
                    {isMulti &&
                      selectedValues.length === 1 &&
                      selectedValues[0].label}
                    {isMulti &&
                      selectedValues.length === 2 &&
                      selectedValues.map(({ label }) => label).join(', ')}
                    {isMulti &&
                      selectedValues.length > 2 &&
                      `${selectedValues.length} ${truncationLabel}`}
                  </span>

                  {isClearable && isMulti && selectedValues.length >= 1 && (
                    <IconButton
                      type="button"
                      icon="close"
                      label="remove selection"
                      size="xs"
                      className={S.deleteButton({
                        isFocused: isFocused || openCombobox,
                      })}
                      onClick={handleDeleteAllOptions}
                    />
                  )}
                  <Icon
                    name="chevronDown"
                    label="open menu"
                    size="xs"
                    className={`ml-auto shrink-0 ${S.placeholder({
                      isDisabled: disabled,
                      isFocused: openCombobox,
                    })}`}
                  />
                </Button>
              </div>
            }
          >
            <Popover.Content unstyled className="w-full min-w-[120px] p-1">
              <Command.Root className="w-full" loop>
                {isSearchable && (
                  <Command.Input
                    ref={inputRef}
                    placeholder={searchPlaceholder}
                    value={inputValue}
                    onValueChange={setInputValue}
                  />
                )}

                {!isCreatable && (
                  <Command.Empty className={S.empty()}>
                    {emptyMessage}
                  </Command.Empty>
                )}

                <Command.Group className="max-h-[240px] overflow-auto p-1">
                  {options.map((option) => {
                    const isActive = selectedValues.includes(option);
                    return (
                      <Command.Item
                        key={option.value}
                        value={option.value}
                        onSelect={() =>
                          isMulti
                            ? toggleOptionMulti(option)
                            : toggleOptionSingle(option)
                        }
                        className={S.item({
                          isActive,
                          isMulti,
                        })}
                      >
                        {isMulti && (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path
                                id="70bf5133"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.99996 3.20841C8.36646 3.20841 6.86118 3.34312 5.65335 3.50264C4.51398 3.65311 3.65299 4.51411 3.50252 5.65347C3.343 6.86131 3.20829 8.36656 3.20829 10.0001C3.20829 11.6336 3.343 13.1389 3.50252 14.3467C3.65299 15.4861 4.51398 16.3471 5.65335 16.4976C6.86118 16.6571 8.36646 16.7917 9.99996 16.7917C11.6335 16.7917 13.1387 16.6571 14.3465 16.4976C15.486 16.3471 16.347 15.4861 16.4974 14.3467C16.657 13.1389 16.7916 11.6336 16.7916 10.0001C16.7916 8.36656 16.657 6.86131 16.4974 5.65347C16.347 4.51411 15.486 3.65311 14.3465 3.50264C13.1387 3.34312 11.6335 3.20841 9.99996 3.20841ZM2.09804 5.46798C2.33242 3.69337 3.69325 2.33254 5.46786 2.09817C6.72228 1.9325 8.29101 1.79175 9.99996 1.79175C11.7089 1.79175 13.2776 1.9325 14.532 2.09817C16.3067 2.33254 17.6675 3.69337 17.9019 5.46798C18.0675 6.72241 18.2083 8.29115 18.2083 10.0001C18.2083 11.7091 18.0675 13.2777 17.9019 14.5321C17.6675 16.3068 16.3067 17.6676 14.532 17.902C13.2776 18.0676 11.7089 18.2084 9.99996 18.2084C8.29101 18.2084 6.72228 18.0676 5.46786 17.902C3.69325 17.6676 2.33242 16.3068 2.09804 14.5321C1.93238 13.2777 1.79163 11.7091 1.79163 10.0001C1.79163 8.29115 1.93238 6.72241 2.09804 5.46798Z"
                                className={`fill-text-color-body-lighter opacity-0 transition-all  group-hover/item:opacity-100 ${
                                  isActive ? 'opacity-100' : 'opacity-0'
                                }`}
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.7664 8.02812C15.0779 7.71669 15.0779 7.21169 14.7664 6.90023C14.455 6.58876 13.95 6.58876 13.6386 6.90023L9.1554 11.3834L7.19479 9.42365C6.88325 9.11217 6.37826 9.11228 6.06686 9.42386C5.75545 9.73534 5.75556 10.2404 6.06709 10.5517L8.59167 13.0752C8.90315 13.3866 9.40806 13.3866 9.71943 13.0751L14.7664 8.02812Z"
                                className={`check fill-text-color-body-lighter ${
                                  isActive ? 'opacity-100' : 'opacity-0'
                                }`}
                              ></path>
                            </g>
                          </svg>
                        )}

                        <div className="flex-1 truncate">{option.label}</div>

                        {Boolean(option.slot) && (
                          <div className="ml-2">{option.slot}</div>
                        )}
                      </Command.Item>
                    );
                  })}
                  {isCreatable && (
                    <CommandItemCreate
                      createOptionLabel={createOptionLabel}
                      onSelect={() => createOption(inputValue)}
                      {...{ inputValue, options }}
                    />
                  )}
                </Command.Group>

                {Boolean(onAction) && (
                  <>
                    <Command.Separator alwaysRender className="my-1" />
                    <Command.Group>
                      <Command.Item
                        value={`:${inputValue}:`}
                        onSelect={onAction}
                        className="mb-1 justify-center py-1 text-sm text-text-color-body-lighter"
                      >
                        {Boolean(actionIcon) && (
                          <Icon
                            name={actionIcon || 'edit'}
                            label=""
                            color="body-lighter"
                            size="sm"
                            className="select-action--icon"
                          />
                        )}
                        {actionLabel}
                      </Command.Item>
                    </Command.Group>
                  </>
                )}
              </Command.Root>
            </Popover.Content>
          </Popover.Root>
        </Box>
      </Stack>
    );
  }
);

const CommandItemCreate = ({
  inputValue,
  options,
  onSelect,
  createOptionLabel,
}: {
  inputValue: string;
  options: SelectOption[];
  onSelect: () => void;
  createOptionLabel?: string;
}) => {
  const hasNoOptions = !options
    .map(({ value }) => value)
    .includes(`${inputValue.toLowerCase()}`);

  const render = inputValue !== '' && hasNoOptions;

  if (!render) return null;

  // TODO: BUG: whenever a space is appended, the Create-Button will not be shown.
  return (
    <Command.Item
      key={`${inputValue}`}
      value={`${inputValue}`}
      className="justify-center text-sm text-text-color-body-lighter"
      onSelect={onSelect}
    >
      {createOptionLabel} &quot;{inputValue}&quot;
    </Command.Item>
  );
};
