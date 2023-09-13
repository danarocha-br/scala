import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import * as S from './styles';

export type SliderProps = {
  className?: string;
} & React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>;

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={S.container({ className })}
    {...props}
  >
    <SliderPrimitive.Track className={S.track()}>
      <SliderPrimitive.Range className={S.range()} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={S.thumb()} />
  </SliderPrimitive.Root>
));

Slider.displayName = 'Slider';
