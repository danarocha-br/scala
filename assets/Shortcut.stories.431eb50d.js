var a=Object.defineProperty;var o=(t,e)=>a(t,"name",{value:e,configurable:!0});import{u as r,S as s}from"./index.41fc60f6.js";import{B as c}from"./storybook-addon-badges.esm.f6562d9c.js";import{j as n}from"./jsx-runtime.c7344a7c.js";import"./index.2020b128.js";import"./iframe.d108dca0.js";import"./index.5be69f72.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const B={title:"Components/Shortcut",component:r,parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { Shortcut, ShortcutProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Shortcut',
  component: Shortcut,
  parameters: {
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=16%3A6189',
    },
  },
  args: {
    shortcut: 'cmd + D',
  },
  argTypes: {
    shortcut: {
      table: {
        category: 'Text',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" className="h-[50vh] w-[50vh]">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<ShortcutProps>;

export const Default: Story<ShortcutProps> = (args) => <Shortcut {...args} />;
`,locationsMap:{default:{startLoc:{col:45,line:36},endLoc:{col:77,line:36},startBody:{col:45,line:36},endBody:{col:77,line:36}}}},badges:[c.STABLE],design:{type:"figma",url:"https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=16%3A6189"}},args:{shortcut:"cmd + D"},argTypes:{shortcut:{table:{category:"Text"}}},decorators:[t=>n(s,{align:"center",justify:"center",className:"h-[50vh] w-[50vh]",children:t()})]},D=o(t=>n(r,{...t}),"Default"),b=["Default"];export{D as Default,b as __namedExportsOrder,B as default};
//# sourceMappingURL=Shortcut.stories.431eb50d.js.map
