import { cva } from 'class-variance-authority';

export const panelOverlay = cva(
  [
    'bg-action-color-background-primary-enabled',
    'fixed',
    'inset-0',
    'left-0',
    'z-max',
    'motion-safe:animate-panel-overlay',
  ],
  {
    variants: {
      isNavigationOpen: {
        true: ['left-[240px]'],
        false: ['left-0'],
      },
    },
  }
);

export const panelContent = cva(
  [
    'bg-surface-color-background-subdued',
    'rounded-tr-md',
    'rounded-br-md',
    'shadow-high',
    'sticky',
    'top-0',
    'bottom-0',
    'shadow-[hsl(206_22%_7%_/_15%)_10px_0px_30px_-20px]',
    'w-full',
    'h-screen',
    'z-max',

    'focus:outline-none',

    // 'motion-safe:animate-show-overlay-content',
    // 'delay-[10ms]',

    'md:w-[384px]',
  ],
  {
    variants: {
      isNavigationOpen: {
        true: ['left-0', 'lg:left-[240px]'],
        false: ['left-0'],
      },
    },
  }
);

export const panelTitle = cva([
  'm-0',
  'font-medium',
  'text-text-color-body-lighter',
  'text-lg',
]);

export const panelDescription = cva([
  'text-text-color-caption',
  'text-[15px]',
  'leading-[1.5]',
  'm-[10px_0_20px]',
  'px-3',
]);

export const panelClose = cva(['relative']);

export const panelFooter = cva([
  'bg-surface-color-background-subdued',
  'flex',
  'justify-end',
  'items-center',
  'gap-3',
  'px-3',
  'py-3',
  'bottom-0',
  'right-1',
  'fixed',
  'z-[9]',
  'shadow-medium',
  'w-[93.333%]',
  'sm:w-[95.333%]',
  'md:w-[352px]',
  'md:w-max-[352px]',
]);
