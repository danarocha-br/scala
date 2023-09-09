import React, { useEffect, useMemo, useRef, useState } from 'react';
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
import {
  handleCreateOption,
  handleDeleteAllOptions,
  handleDeleteSingleOption,
  onComboboxOpenChange,
  toggleMultiOptions,
  toggleSingleOption,
} from '../Selectable/helpers';
import * as S from './styles';
import { Chip } from '../Chip';
import { MultiIcon } from '../Selectable/MultiIcon';
import { Shortcut } from '../Shortcut';

type SelectOption = {
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
  customCreatableItem?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any | undefined;
  className?: string;
};

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      label,
      truncationLabel = 'selected',
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
      customCreatableItem,
      errors,
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isFocused, toggleFocus] = useToggle(false);
    const [userOptions, setUserOptions] = useState<SelectOption[]>(options);
    const [openCombobox, setOpenCombobox] = useState(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [debouncedInputValue, setDebouncedInputValue] = useState(inputValue);
    const [selectedValues, setSelectedValues] =
      useState<SelectOption[]>(defaultOptions);

    useEffect(() => {
      const timerId = setTimeout(() => {
        setDebouncedInputValue(inputValue);
      }, 300); // 300ms delay

      return () => {
        clearTimeout(timerId);
      };
    }, [inputValue]);

    const areErrorsEmpty = useMemo(
      () => Boolean(errors) && Object.keys(errors).length === 0,
      [errors]
    );

    const selectedOptionHasSlot =
      selectedValues?.some((option) => option.slot) || false;

    /**
     * Helper functions.
     */
    const onCreateOption = () => {
      handleCreateOption(
        inputValue,
        setUserOptions,
        setSelectedValues,
        setInputValue
      );
    };

    const onDeleteSingleOption = (option: SelectOption) => {
      handleDeleteSingleOption(option, setSelectedValues);
    };

    const onDeleteAll = () => {
      handleDeleteAllOptions(setSelectedValues);
    };

    const onToggleMultiOptions = (option: SelectOption) => {
      toggleMultiOptions(option, setSelectedValues);
    };

    const onToggleSingleOption = (option: SelectOption) => {
      toggleSingleOption(option, setSelectedValues);
    };

    const onComboboxStateChange = () => {
      onComboboxOpenChange(inputRef, openCombobox, setOpenCombobox, disabled);
      // toggleFocus();
    };

    return (
      <Stack direction="column-reverse" gap="0" fullWidth>
        {Boolean(errors) && !areErrorsEmpty ? (
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        ) : null}

        <Box
          className={S.container({
            variant,
            isFocused: openCombobox,
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
            open={!disabled && openCombobox}
            onOpenChange={onComboboxStateChange}
            className="w-full"
            trigger={
              <div className="w-full rounded-bl-md rounded-br-md">
                <Button
                  ref={ref}
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
                  <span
                    className={S.chips({
                      hasSlot: selectedOptionHasSlot ? true : false,
                    })}
                  >
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

                    <Stack as="span" gap="2" align="center">
                      {!isMulti &&
                        selectedValues.length === 1 &&
                        options &&
                        options
                          .filter(
                            (option) => option.value === selectedValues[0].value
                          )
                          .map((option) => (
                            <Stack
                              as="span"
                              gap="2"
                              align="center"
                              key={option.value}
                            >
                              {!!option.slot && option.slot} {option.label}
                            </Stack>
                          ))}
                    </Stack>

                    {isMulti && selectedValues.length === 1 && (
                      <Chip
                        label={selectedValues[0].label}
                        color="neutral"
                        removable
                        onRemove={() => onDeleteSingleOption(selectedValues[0])}
                        hasMaxWidth
                      >
                        {!!selectedValues[0].slot && selectedValues[0].slot}
                      </Chip>
                    )}

                    {isMulti &&
                      selectedValues.length === 2 &&
                      selectedValues.map((option) => (
                        <Chip
                          key={option.value}
                          label={option.label}
                          color="neutral"
                          removable
                          onRemove={() => onDeleteSingleOption(option)}
                          hasMaxWidth
                        >
                          {!!option.slot && option.slot}
                        </Chip>
                      ))}

                    {isMulti && selectedValues.length > 2 && (
                      <>
                        <b>{selectedValues.length}</b>
                        {truncationLabel}
                      </>
                    )}
                  </span>

                  {isClearable && isMulti && selectedValues.length >= 1 && (
                    <>
                      <IconButton
                        type="button"
                        icon="close"
                        label="remove selection"
                        size="xs"
                        className={S.deleteButton({ isFocused: openCombobox })}
                        onClick={onDeleteAll}
                      />
                      <span className="h-4 border-r border-action-color-border-transparent-enabled/50" />
                    </>
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
            <Popover.Content unstyled className="w-full min-w-[220px] p-1">
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
                  {userOptions.map((option) => {
                    const isActive = selectedValues.some(
                      (selectedValue) => selectedValue.value === option.value
                    );

                    return (
                      <Command.Item
                        key={option.value}
                        value={option.value}
                        onSelect={() =>
                          isMulti
                            ? onToggleMultiOptions(option)
                            : onToggleSingleOption(option)
                        }
                        className={S.item({
                          isActive,
                          isMulti,
                        })}
                      >
                        {isMulti && <MultiIcon isActive={isActive} />}

                        <div className="flex-1 truncate">{option.label}</div>

                        {Boolean(option.slot) && (
                          <div className="ml-2">{option.slot}</div>
                        )}
                      </Command.Item>
                    );
                  })}
                  {isCreatable && !customCreatableItem && (
                    <CommandItemCreate
                      createOptionLabel={createOptionLabel}
                      onSelect={onCreateOption}
                      {...{ debouncedInputValue, options }}
                    />
                  )}

                  {isCreatable && customCreatableItem && customCreatableItem}
                </Command.Group>

                {Boolean(onAction) && (
                  <>
                    <Command.Separator alwaysRender className="my-1" />
                    <Command.Group>
                      <Command.Item
                        value={`:${debouncedInputValue}:`}
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
  debouncedInputValue,
  options,
  onSelect,
  createOptionLabel,
}: {
  debouncedInputValue: string;
  options: SelectOption[];
  onSelect: () => void;
  createOptionLabel?: string;
}) => {
  const hasNoOptions = !options.some(
    ({ value }) => value === debouncedInputValue.toLowerCase()
  );

  const isInputValid = debouncedInputValue.length > 0;

  const canBeShown = isInputValid && hasNoOptions;

  return canBeShown ? (
    <>
      <Command.Item
        key={debouncedInputValue}
        value={debouncedInputValue}
        className="justify-center text-sm text-text-color-body-lighter"
        onSelect={onSelect}
      >
        {createOptionLabel} {debouncedInputValue}
        <Shortcut shortcut="⏎" />
      </Command.Item>
    </>
  ) : null;
};
