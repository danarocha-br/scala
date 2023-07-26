import { StoryObj, Meta } from '@storybook/react';
import { Breadcrumb, BreadcrumbProps } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb.Root,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=644%3A197660&mode=design&t=QcKO9NKDxvGimjvK-1',
    },
  },
  args: {
    children: (
      <>
        <Breadcrumb.Item as="a" href="/" label="Item 1" />
        <Breadcrumb.Item
          as="button"
          onClick={() => 'clicked'}
          label="Item 1"
          icon="settings"
          isActive
        />
      </>
    ),
  },
} as Meta<BreadcrumbProps>;

export const Default: StoryObj<BreadcrumbProps> = {};
