import { Story, Meta } from '@storybook/react';
import {
  Button,
  Panel,
  PanelHandlesProps,
  PanelProps,
  PanelProvider,
  OverlayProvider,
  Stack,
} from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useCallback, useRef } from 'react';

export default {
  title: 'Components/Panel',
  component: Panel,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    title: 'Panel Title',
    description: 'Panel description goes here',
    children: 'This is a transactional Panel.',
    buttonPrimaryLabel: 'Save',
    buttonSecondaryLabel: 'Cancel',
    onButtonPrimaryClick: () => console.log('clicked'),
    isButtonDisabled: false,
    isNavigationOpen: false,
  },
  argTypes: {
    title: {
      table: {
        category: 'Text',
      },
    },
    description: {
      table: {
        category: 'Text',
      },
    },
    children: {
      table: {
        category: 'Modifiers',
      },
    },
    isButtonDisabled: {
      table: {
        category: 'Modifiers',
      },
    },
    isNavigationOpen: {
      table: {
        category: 'Modifiers',
      },
    },
    buttonPrimaryLabel: {
      table: {
        category: 'Text',
      },
    },
    buttonSecondaryLabel: {
      table: {
        category: 'Text',
      },
    },
    onButtonPrimaryClick: {
      table: {
        category: 'Function',
      },
    },
    onButtonSecondaryClick: {
      table: {
        category: 'Function',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <OverlayProvider>
          <PanelProvider>
            <Stack
              align="center"
              justify="center"
              className="h-screen w-[399px]"
            >
              {Story()}
            </Stack>
          </PanelProvider>
        </OverlayProvider>
      );
    },
  ],
} as Meta<PanelProps>;

export const Default: Story<PanelProps> = (args) => {
  const panelRef = useRef<PanelHandlesProps>(null);

  const handleOpenPanel = useCallback(() => {
    panelRef && panelRef.current?.openPanel();
  }, []);

  return (
    <>
      <Button label="Open Panel" color="secondary" onClick={handleOpenPanel} />
      <Panel ref={panelRef} {...args} />
    </>
  );
};
