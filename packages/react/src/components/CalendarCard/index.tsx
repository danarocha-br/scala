import { CSS } from '../../styles';
import { Avatar } from '../Avatar';
import { Card } from '../Card';
import { Icon } from '../Icon';
import { Stack } from '../Stack';
import { Text } from '../Text';

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
    isChecked?: boolean;
  }[];
  css?: CSS;
};

export const CalendarCard = ({
  user,
  dueDate,
  title,
  tags,
  checklist,
  css,
  ...props
}: CalendarCardProps): JSX.Element => (
  <Card
    as="button"
    css={{
      background: '$surface-color-background-default',
      pt: '$spacing-2',
      pb: '$spacing-3',
      px: '$spacing-3',
      radii: '$radii-sm',
      boxShadow: '0px 3px 2px 0px #00000007',
      border: 'none',
      cursor: 'pointer',
      transition: '$slow',
      outline: 'none',
      outlineColor: 'transparent',

      '&:hover': {
        background: 'hsl(60, 10%, 98.3%)',
        [`.dark-theme &`]: {
          color: '$text-color-on-dark',
          background: '$surface-color-background-subdued',
        },
      },

      '&:focus': {
        outline: '2px solid',
        outlineOffset: '2px',
        outlineColor: '$action-color-border-transparent-enabled',
      },

      css,
    }}
    {...props}
  >
    <Stack as="header" align="center" justify="between" fullWidth>
      <Stack as="small" align="center" gap="2">
        <Text
          size="xs"
          color="body-lighter"
          css={{ textTransform: 'uppercase', lineHeight: '$line-height-1' }}
        >
          {dueDate}
        </Text>
      </Stack>
      {user ? (
        <Avatar username={user} size="sm" />
      ) : (
        <Icon label="Not assigned user" name="user" size="sm" color="caption" />
      )}
    </Stack>

    <Text css={{ lineHeight: '$line-height-1' }}>{title}</Text>

    <Stack
      align="center"
      gap="2"
      css={{
        p: '$spacing-1',
        pr: '$spacing-2',
        mt: '$spacing-2',
        border: '1px solid $form-color-background-disabled',
        radii: '$radii-sm',
        position: 'relative',
      }}
    >
      <Icon name="checklist" size="xs" label="checklist" color="caption" />
      <Text size="sm" color="caption">
        {checklist.filter((item) => item.isChecked).length}/{checklist.length}
      </Text>
    </Stack>

    {Boolean(tags) && (
      <Stack gap="2" fullWidth>
        {tags?.map((tag) => (
          <Text
            key={tag.id}
            size="xs"
            color="body-lighter"
            css={{
              p: '$spacing-1',
              pl: '$spacing-3',
              radii: '$radii-sm',
              position: 'relative',

              '&::before': {
                content: "''",
                display: 'block',
                position: 'absolute',
                left: 6,
                top: 16,
                width: '6px',
                height: '6px',
                borderRadius: '$radii-sm',
                background: tag.color || '$brand-color-primary',
              },
            }}
          >
            {tag.title}
          </Text>
        ))}
      </Stack>
    )}
  </Card>
);

CalendarCard.displayName = 'CalendarCard';
