import { useState } from 'react';
import { Button } from '@ariakit/react';

import { Stack } from '../Stack';
import { Icon } from '../Icon';
import * as S from './styles';

export type ChipProps = {
  label: string;
  children?: React.ReactNode;
  className?: string;
  removable?: boolean;
  color?: 'neutral' | 'highlight';
  hasMaxWidth?: boolean;
  onRemove?: () => void;
};

/**
 * Renders a Chip component.
 *
 * @param className - The class name for the chip.
 * @param label - The label for the chip.
 * @param color - The background color for the chip.
 * @param hasMaxWidth - Applies a max-width to the chip.
 * @param children - The children components for the chip.
 * @param removable - Whether the chip is removable.
 * @param onRemove - The callback function when the chip is removed.
 * @returns The rendered chip component.
 */
export const Chip = ({
  className = '',
  label,
  color = 'neutral',
  children,
  removable = false,
  onRemove,
  hasMaxWidth = false,
  ...props
}: ChipProps): JSX.Element => {
  const [isRemoved, setIsRemoved] = useState(false);

  const handleRemove = () => {
    setIsRemoved(true);
    onRemove && onRemove();
  };

  return (
    <Stack
      gap="2"
      align="center"
      className={`chip ${S.container({
        removable,
        hasSlot: !!children,
        isRemoved,
        color,
        hasMaxWidth,
        className,
      })}`}
      {...props}
    >
      {children && <div className="chip-slot">{children}</div>}

      <span>{label}</span>

      {removable && (
        <Button className={S.button()} onClick={handleRemove}>
          <Icon name="close" label="remove item" size="xs" />
        </Button>
      )}
    </Stack>
  );
};

Chip.displayName = 'Chip';
