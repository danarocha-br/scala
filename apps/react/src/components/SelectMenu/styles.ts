import { styled } from '../../styles';
import {
  SelectTrigger,
  ScrollUpButton,
  ScrollDownButton,
  Content,
  Viewport,
  Item,
  Label,
  Separator,
  ItemIndicator,
  Root,
  Value,
  Icon,
  Group,
  ItemText,
  Portal,
} from '@radix-ui/react-select';

export const SelectBox = styled(SelectTrigger, {
  all: 'unset',
  color: '$text-color-body',
  fontFamily: '$font-family-sans',
  fontSize: '$font-size-sm',
  backgroundColor: 'transparent',
  border: '1px solid transparent',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '$radii-sm',
  padding: '0 $spacing-2',
  height: 40,
  gap: '$spacing-2',
  position: 'relative',
  transition: '$base',

  '&:hover': {
    background: '$action-color-background-transparent-disabled',
  },
  '&:focus': {
    background: '$action-color-background-transparent-disabled',
    border: '1px dashed',
    borderColor: '$surface-color-background-hover',
  },
});

export const SelectContent = styled(Content, {
  overflow: 'hidden',
  backgroundColor: '$surface-color-background-subdued',
  borderRadius: '$radii-md',
  boxShadow: '$elevation-low',
});

export const SelectViewport = styled(Viewport, {
  padding: '$spacing-2',
  fontFamily: '$font-family-sans',
});

export const SelectItem = styled(Item, {
  all: 'unset',
  fontSize: '$font-size-sm',
  color: '$text-color-body',
  borderRadius: '$radii-sm',
  display: 'flex',
  alignItems: 'center',
  height: '$spacing-5',
  padding: '0 8px 0 32px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$text-color-body-lighter',
    cursor: 'not-allowed',
  },

  '&:focus': {
    backgroundColor: '$interactive-color-background-subdued',
    color: '$text-color-on-dark',

    '> svg': {
      color: '$text-color-on-dark',
    },
  },
});

export const SelectLabel = styled(Label, {
  padding: '0 24px',
  fontSize: '$font-size-xs',
  color: '$text-color-body',
});

export const SelectSeparator = styled(Separator, {
  height: 1,
  backgroundColor: '$form-color-border-default',
  margin: 5,
});

export const SelectItemIndicator = styled(ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 24,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: '$text-color-body',
  cursor: 'default',
};

export const SelectScrollUpButton = styled(ScrollUpButton, scrollButtonStyles);

export const SelectScrollDownButton = styled(
  ScrollDownButton,
  scrollButtonStyles
);

export const SelectItemText = styled(ItemText, {
  d: 'flex',
  gap: '$spacing-1',
  alignItems: 'center',
});

export const SelectRoot = Root;
export const SelectValue = Value;
export const SelectIcon = Icon;
export const SelectGroup = Group;
export const SelectPortal = Portal;
