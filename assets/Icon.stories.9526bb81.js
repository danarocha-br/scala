var c=Object.defineProperty;var t=(n,o)=>c(n,"name",{value:o,configurable:!0});import{I as r,J as s,G as i,S as l,T as d}from"./index.41fc60f6.js";import{B as p}from"./storybook-addon-badges.esm.f6562d9c.js";import{j as e,a as m}from"./jsx-runtime.c7344a7c.js";import"./index.2020b128.js";import"./iframe.d108dca0.js";import"./index.5be69f72.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const a=Object.keys(s),A={title:"Primitives/Icon",component:r,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import { Grid, Icon, IconProps, iconPath, Text, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

const icons = Object.keys(iconPath);

export default {
  title: 'Primitives/Icon',
  component: Icon,
  parameters: {
    layout: 'fullscreen',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=12%3A2786',
    },
  },
  args: {
    name: 'plus',
    color: 'body-lighter',
    label: 'add',
    size: 'md',
  },
  argTypes: {
    name: {
      table: {
        category: 'Modifiers',
      },
      options: [...icons],
      control: {
        type: 'select',
      },
    },
    color: {
      table: {
        category: 'Modifiers',
      },
      options: [
        'body',
        'body-lighter',
        'caption',
        'success',
        'danger',
        'warning',
        'on-dark',
        'on-light',
        'current',
      ],
      control: {
        type: 'select',
      },
    },
    label: {
      table: {
        category: 'Text',
      },
    },
    size: {
      table: {
        category: 'Modifiers',
      },
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<IconProps>;

export const IconSet: Story<IconProps> = (args) => (
  <Grid
    flow="row-dense"
    cols="10"
    align="stretch"
    justify="between"
    gap="3"
    className="w-full p-4"
  >
    {icons.map((icon) => (
      <Stack
        key={icon}
        direction="column"
        align="center"
        gap="2"
        className="bg-surface-color-background-subdued p-1 rounded-sm"
      >
        <Icon {...args} name={icon} />
        <Text
          as="p"
          size="xs"
          color="danger"
          className="bg-surface-color-background-default w-full text-center"
        >
          {icon}
        </Text>
      </Stack>
    ))}
  </Grid>
);

export const SingleIcon: Story<IconProps> = (args) => <Icon {...args} />;
SingleIcon.parameters = {
  layout: 'centered',
};
`,locationsMap:{"icon-set":{startLoc:{col:41,line:70},endLoc:{col:1,line:99},startBody:{col:41,line:70},endBody:{col:1,line:99}},"single-icon":{startLoc:{col:44,line:101},endLoc:{col:72,line:101},startBody:{col:44,line:101},endBody:{col:72,line:101}}}},layout:"fullscreen",badges:[p.STABLE],design:{type:"figma",url:"https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Skala?node-id=12%3A2786"}},args:{name:"plus",color:"body-lighter",label:"add",size:"md"},argTypes:{name:{table:{category:"Modifiers"},options:[...a],control:{type:"select"}},color:{table:{category:"Modifiers"},options:["body","body-lighter","caption","success","danger","warning","on-dark","on-light","current"],control:{type:"select"}},label:{table:{category:"Text"}},size:{table:{category:"Modifiers"},options:["sm","md","lg"],control:{type:"inline-radio"}}}},M=t(n=>e(i,{flow:"row-dense",cols:"10",align:"stretch",justify:"between",gap:"3",className:"w-full p-4",children:a.map(o=>m(l,{direction:"column",align:"center",gap:"2",className:"bg-surface-color-background-subdued p-1 rounded-sm",children:[e(r,{...n,name:o}),e(d,{as:"p",size:"xs",color:"danger",className:"bg-surface-color-background-default w-full text-center",children:o})]},o))}),"IconSet"),g=t(n=>e(r,{...n}),"SingleIcon");g.parameters={layout:"centered"};const P=["IconSet","SingleIcon"];export{M as IconSet,g as SingleIcon,P as __namedExportsOrder,A as default};
//# sourceMappingURL=Icon.stories.9526bb81.js.map
