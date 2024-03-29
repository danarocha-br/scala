import { Story, Meta } from '@storybook/react';
import {
  Avatar,
  Box,
  Breadcrumb,
  Button,
  IconButton,
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
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=644%3A196579&mode=design&t=QcKO9NKDxvGimjvK-1',
    },
  },
  args: {
    title: 'Modal Title',
    description: 'Modal description goes here',
    children: (
      <>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
      </>
    ),
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
            <Stack
              align="center"
              justify="center"
              className="h-screen w-[600px]"
            >
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
  headerSlot: (
    <Stack gap="1" align="center">
      <IconButton label="Levels" icon="help" size="sm" />
      <Box className="bg-action-color-border-transparent-enabled h-4 w-[1px] mx-2" />
      <Avatar size="sm" username="Dana Rocha" />
      <Breadcrumb.Root>
        <Breadcrumb.Item label="Dana Rocha" as="a" href="/plan" isActive />
      </Breadcrumb.Root>
    </Stack>
  ),
};
