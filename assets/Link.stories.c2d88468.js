var a=Object.defineProperty;var e=(n,t)=>a(n,"name",{value:t,configurable:!0});import{L as r,S as i}from"./index.41fc60f6.js";import{B as s}from"./storybook-addon-badges.esm.f6562d9c.js";import{j as o,a as c,F as l}from"./jsx-runtime.c7344a7c.js";import"./index.2020b128.js";import"./iframe.d108dca0.js";import"./index.5be69f72.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const G={title:"Navigation/Link",component:r,parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { Link, LinkProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Navigation/Link',
  component: Link,
  parameters: {
    layout: 'fullscreen',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=644%3A195578&mode=design&t=QcKO9NKDxvGimjvK-1',
    },
  },
  args: {
    children: 'I am a link label',
    href: '/',
    target: '/',
    color: 'primary',
  },
  argTypes: {
    children: {
      table: {
        category: 'Text',
      },
    },
    href: {
      table: {
        category: 'Text',
      },
    },
    target: {
      table: {
        category: 'Modifiers',
      },
    },
    color: {
      table: {
        category: 'Modifiers',
      },
      options: ['primary', 'secondary', 'caption'],
      control: {
        type: 'inline-radio',
      },
    },
    css: {
      table: {
        category: 'Modifiers',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" className="h-screen px-[200px]">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<LinkProps>;

export const Variants: Story<LinkProps> = (args) => (
  <>
    <Link {...args} color="primary" />
    <Link {...args} color="secondary" />
    <Link {...args} color="caption" />
  </>
);
`,locationsMap:{variants:{startLoc:{col:42,line:64},endLoc:{col:1,line:70},startBody:{col:42,line:64},endBody:{col:1,line:70}}}},layout:"fullscreen",badges:[s.STABLE],design:{type:"figma",url:"https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=644%3A195578&mode=design&t=QcKO9NKDxvGimjvK-1"}},args:{children:"I am a link label",href:"/",target:"/",color:"primary"},argTypes:{children:{table:{category:"Text"}},href:{table:{category:"Text"}},target:{table:{category:"Modifiers"}},color:{table:{category:"Modifiers"},options:["primary","secondary","caption"],control:{type:"inline-radio"}},css:{table:{category:"Modifiers"}}},decorators:[n=>o(i,{align:"center",justify:"center",className:"h-screen px-[200px]",children:n()})]},M=e(n=>c(l,{children:[o(r,{...n,color:"primary"}),o(r,{...n,color:"secondary"}),o(r,{...n,color:"caption"})]}),"Variants"),B=["Variants"];export{M as Variants,B as __namedExportsOrder,G as default};
//# sourceMappingURL=Link.stories.c2d88468.js.map
