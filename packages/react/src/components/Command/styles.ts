import { styled } from '../../styles';
//TODO: refactor to tailwind
export const CommandContainer = styled('div', {
  '& [cmdk-root]': {
    color: '$text-color-body',
    backgroundColor: '$surface-color-background-default',
    fontFamily: '$font-family-sans',
    fontSize: '$font-size-sm',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    minWidth: '120px',
    overflow: 'hidden',
    borderRadius: '$radii-sm',
    border: '1px solid',
    borderColor: '$action-color-border-transparent-enabled',
    boxShadow: '$elevation-high',
  },

  '& .cmdk-dialog': {
    overflow: 'hidden',
    p: 0,
  },

  '& [cmdk-group-heading]': {
    fontSize: '$font-size-xs',
    color: '$text-color-caption',
    fontWeight: '$font-weight-medium',
    px: '$spacing-1',
    py: '$spacing-2',
  },

  '& [cmdk-group]': {
    px: '$spacing-1',
    overflow: 'hidden',

    '&:not([hidden]) ~[cmdk-group]': {
      pt: 0,
    },
  },

  '& [cmdk-input]': {
    fontSize: '$font-size-sm',
    bg: 'transparent',
    borderRadius: '$radii-sm',
    display: 'flex',
    width: '100%',
    height: '$spacing-4',
    py: '$spacing-2',
    border: 'none',
    outline: 'none',
    transition: '$base',

    '&::placeholder': {
      color: '$text-color-caption',
    },

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },

  '& [cmdk-item]': {
    px: '$spacing-2',
    py: '$spacing-2',
    position: 'relative',
    cursor: 'default',
    select: 'none',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '$spacing-1',
    borderRadius: '$radii-sm',
    transition: '$base',

    '& svg': {
      color: '$text-color-body-lighter',
      width: '18px',
      height: '18px',
      position: 'relative',
      left: '-4px !important',
    },

    '& .c-shortcut': {
      ml: 'auto',
    },

    '&:hover': {
      backgroundColor: '$action-color-background-transparent-hover',
    },

    '& [aria-selected=“true”]': {
      backgroundColor: 'red !important',
    },

    '&[aria-disabled=“true”]': {
      PointerEvents: 'none',
      opacity: 0.5,
    },
  },

  '& [cmdk-item][data-selected=“true”]': {},

  '& [cmdk-list]': {
    maxHeight: '300px',
    overflowY: 'auto',
    overflowX: 'hidden',
    px: '$spacing-2',
    py: '$spacing-2',
  },

  '& [cmdk-empty]': {
    color: '$text-color-body-lighter',
    fontSize: '$font-size-sm',
    textAlign: 'center',
    py: '$spacing-2',
  },

  '& [cmdk-separator]': {
    height: '2px',
    background: '$action-color-border-transparent-pressed',
    my: '$spacing-2',
  },
});

export const CommmandItem = styled('div', {});
