import { cva } from 'class-variance-authority';

export const dropdownMenuContent = cva([
  'font-sans',
  'bg-surface-color-background-default',
  'rounded-sm',
  'shadow-[0px -7px 20px 0px #00000010, 0px 6.3px 8.5px 0px #00000000, 0px 30px 48px 0px #00000026]',
  'w-full',
  'min-w-[200px]',
  'p-1',

  'motion-safe:duration-500',
  'motion-safe:ease-[cubic-bezier(0.16, 1, 0.3, 1)]',
  'motion-safe:will-change-[transform, opacity]',
  'motion-safe:data-[state=open]:data-[side=top]:animate-[slide-up-and-fade]',
  'motion-safe:data-[state=open]:data-[side=right]:animate-[slide-right-and-fade]',
  'motion-safe:data-[state=open]:data-[side=left]:animate-[slide-left-and-fade]',
  'motion-safe:data-[state=open]:data-[side=down]:animate-[slide-down-and-fade]',
]);

export const dropdownMenuArrow = cva([
  'fill-current',
  'fill-text-color-on-dark',
  'data-[mode=dark]:data-[mode=dark]:fill-text-color-on-light',
]);

const itemStyles = [
  'text-text-color-body-lighter',
  'font-normal',
  'text-sm',
  'text-left',
  'rounded-sm',
  'border',
  'border-dashed',
  'border-transparent',
  'h-5',
  'px-3',
  'flex',
  'items-center',
  'cursor-pointer',
  'transition-all',
  'outline-none',
  'select-none',

  'hover:text-text-color-body',
  'hover:bg-interactive-color-background-enabled',
  'hover:data-[mode=dark]:bg-royal-500',

  'focus:text-text-color-body',
  'focus:bg-interactive-color-text-enabled',
  'focus:border-interactive-color-background-disabled',
  'focus:outline-none',

  'data-[disabled]:text-text-color-caption',
  'data-[disabled]:cursor-not-allowed',
  'data-[disabled]:pointer-events-none',

  '[&_>_a]:flex',
  '[&_>_a]:justify-between',
  '[&_>_a]:w-full',
];

export const dropdownItem = cva(itemStyles);

export const rightSlot = cva([
  'text-text-color-caption',
  'text-sm',
  'focus:text-text-color-body',
  'data-[disabled]:text-action-color-background-transparent-hover',
]);

export const dropdownSeparator = cva([
  'bg-surface-color-background-hover',
  'h-[1px]',
  'my-2',
  'relative',
]);
