import { Story, Meta } from '@storybook/react';
import {
  Button,
  Dialog,
  DialogHandlesProps,
  DialogProps,
  DialogProvider,
  OverlayProvider,
  Stack,
} from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useCallback, useRef } from 'react';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=638%3A167604&mode=design&t=QcKO9NKDxvGimjvK-1',
    },
  },
  args: {
    title: 'Dialog Title',
    description: 'Dialog description goes here',
    children: 'This is a transactional dialog.',
    variant: 'transactional',
    buttonPrimaryLabel: 'Save',
    buttonSecondaryLabel: 'Cancel',
    onButtonPrimaryClick: () => console.log('clicked'),
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
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['passive', 'transactional', 'danger'],
      control: {
        type: 'inline-radio',
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
          <DialogProvider>
            <Stack
              align="center"
              justify="center"
              className="h-screen w-[400px]"
            >
              {Story()}
            </Stack>
          </DialogProvider>
        </OverlayProvider>
      );
    },
  ],
} as Meta<DialogProps>;

export const Transactional: Story<DialogProps> = (args) => {
  const dialogRef = useRef<DialogHandlesProps>(null);

  const handleOpenDialog = useCallback(() => {
    dialogRef && dialogRef.current?.openDialog();
  }, []);
  return (
    <>
      <Button
        label="Open dialog"
        color="secondary"
        onClick={handleOpenDialog}
      />
      <Dialog ref={dialogRef} {...args} />
    </>
  );
};

export const Passive = Transactional.bind({});
Passive.args = {
  variant: 'passive',
  buttonPrimaryLabel: 'Ok',
};

export const Danger = Transactional.bind({});
Danger.args = {
  variant: 'danger',
  buttonPrimaryLabel: 'Ok',
};
