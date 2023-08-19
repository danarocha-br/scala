var s=Object.defineProperty;var t=(o,i)=>s(o,"name",{value:i,configurable:!0});import{T as e,G as r}from"./index.41fc60f6.js";import{B as l}from"./storybook-addon-badges.esm.f6562d9c.js";import{j as n,a}from"./jsx-runtime.c7344a7c.js";import"./index.2020b128.js";import"./iframe.d108dca0.js";import"./index.5be69f72.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const L={title:"Primitives/Text",component:e,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import { Text, TextProps, Grid } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Primitives/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    size: 'md',
    align: 'left',
    color: 'body',
    weight: 'regular',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor. ',
  },
  argTypes: {
    size: {
      table: {
        category: 'Modifiers',
      },
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
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
    weight: {
      table: {
        category: 'Modifiers',
      },
      options: ['light', 'regular', 'medium', 'semibold'],
      control: {
        type: 'inline-radio',
      },
    },
    align: {
      table: {
        category: 'Modifiers',
      },
      options: ['left', 'center', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
    leading: {
      table: {
        category: 'Modifiers',
      },
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      control: {
        type: 'select',
      },
    },
    children: {
      table: {
        category: 'Modifiers',
      },
    },
    className: {
      table: {
        category: 'Modifiers',
      },
    },
    as: {
      table: {
        category: 'Modifiers',
      },
    },
  },
} as Meta<TextProps>;

const Template: Story<TextProps> = (args) => (
  <Grid cols="2" rows="9" align="center" className="max-w-[600px] py-6">
    <Text size="sm" color="caption">
      4xl
    </Text>
    <Text {...args} size="4xl" />
    <Text size="sm" color="caption">
      3xl
    </Text>
    <Text {...args} size="3xl" />
    <Text size="sm" color="caption">
      2xl
    </Text>
    <Text {...args} size="2xl" />
    <Text size="sm" color="caption">
      xl
    </Text>
    <Text {...args} size="xl" />
    <Text size="sm" color="caption">
      lg
    </Text>
    <Text {...args} size="lg" />
    <Text size="sm" color="caption">
      md
    </Text>
    <Text {...args} size="md" />
    <Text size="sm" color="caption">
      sm
    </Text>
    <Text {...args} size="sm" />
    <Text size="sm" color="caption">
      xs
    </Text>
    <Text {...args} size="xs" />
    <Text size="sm" color="caption">
      xxs
    </Text>
    <Text {...args} size="xxs" />
  </Grid>
);

export const AllScales = Template.bind({});

export const CustomTag: Story<TextProps> = (args) => (
  <Text {...args}>Text</Text>
);
CustomTag.args = {
  as: 'strong',
};
`,locationsMap:{"all-scales":{startLoc:{col:35,line:98},endLoc:{col:1,line:137},startBody:{col:35,line:98},endBody:{col:1,line:137}},"custom-tag":{startLoc:{col:43,line:141},endLoc:{col:1,line:143},startBody:{col:43,line:141},endBody:{col:1,line:143}}}},layout:"centered",badges:[l.STABLE],design:{type:"figma",url:""}},args:{size:"md",align:"left",color:"body",weight:"regular",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor. "},argTypes:{size:{table:{category:"Modifiers"},options:["xxs","xs","sm","md","lg","xl","2xl","3xl","4xl"],control:{type:"select"}},color:{table:{category:"Modifiers"},options:["body","body-lighter","caption","success","danger","warning","on-dark","on-light","current"],control:{type:"select"}},weight:{table:{category:"Modifiers"},options:["light","regular","medium","semibold"],control:{type:"inline-radio"}},align:{table:{category:"Modifiers"},options:["left","center","right"],control:{type:"inline-radio"}},leading:{table:{category:"Modifiers"},options:["1","2","3","4","5","6","7","8","9"],control:{type:"select"}},children:{table:{category:"Modifiers"}},className:{table:{category:"Modifiers"}},as:{table:{category:"Modifiers"}}}},c=t(o=>a(r,{cols:"2",rows:"9",align:"center",className:"max-w-[600px] py-6",children:[n(e,{size:"sm",color:"caption",children:"4xl"}),n(e,{...o,size:"4xl"}),n(e,{size:"sm",color:"caption",children:"3xl"}),n(e,{...o,size:"3xl"}),n(e,{size:"sm",color:"caption",children:"2xl"}),n(e,{...o,size:"2xl"}),n(e,{size:"sm",color:"caption",children:"xl"}),n(e,{...o,size:"xl"}),n(e,{size:"sm",color:"caption",children:"lg"}),n(e,{...o,size:"lg"}),n(e,{size:"sm",color:"caption",children:"md"}),n(e,{...o,size:"md"}),n(e,{size:"sm",color:"caption",children:"sm"}),n(e,{...o,size:"sm"}),n(e,{size:"sm",color:"caption",children:"xs"}),n(e,{...o,size:"xs"}),n(e,{size:"sm",color:"caption",children:"xxs"}),n(e,{...o,size:"xxs"})]}),"Template"),S=c.bind({}),m=t(o=>n(e,{...o,children:"Text"}),"CustomTag");m.args={as:"strong"};const A=["AllScales","CustomTag"];export{S as AllScales,m as CustomTag,A as __namedExportsOrder,L as default};
//# sourceMappingURL=Text.stories.eededd63.js.map
