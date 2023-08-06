import { Root, Trigger, Provider } from '@radix-ui/react-tooltip';

import * as S from './styles';

export type TooltipProps = {
  children: React.ReactNode;
  slot?: React.ReactNode;
  content: string | React.ReactNode;
  /** preferred side of the trigger to render against when open */
  direction?: 'top' | 'right' | 'bottom' | 'left';
};

export const Tooltip = ({
  children,
  content,
  slot,
  direction = 'bottom',
  ...props
}: TooltipProps): JSX.Element => (
  <Provider>
    <Root delayDuration={300} >
      <Trigger asChild>
        <div>{children}</div>
      </Trigger>

      <S.Content
        sideOffset={3}
        hasSlot={Boolean(slot)}
        side={direction}
        {...props}
      >
        {content}
        {Boolean(slot) && <span>{slot}</span>}
        <S.Arrow />
      </S.Content>
    </Root>
  </Provider>
);

Tooltip.displayName = 'Tooltip';
