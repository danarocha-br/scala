var i=Object.defineProperty;var e=(o,t)=>i(o,"name",{value:t,configurable:!0});import{i as n,S as c}from"./index.41fc60f6.js";import{B as d}from"./storybook-addon-badges.esm.f6562d9c.js";import{j as r,a,F as l}from"./jsx-runtime.c7344a7c.js";import"./index.2020b128.js";import"./iframe.d108dca0.js";import"./index.5be69f72.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const x={title:"Components/Badge",component:n,parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { Badge, BadgeProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=638%3A160318&mode=design&t=6xBLjdHeoRhcrzFa-1',
    },
  },
  args: {
    label: 'Badge',
    outlined: false,
    variant: 'default',
    color: 'primary',
  },
  argTypes: {
    as: {
      table: {
        category: 'Modifiers',
      },
    },
    className: {
      table: {
        category: 'Modifiers',
      },
    },
    label: {
      table: {
        category: 'Modifiers',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['default', 'pill'],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      table: {
        category: 'Modifiers',
      },
      options: ['primary', 'info', 'danger', 'warning', 'on-dark'],
      control: {
        type: 'inline-radio',
      },
    },
    outlined: {
      table: {
        category: 'Modifiers',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack
          align="center"
          justify="center"
          className="h-screen px-[200px] bg-surface-color-background-default"
        >
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<BadgeProps>;

export const Default: Story<BadgeProps> = (args) => (
  <>
    <Badge {...args} color="primary" />
    <Badge {...args} color="info" />
    <Badge {...args} color="warning" />
    <Badge {...args} color="danger" />
    <Badge {...args} color="success" />
    <Badge {...args} color="on-dark" />
  </>
);

export const Pill: Story<BadgeProps> = (args) => (
  <>
    <Badge {...args} color="primary" variant="pill" />
    <Badge {...args} color="info" variant="pill" />
    <Badge {...args} color="warning" variant="pill" />
    <Badge {...args} color="danger" variant="pill" />
    <Badge {...args} color="success" variant="pill" />
    <Badge {...args} color="on-dark" variant="pill" />
  </>
);

export const Outlined: Story<BadgeProps> = (args) => (
  <>
    <Badge {...args} color="primary" outlined />
    <Badge {...args} color="info" outlined />
    <Badge {...args} color="warning" outlined />
    <Badge {...args} color="danger" outlined />
    <Badge {...args} color="success" outlined />
    <Badge {...args} color="on-dark" outlined />
  </>
);
`,locationsMap:{default:{startLoc:{col:42,line:77},endLoc:{col:1,line:86},startBody:{col:42,line:77},endBody:{col:1,line:86}},pill:{startLoc:{col:39,line:88},endLoc:{col:1,line:97},startBody:{col:39,line:88},endBody:{col:1,line:97}},outlined:{startLoc:{col:43,line:99},endLoc:{col:1,line:108},startBody:{col:43,line:99},endBody:{col:1,line:108}}}},layout:"centered",badges:[d.STABLE],design:{type:"figma",url:"https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=638%3A160318&mode=design&t=6xBLjdHeoRhcrzFa-1"}},args:{label:"Badge",outlined:!1,variant:"default",color:"primary"},argTypes:{as:{table:{category:"Modifiers"}},className:{table:{category:"Modifiers"}},label:{table:{category:"Modifiers"}},variant:{table:{category:"Modifiers"},options:["default","pill"],control:{type:"inline-radio"}},color:{table:{category:"Modifiers"},options:["primary","info","danger","warning","on-dark"],control:{type:"inline-radio"}},outlined:{table:{category:"Modifiers"}}},decorators:[o=>r(c,{align:"center",justify:"center",className:"h-screen px-[200px] bg-surface-color-background-default",children:o()})]},h=e(o=>a(l,{children:[r(n,{...o,color:"primary"}),r(n,{...o,color:"info"}),r(n,{...o,color:"warning"}),r(n,{...o,color:"danger"}),r(n,{...o,color:"success"}),r(n,{...o,color:"on-dark"})]}),"Default"),L=e(o=>a(l,{children:[r(n,{...o,color:"primary",variant:"pill"}),r(n,{...o,color:"info",variant:"pill"}),r(n,{...o,color:"warning",variant:"pill"}),r(n,{...o,color:"danger",variant:"pill"}),r(n,{...o,color:"success",variant:"pill"}),r(n,{...o,color:"on-dark",variant:"pill"})]}),"Pill"),A=e(o=>a(l,{children:[r(n,{...o,color:"primary",outlined:!0}),r(n,{...o,color:"info",outlined:!0}),r(n,{...o,color:"warning",outlined:!0}),r(n,{...o,color:"danger",outlined:!0}),r(n,{...o,color:"success",outlined:!0}),r(n,{...o,color:"on-dark",outlined:!0})]}),"Outlined"),P=["Default","Pill","Outlined"];export{h as Default,A as Outlined,L as Pill,P as __namedExportsOrder,x as default};
//# sourceMappingURL=Badge.stories.068a5e89.js.map
