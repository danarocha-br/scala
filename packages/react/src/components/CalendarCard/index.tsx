import { VariantProps } from 'class-variance-authority';
import { Button as AccessibleButton } from '@ariakit/react';

import { Avatar } from '../Avatar';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Dropdown } from '../Dropdown';
import { IconButton } from '../IconButton';
import * as S from './styles';

export type CalendarCardProps = {
  user?: string;
  dueDate: string;
  title: string;
  tags?: {
    id: string;
    title: string;
    color?: string;
  }[];
  checklist: {
    id: string;
    title: string;
    status: 'todo' | 'done';
  }[];
  status?: 'published' | 'draft';
  draftText?: string;
  editMenuItems: React.ReactNode;
  onClick?: () => void;
  className?: string;
} & VariantProps<typeof S.card> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CalendarCard = ({
  user,
  dueDate,
  title,
  tags,
  checklist,
  className='',
  draftText,
  status = 'published',
  editMenuItems,
  onClick,
  ...props
}: CalendarCardProps): JSX.Element => {
  return (
    <AccessibleButton
      className={`c-calendar-card ${S.card({ status, className })}`}
      {...props}
    >
      {Boolean(status === 'draft') && (
        <Box className="w-full rounded-tl-sm rounded-tr-sm bg-action-color-background-danger-disabled/50 py-0">
          <Text size="xs" color="danger" className="px-2">
            {draftText}
          </Text>
        </Box>
      )}

      <Stack
        as="header"
        align="center"
        justify="between"
        fullWidth
        className="h-5 pl-3 pr-1 pt-2"
      >
        <Stack as="small" align="center" gap="2">
          <Text size="xs" color="body-lighter" className="leading-1 uppercase">
            {dueDate}
          </Text>
        </Stack>

        <Dropdown.Menu
          align="end"
          trigger={
            <IconButton
              label="edit"
              icon="other"
              size="sm"
              className="fill-text-color-caption opacity-50"
            />
          }
        >
          {editMenuItems}
        </Dropdown.Menu>
      </Stack>

      <Text className="leading-1 px-3">{title}</Text>

      <Stack
        align="center"
        gap="2"
        className={`relative ml-3 mt-2 w-fit rounded-sm border border-form-color-background-disabled p-1 pr-2 ${
          checklist.filter((item) => item.status === 'done').length ===
          checklist.length
            ? 'bg-feedback-color-background-success-disabled/60'
            : 'bg-transparent'
        }`}
      >
        <Icon
          name="checklist"
          size="xs"
          label="checklist"
          color={
            checklist.filter((item) => item.status === 'done').length ===
            checklist.length
              ? 'success'
              : 'caption'
          }
        />
        <Text size="sm" color="caption">
          {checklist.filter((item) => item.status === 'done').length}/
          {checklist.length}
        </Text>
      </Stack>

      <Stack justify="between" align="center" className="mt-2 px-3 pb-2">
        {Boolean(tags) && (
          <Stack gap="2" align="center">
            {tags?.map((tag) => (
              <Stack
                as="span"
                align="center"
                gap="1"
                key={tag.id}
                className="rounded-sm px-1 transition-all hover:bg-action-color-background-transparent-hover/70"
              >
                <Box
                  as="span"
                  className={`h-[6px] w-[6px] rounded-sm  ${
                    tag.color ? tag.color : 'bg-brand-color-primary'
                  }`}
                />
                <Text size="xs" color="body-lighter">
                  {tag.title}
                </Text>
              </Stack>
            ))}
          </Stack>
        )}
        {user ? (
          <Avatar username={user} size="sm" />
        ) : (
          <Icon
            label="Not assigned user"
            name="user"
            size="sm"
            color="caption"
          />
        )}
      </Stack>
    </AccessibleButton>
  );
};

CalendarCard.displayName = 'CalendarCard';
