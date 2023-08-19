var s=Object.defineProperty;var t=(n,i)=>s(n,"name",{value:i,configurable:!0});import{K as o,S as c}from"./index.41fc60f6.js";import{B as l}from"./storybook-addon-badges.esm.f6562d9c.js";import{j as r,a,F as e}from"./jsx-runtime.c7344a7c.js";import"./index.2020b128.js";import"./iframe.d108dca0.js";import"./index.5be69f72.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const M={title:"Components/IconButton",component:o,parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { IconButton, IconButtonProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=643%3A172274&mode=design&t=QcKO9NKDxvGimjvK-1',
    },
  },
  args: {
    label: 'add',
    icon: 'plus',
    size: 'md',
    variant: 'primary',
    loading: false,
    disabled: false,
  },
  argTypes: {
    label: {
      table: {
        category: 'Text',
      },
    },
    icon: {
      table: {
        category: 'Modifiers',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
        options: ['primary', 'secondary', 'danger'],
        control: {
          type: 'radio-inline',
        },
      },
    },
    size: {
      table: {
        category: 'Modifiers',
        options: ['xs', 'sm', 'md', 'lg'],
        control: {
          type: 'radio-inline',
        },
      },
    },
    loading: {
      table: {
        category: 'State',
      },
    },
    disabled: {
      table: {
        category: 'State',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" fullWidth className="h-screen">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<IconButtonProps>;

export const PrimaryVariant: Story<IconButtonProps> = (args) => (
  <>
    <IconButton {...args} color="primary" />
    <IconButton {...args} color="secondary" />
    <IconButton {...args} color="danger" />
  </>
);
PrimaryVariant.args = {
  variant: 'primary',
};
export const SecondaryVariant: Story<IconButtonProps> = (args) => (
  <>
    <IconButton {...args} color="primary" />
    <IconButton {...args} color="secondary" />
    <IconButton {...args} color="danger" />
  </>
);
SecondaryVariant.args = {
  variant: 'secondary',
};
export const Sizes: Story<IconButtonProps> = (args) => (
  <>
    <IconButton {...args} size="xs" />
    <IconButton {...args} size="sm" />
    <IconButton {...args} size="md" />
  </>
);
Sizes.args = {
  variant: 'secondary',
};
`,locationsMap:{"primary-variant":{startLoc:{col:54,line:75},endLoc:{col:1,line:81},startBody:{col:54,line:75},endBody:{col:1,line:81}},"secondary-variant":{startLoc:{col:56,line:85},endLoc:{col:1,line:91},startBody:{col:56,line:85},endBody:{col:1,line:91}},sizes:{startLoc:{col:45,line:95},endLoc:{col:1,line:101},startBody:{col:45,line:95},endBody:{col:1,line:101}}}},layout:"centered",badges:[l.STABLE],design:{type:"figma",url:"https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=643%3A172274&mode=design&t=QcKO9NKDxvGimjvK-1"}},args:{label:"add",icon:"plus",size:"md",variant:"primary",loading:!1,disabled:!1},argTypes:{label:{table:{category:"Text"}},icon:{table:{category:"Modifiers"}},variant:{table:{category:"Modifiers",options:["primary","secondary","danger"],control:{type:"radio-inline"}}},size:{table:{category:"Modifiers",options:["xs","sm","md","lg"],control:{type:"radio-inline"}}},loading:{table:{category:"State"}},disabled:{table:{category:"State"}}},decorators:[n=>r(c,{align:"center",justify:"center",fullWidth:!0,className:"h-screen",children:n()})]},d=t(n=>a(e,{children:[r(o,{...n,color:"primary"}),r(o,{...n,color:"secondary"}),r(o,{...n,color:"danger"})]}),"PrimaryVariant");d.args={variant:"primary"};const m=t(n=>a(e,{children:[r(o,{...n,color:"primary"}),r(o,{...n,color:"secondary"}),r(o,{...n,color:"danger"})]}),"SecondaryVariant");m.args={variant:"secondary"};const y=t(n=>a(e,{children:[r(o,{...n,size:"xs"}),r(o,{...n,size:"sm"}),r(o,{...n,size:"md"})]}),"Sizes");y.args={variant:"secondary"};const P=["PrimaryVariant","SecondaryVariant","Sizes"];export{d as PrimaryVariant,m as SecondaryVariant,y as Sizes,P as __namedExportsOrder,M as default};
//# sourceMappingURL=IconButton.stories.e0dcb788.js.map
