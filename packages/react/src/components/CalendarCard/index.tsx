import { useState } from 'react';

import { CSS } from '../../styles';
import { Avatar } from '../Avatar';
import { Box } from '../Box';
import { Card } from '../Card';
import { Icon } from '../Icon';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';

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
  status?: 'enabled' | 'draft';
  draftText?: string;
  editMenuItems: React.ReactNode;
  onClick?: () => void;
  css?: CSS;
};

export const CalendarCard = ({
  user,
  dueDate,
  title,
  tags,
  checklist,
  css,
  draftText,
  status = 'enabled',
  editMenuItems,
  onClick,
  ...props
}: CalendarCardProps): JSX.Element => {
  return (
    <Card
      onClick={onClick}
      css={{
        background: '$surface-color-background-default',
        radii: '$radii-sm',
        boxShadow: '0px 3px 2px 0px #00000007',
        border:
          status === 'enabled'
            ? 'none'
            : '1px dashed $colors$action-color-border-danger-enabled',
        cursor: 'pointer',
        transition: '$slow',
        outline: 'none',
        outlineColor: 'transparent',
        p: '0 !important',

        '&:hover': {
          background: 'hsl(60, 10%, 98.3%)',
          [`.dark-theme &`]: {
            color: '$text-color-on-dark',
            background: '$surface-color-background-subdued',
          },

          '&.card__btn--edit': {
            '&:hover': { transform: 'translateX(0px)' },
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
      {Boolean(status === 'draft') && (
        <Box
          css={{
            py: '0px',
            background: '$action-color-background-danger-disabled',
            w: '100%',
          }}
        >
          <Text size="xs" color="danger" css={{ px: '$spacing-2' }}>
            {draftText}
          </Text>
        </Box>
      )}
      <Stack
        as="header"
        align="center"
        justify="between"
        fullWidth
        css={{
          pt: '$spacing-2',
          px: '$spacing-3',
          height: '$spacing-5',
        }}
      >
        <Stack as="small" align="center" gap="2">
          <Text
            size="xs"
            color="body-lighter"
            css={{ textTransform: 'uppercase', lineHeight: '$line-height-1' }}
          >
            {dueDate}
          </Text>
        </Stack>

        <Dropdown.Menu
          align="end"
          trigger={
            <Button
              className="card__btn--edit"
              label="edit"
              icon="other"
              variant="icon"
              size="sm"
              css={{
                transform: 'translateX(6px)',
                transition: '$base',
                opacity: 0.3,
              }}
            />
          }
        >
          {editMenuItems}
        </Dropdown.Menu>
      </Stack>

      <Text
        css={{
          lineHeight: '$line-height-1',
          px: '$spacing-3',
        }}
      >
        {title}
      </Text>

      <Stack
        align="center"
        gap="2"
        css={{
          p: '$spacing-1',
          pr: '$spacing-2',
          mt: '$spacing-2',
          ml: '$spacing-3',
          border: '1px solid $form-color-background-disabled',
          radii: '$radii-sm',
          position: 'relative',
          width: 'fit-content',
        }}
      >
        <Icon name="checklist" size="xs" label="checklist" color="caption" />
        <Text size="sm" color="caption">
          {checklist.filter((item) => item.isChecked).length}/{checklist.length}
        </Text>
      </Stack>

      <Stack
        justify="between"
        align="center"
        css={{ pb: '$spacing-2', px: '$spacing-3' }}
      >
        {Boolean(tags) && (
          <Stack gap="2" align="center">
            {tags?.map((tag) => (
              <Stack
                as="span"
                align="center"
                gap="1"
                key={tag.id}
                css={{
                  px: '$spacing-1',
                  radii: '$radii-sm',
                  transition: '$base',

                  '&:hover': {
                    background: '$action-color-background-transparent-hover',
                  },
                }}
              >
                <Box
                  as="span"
                  css={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '$radii-sm',
                    background: tag.color || '$brand-color-primary',
                  }}
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
