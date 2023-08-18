import {
  Root,
  Trigger,
  Provider,
  Content,
  Arrow,
} from '@radix-ui/react-tooltip';

import * as S from './styles';

export type TooltipProps = {
  children: React.ReactNode;
  slot?: React.ReactNode;
  content: string | React.ReactNode;
  /** preferred side of the trigger to render against when open */
  direction?: 'top' | 'right' | 'bottom' | 'left';
};

/**
 * Renders a tooltip component.
 *
 * @param {TooltipProps} props - The props object containing the following properties:
 *   - children: The content to be wrapped by the tooltip.
 *   - content: The content to be displayed inside the tooltip.
 *   - slot: The slot element to be displayed inside the tooltip.
 *   - direction: The direction in which the tooltip should be displayed (default: 'bottom').
 * @return {JSX.Element} The rendered tooltip component.
 */
export const Tooltip = ({
  children,
  content,
  slot,
  direction = 'bottom',
  ...props
}: TooltipProps): JSX.Element => {
  const hasSlot = Boolean(slot);

  return (
    <Provider>
      <Root delayDuration={300}>
        <Trigger asChild>
          <div>{children}</div>
        </Trigger>

        <Content
          className={S.content({ hasSlot })}
          sideOffset={3}
          side={direction}
          {...props}
        >
          {content}
          {hasSlot && <span>{slot}</span>}
          <Arrow className={S.arrow()} />
        </Content>
      </Root>
    </Provider>
  );
};

Tooltip.displayName = 'Tooltip';
