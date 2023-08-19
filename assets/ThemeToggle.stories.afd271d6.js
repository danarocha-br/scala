var s=Object.defineProperty;var o=(e,n)=>s(e,"name",{value:n,configurable:!0});import{a9 as r,S as i}from"./index.41fc60f6.js";import{B as m}from"./storybook-addon-badges.esm.f6562d9c.js";import{r as c}from"./index.2020b128.js";import{j as t}from"./jsx-runtime.c7344a7c.js";import"./index.5be69f72.js";import"./iframe.d108dca0.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const M={title:"Components/ThemeToggle",component:r,parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { ThemeToggle, ThemeToggleProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

export default {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    isDark: false,
    onThemeChange: () => console.log('change theme'),
  },
  argTypes: {
    isDark: {
      table: {
        category: 'Modifiers',
      },
    },
    css: {
      table: {
        category: 'Modifiers',
      },
    },
    onThemeChange: {
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
} as Meta;

export const Default: Story<ThemeToggleProps> = (args) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeToggle
      {...args}
      isDark={isDark}
      onThemeChange={() => setIsDark(!isDark)}
    />
  );
};
`,locationsMap:{default:{startLoc:{col:48,line:49},endLoc:{col:1,line:58},startBody:{col:48,line:49},endBody:{col:1,line:58}}}},layout:"centered",badges:[m.STABLE],design:{type:"figma",url:""}},args:{isDark:!1,onThemeChange:()=>console.log("change theme")},argTypes:{isDark:{table:{category:"Modifiers"}},css:{table:{category:"Modifiers"}},onThemeChange:{table:{category:"Modifiers"}}},decorators:[e=>t(i,{align:"center",justify:"center",className:"h-screen px-[200px]",children:e()})]},B=o(e=>{const[n,a]=c.exports.useState(!1);return t(r,{...e,isDark:n,onThemeChange:()=>a(!n)})},"Default"),C=["Default"];export{B as Default,C as __namedExportsOrder,M as default};
//# sourceMappingURL=ThemeToggle.stories.afd271d6.js.map
