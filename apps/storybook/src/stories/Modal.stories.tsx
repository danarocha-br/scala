import { Story, Meta } from '@storybook/react';
import {
  Button,
  Modal,
  ModalHandlesProps,
  ModalProps,
  ModalProvider,
  OverlayProvider,
  Stack,
} from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useCallback, useRef } from 'react';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    title: 'Modal Title',
    description: 'Modal description goes here',
    children: 'This is a transactional modal.',
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
          <ModalProvider>
            <Stack align="center" justify="center" css={{ h: '100vh', w: 399 }}>
              {Story()}
            </Stack>
          </ModalProvider>
        </OverlayProvider>
      );
    },
  ],
} as Meta<ModalProps>;

export const Transactional: Story<ModalProps> = (args) => {
  const modalRef = useRef<ModalHandlesProps>(null);

  const handleOpenModal = useCallback(() => {
    modalRef && modalRef.current?.openModal();
  }, []);
  return (
    <>
      <Button label="Open modal" color="secondary" onClick={handleOpenModal} />
      <Modal ref={modalRef} {...args} />
    </>
  );
};

export const Passive = Transactional.bind({});
Passive.args = {
  variant: 'passive',
  buttonPrimaryLabel: 'Ok',
};

export const WithCustomHeader = Transactional.bind({});
WithCustomHeader.args = {
  headerSlot: <p style={{ margin: 0 }}>Another header</p>,
};
