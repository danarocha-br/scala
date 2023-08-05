import { cva } from 'class-variance-authority';

export const scrollArea = cva([
  'w-full',
  'h-full',
  'overflow-hidden',
  'rounded-sm',
]);

export const scrollViewport = cva(['w-full', 'h-full', 'rounded-[inherit]']);

export const scrollBar = cva([
  'flex',
  'select-none',
  'touch-none',
  'p-[2px]',
  'bg-form-color-background-subdued',
  'transition-all',
  '[&[data-orientation="vertical"]]:w-[11px]',
  '[&[data-orientation="horizontal"]]:h-[11px]',
  '[&[data-orientation="horizontal"]]:flex-col',
]);

export const srollThumb = cva([
  'flex-1',
  'bg-surface-color-background-pressed',
  'rounded-[11px]',
  'relative',

  'before:content-[""]',
  'before:absolute',
  'before:top-1/2',
  'before:left-1/2',
  'before:w-full',
  'before:h-full',
  'before:min-w-[44px]',
  'before:min-h-[44px]',
  'before:translate-x-1/2',
  'before:translate-y-1/2',
]);

export const scrollCorner = cva(['from-form-color-background-disabled']);
