import {
  ElementRef,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Icon, iconPath } from '../Icon';
import { Popover } from '../Popover';
import { Command } from '../Command';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { IconButton } from '../IconButton';
import { Chip } from '../Chip';

import * as S from './styles';
import { Shortcut } from '../Shortcut';
import { MultiIcon } from './MultiIcon';
import { Spinner } from '../Spinner';
import {
  handleCreateOption,
  handleDeleteAllOptions,
  handleDeleteSingleOption,
  onComboboxOpenChange,
  toggleMultiOptions,
  toggleSingleOption,
} from './helpers';

export type SelectOption = {
  readonly label: string;
  readonly value: string;
  readonly slot?: React.ReactNode;
};

export type SelectableButtonProps = {
  className?: string;
  children?: React.ReactNode;
  icon?: keyof typeof iconPath | null;
  label?: string;
  isActive?: boolean;
  disabled?: boolean;
  loading?: boolean;
  hasError?: boolean;
};

export const SelectableButton = forwardRef<
  ElementRef<'div'>,
  SelectableButtonProps
>(
  ({
    className = '',
    children,
    icon,
    label,
    isActive,
    disabled = false,
    loading = false,
    hasError = false,
    ...props
  }: SelectableButtonProps): JSX.Element => (
    <div
      className={S.buttonContainer({ isActive, className, hasError })}
      role="combobox"
      aria-disabled={disabled || loading}
      {...props}
    >
      {!!icon && <Icon name={icon} size="sm" label="icon" color="current" />}
      {!!label && (
        <Text size="sm" color="current">
          {label}
        </Text>
      )}
      {children && children}
    </div>
  )
);

SelectableButton.displayName = 'Button';

export type SelectableMenuProps = {
  name?: string;
  value?: string;
  icon?: keyof typeof iconPath;
  emptyLabel?: string;
  placeholder?: string;
  disabled?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  isCreatable?: boolean;
  isMulti: boolean;
  options: SelectOption[];
  defaultOptions?: SelectOption[];
  truncationLabel?: string;
  createOptionLabel?: string;
  searchPlaceholder?: string;
  customCreatableItem?: React.ReactNode;
  /**  action for the extra button on the menu options **/
  actionLabel?: string;
  onAction?: () => void;
  actionIcon?: keyof typeof iconPath;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any | undefined;
  className?: string;
  loading?: boolean;
};

export const SelectableMenu = forwardRef<
  ElementRef<typeof SelectableButton>,
  SelectableMenuProps
>(
  (
    {
      placeholder,
      options,
      defaultOptions = [],
      icon,
      truncationLabel = 'selected',
      emptyLabel = 'No items found.',
      searchPlaceholder = 'Search...',
      createOptionLabel = 'Create new',
      onAction,
      actionLabel = 'Edit',
      actionIcon,
      isSearchable = true,
      isCreatable = false,
      isClearable = false,
      isMulti = false,
      customCreatableItem,
      className = '',
      errors,
      disabled = false,
      loading = false,
    }: SelectableMenuProps,
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    //TODO: check how to handle and even if necessary long lists: maybe use react-window
    const [userOptions, setUserOptions] = useState<SelectOption[] | []>(
      options
    );
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
    };

    return (
      <Stack gap="0" fullWidth className={className}>
        <Popover.Root
          open={!disabled && openCombobox}
          onOpenChange={onComboboxStateChange}
          trigger={
            <Selectable.Button
              ref={ref}
              icon={selectedOptionHasSlot ? null : icon}
              disabled={disabled}
              loading={loading}
              aria-expanded={openCombobox}
              hasError={Boolean(errors) && !areErrorsEmpty ? true : false}
            >
              <span
                className={S.chips({
                  hasSlot: selectedOptionHasSlot ? true : false,
                })}
              >
                {selectedValues.length === 0 && <span>{placeholder}</span>}

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

              {loading && <Spinner size="sm" className="-ml-2" />}

              {isClearable && isMulti && selectedValues.length >= 1 && (
                <>
                  <span className="h-4 border-l border-action-color-border-transparent-enabled" />
                  <IconButton
                    type="button"
                    icon="close"
                    label="remove selection"
                    size="xs"
                    className={S.deleteButton()}
                    onClick={onDeleteAll}
                  />
                </>
              )}
            </Selectable.Button>
          }
        >
          <Popover.Content
            align="start"
            unstyled
            className="w-full min-w-[120px] p-1"
          >
            <Command.Root className="w-full" loop>
              {isSearchable && (
                <Command.Input
                  ref={inputRef}
                  placeholder={searchPlaceholder}
                  value={inputValue}
                  onValueChange={setInputValue}
                />
              )}

              {loading && <Command.Loading />}

              {!isCreatable && (
                <Command.Empty className={S.empty()}>
                  {emptyLabel}
                </Command.Empty>
              )}

              {!loading && (
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
              )}

              {Boolean(onAction) && !loading && (
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
      </Stack>
    );
  }
);
SelectableMenu.displayName = 'Menu';

export const Selectable = {
  Button: SelectableButton,
  Menu: SelectableMenu,
};

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
