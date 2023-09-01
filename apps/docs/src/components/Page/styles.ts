import { cva } from 'class-variance-authority';

export const page = cva([
  'bg-background-color-default',
  'w-full',
  'h-full',
  'flex',
]);

export const content = cva(['flex', 'flex-col', 'w-full']);

export const main = cva([
  'flex',
  'flex-col',
  'justify-center',
  'w-full',
  'py-3',
  'px-4',
  'md:px-6',
  'xl:!px-[13%]',
  'mb-12',
]);
