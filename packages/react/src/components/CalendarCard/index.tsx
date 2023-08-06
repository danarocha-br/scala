import { Avatar } from '../Avatar';
import { Box } from '../Box';
import { Card } from '../Card';
import { Icon } from '../Icon';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Dropdown } from '../Dropdown';
import { IconButton } from '../IconButton';

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
};

export const CalendarCard = ({
  user,
  dueDate,
  title,
  tags,
  checklist,
  className,
  draftText,
  status = 'published',
  editMenuItems,
  onClick,
  ...props
}: CalendarCardProps): JSX.Element => {
  return (
    <Card
      onClick={onClick}
      className={`c-calendar-card group cursor-pointer rounded-sm bg-surface-color-background-default p-0 shadow-none outline-none outline-transparent transition-all ${
        status === 'published'
          ? 'border border-action-color-border-transparent-enabled'
          : 'border border-action-color-border-danger-enabled'
      } hover:bg-[hsl(60, 10%, 98.3%)] hover:[data-mode=dark]:text-text-color-on-dark hover:[data-mode=dark]:bg-surface-color-background-subdued focus: focus-outline-offset-2 focus:outline-2 focus:outline-action-color-border-transparent-enabled ${className}`}
      {...props}
    >
      {Boolean(status === 'draft') && (
        <Box className="w-full bg-action-color-background-danger-disabled py-0">
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
        className="h-5 px-3 pt-2"
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
              className="card__btn--edit translate-[6px] opacity-30 transition-opacity transition-transform"
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
        className={`border-1 relative ml-3 mt-2 w-fit rounded-sm border-form-color-background-disabled p-1 pr-2 ${
          checklist.filter((item) => item.status === 'done').length ===
          checklist.length
            ? 'bg-feedback-color-background-success-disabled'
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

      <Stack justify="between" align="center" className="px-3 pb-2">
        {Boolean(tags) && (
          <Stack gap="2" align="center">
            {tags?.map((tag) => (
              <Stack
                as="span"
                align="center"
                gap="1"
                key={tag.id}
                className="rounded-sm px-1 transition-all hover:bg-action-color-background-transparent-hover"
              >
                <Box
                  as="span"
                  className={`h-6 w-6 rounded-sm ${
                    tag.color || 'bg-brand-color-primary'
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
    </Card>
  );
};

CalendarCard.displayName = 'CalendarCard';
