var i=Object.defineProperty;var t=(e,r)=>i(e,"name",{value:r,configurable:!0});import{A as n,S as s}from"./index.41fc60f6.js";import{B as l}from"./storybook-addon-badges.esm.f6562d9c.js";import{j as a,a as c,F as d}from"./jsx-runtime.c7344a7c.js";import"./index.2020b128.js";import"./iframe.d108dca0.js";import"./index.5be69f72.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const B={title:"Components/Avatar",component:n,parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=16%3A6189&mode=design&t=6xBLjdHeoRhcrzFa-1',
    },
  },
  args: {
    username: 'Joe Smith',
    size: 'md',
    variant: 'circle',
    imageURL: 'https://source.unsplash.com/ew_Ou6oiQ2c',
    imageALT: 'user avatar',
    loading: false,
    showUsername: false,
  },
  argTypes: {
    username: {
      table: {
        category: 'Text',
      },
    },
    imageALT: {
      table: {
        category: 'Text',
      },
    },
    imageURL: {
      table: {
        category: 'Modifiers',
      },
    },
    bg: {
      table: {
        category: 'Modifiers',
      },
    },
    initialsColor: {
      table: {
        category: 'Modifiers',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['circle', 'square'],
      control: {
        type: 'inline-radio',
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
    loading: {
      table: {
        category: 'Modifiers',
      },
    },
    showUsername: {
      table: {
        category: 'Modifiers',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack
          gap="8"
          align="center"
          justify="center"
          className="h-screen px-[200px] bg-background-color-default"
        >
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<AvatarProps>;

export const Sizes: Story<AvatarProps> = (args) => (
  <>
    <Avatar
      {...args}
      size="sm"
      bgColor="bg-royal-400"
      initialsColor="text-white"
    />
    <Avatar {...args} />
    <Avatar {...args} size="lg" />
  </>
);

export const WithFallback = Sizes.bind({});
WithFallback.args = {
  imageURL: undefined,
};

export const Square = Sizes.bind({});
Square.args = {
  variant: 'square',
  imageURL: undefined,
};

export const WithUsername = Sizes.bind({});
WithUsername.args = {
  imageURL: undefined,
  showUsername: true,
};
`,locationsMap:{sizes:{startLoc:{col:41,line:95},endLoc:{col:1,line:106},startBody:{col:41,line:95},endBody:{col:1,line:106}},"with-fallback":{startLoc:{col:41,line:95},endLoc:{col:1,line:106},startBody:{col:41,line:95},endBody:{col:1,line:106}},square:{startLoc:{col:41,line:95},endLoc:{col:1,line:106},startBody:{col:41,line:95},endBody:{col:1,line:106}},"with-username":{startLoc:{col:41,line:95},endLoc:{col:1,line:106},startBody:{col:41,line:95},endBody:{col:1,line:106}}}},badges:[l.STABLE],design:{type:"figma",url:"https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=16%3A6189&mode=design&t=6xBLjdHeoRhcrzFa-1"}},args:{username:"Joe Smith",size:"md",variant:"circle",imageURL:"https://source.unsplash.com/ew_Ou6oiQ2c",imageALT:"user avatar",loading:!1,showUsername:!1},argTypes:{username:{table:{category:"Text"}},imageALT:{table:{category:"Text"}},imageURL:{table:{category:"Modifiers"}},bg:{table:{category:"Modifiers"}},initialsColor:{table:{category:"Modifiers"}},variant:{table:{category:"Modifiers"},options:["circle","square"],control:{type:"inline-radio"}},size:{table:{category:"Modifiers"},options:["sm","md","lg"],control:{type:"inline-radio"}},loading:{table:{category:"Modifiers"}},showUsername:{table:{category:"Modifiers"}}},decorators:[e=>a(s,{gap:"8",align:"center",justify:"center",className:"h-screen px-[200px] bg-background-color-default",children:e()})]},o=t(e=>c(d,{children:[a(n,{...e,size:"sm",bgColor:"bg-royal-400",initialsColor:"text-white"}),a(n,{...e}),a(n,{...e,size:"lg"})]}),"Sizes"),m=o.bind({});m.args={imageURL:void 0};const g=o.bind({});g.args={variant:"square",imageURL:void 0};const p=o.bind({});p.args={imageURL:void 0,showUsername:!0};const k=["Sizes","WithFallback","Square","WithUsername"];export{o as Sizes,g as Square,m as WithFallback,p as WithUsername,k as __namedExportsOrder,B as default};
//# sourceMappingURL=Avatar.stories.4adc4a9e.js.map
