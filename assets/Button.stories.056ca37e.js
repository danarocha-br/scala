var s=Object.defineProperty;var e=(n,i)=>s(n,"name",{value:i,configurable:!0});import{k as t,S as l}from"./index.41fc60f6.js";import{B as c}from"./storybook-addon-badges.esm.f6562d9c.js";import{j as o,a,F as r}from"./jsx-runtime.c7344a7c.js";import"./index.2020b128.js";import"./iframe.d108dca0.js";import"./index.5be69f72.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const M={title:"Components/Button",component:t,parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=55%3A16636&mode=design&t=6xBLjdHeoRhcrzFa-1',
    },
  },
  args: {
    label: 'Label',
    variant: 'primary',
    color: 'primary',
    size: 'md',
    fullWidth: false,
    disabled: false,
    loading: false,
    animateOnHover: false,
    onClick: () => 'clicked',
  },
  argTypes: {
    label: {
      table: {
        category: 'Text',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['primary', 'transparent', 'icon'],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      table: {
        category: 'Modifiers',
      },
      options: ['primary', 'secondary', 'danger'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      table: {
        category: 'Modifiers',
      },
    },
    icon: {
      table: {
        category: 'Modifiers',
      },
    },
    animateOnHover: {
      table: {
        category: 'Modifiers',
      },
    },
    fullWidth: {
      table: {
        category: 'Modifiers',
      },
    },
    className: {
      table: {
        category: 'Modifiers',
      },
    },
    disabled: {
      table: {
        category: 'State',
      },
    },
    loading: {
      table: {
        category: 'State',
      },
    },
    onClick: {
      action: 'click',
      table: {
        category: 'Function',
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
} as Meta<ButtonProps>;

export const DefaultVariant: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} color="primary" />
    <Button {...args} color="secondary" />
    <Button {...args} color="danger" />
  </>
);
DefaultVariant.args = {
  variant: 'primary',
};

export const TransparentVariant: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} color="primary" />
    <Button {...args} color="secondary" />
    <Button {...args} color="danger" />
  </>
);
TransparentVariant.args = {
  variant: 'transparent',
};

export const Sizes: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} size="xs" />
    <Button {...args} size="sm" />
    <Button {...args} size="md" />
    <Button {...args} size="lg" />
  </>
);

export const StateDisabled: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} size="xs" disabled />
    <Button {...args} size="sm" disabled />
    <Button {...args} size="md" disabled />
    <Button {...args} size="lg" disabled />
  </>
);

export const StateLoading: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} size="xs" loading />
    <Button {...args} size="sm" loading />
    <Button {...args} size="md" loading />
    <Button {...args} size="lg" loading />
  </>
);

export const PrimaryWithIcon: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} size="xs" icon="plus" />
    <Button {...args} size="sm" icon="plus" />
    <Button {...args} size="md" icon="plus" />
    <Button {...args} size="lg" icon="plus" />
  </>
);

export const TransparentWithIcon: Story<ButtonProps> = (args) => (
  <>
    <Button {...args} size="xs" icon="plus" variant="transparent" />
    <Button {...args} size="sm" icon="plus" variant="transparent" />
    <Button {...args} size="md" icon="plus" variant="transparent" />
    <Button {...args} size="lg" icon="plus" variant="transparent" />
  </>
);
`,locationsMap:{"default-variant":{startLoc:{col:50,line:104},endLoc:{col:1,line:110},startBody:{col:50,line:104},endBody:{col:1,line:110}},"transparent-variant":{startLoc:{col:54,line:115},endLoc:{col:1,line:121},startBody:{col:54,line:115},endBody:{col:1,line:121}},sizes:{startLoc:{col:41,line:126},endLoc:{col:1,line:133},startBody:{col:41,line:126},endBody:{col:1,line:133}},"state-disabled":{startLoc:{col:49,line:135},endLoc:{col:1,line:142},startBody:{col:49,line:135},endBody:{col:1,line:142}},"state-loading":{startLoc:{col:48,line:144},endLoc:{col:1,line:151},startBody:{col:48,line:144},endBody:{col:1,line:151}},"primary-with-icon":{startLoc:{col:51,line:153},endLoc:{col:1,line:160},startBody:{col:51,line:153},endBody:{col:1,line:160}},"transparent-with-icon":{startLoc:{col:55,line:162},endLoc:{col:1,line:169},startBody:{col:55,line:162},endBody:{col:1,line:169}}}},layout:"fullscreen",badges:[c.STABLE],design:{type:"figma",url:"https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=55%3A16636&mode=design&t=6xBLjdHeoRhcrzFa-1"}},args:{label:"Label",variant:"primary",color:"primary",size:"md",fullWidth:!1,disabled:!1,loading:!1,animateOnHover:!1,onClick:()=>"clicked"},argTypes:{label:{table:{category:"Text"}},variant:{table:{category:"Modifiers"},options:["primary","transparent","icon"],control:{type:"inline-radio"}},color:{table:{category:"Modifiers"},options:["primary","secondary","danger"],control:{type:"inline-radio"}},size:{table:{category:"Modifiers"}},icon:{table:{category:"Modifiers"}},animateOnHover:{table:{category:"Modifiers"}},fullWidth:{table:{category:"Modifiers"}},className:{table:{category:"Modifiers"}},disabled:{table:{category:"State"}},loading:{table:{category:"State"}},onClick:{action:"click",table:{category:"Function"}}},decorators:[n=>o(l,{align:"center",justify:"center",fullWidth:!0,className:"h-screen",children:n()})]},d=e(n=>a(r,{children:[o(t,{...n,color:"primary"}),o(t,{...n,color:"secondary"}),o(t,{...n,color:"danger"})]}),"DefaultVariant");d.args={variant:"primary"};const p=e(n=>a(r,{children:[o(t,{...n,color:"primary"}),o(t,{...n,color:"secondary"}),o(t,{...n,color:"danger"})]}),"TransparentVariant");p.args={variant:"transparent"};const T=e(n=>a(r,{children:[o(t,{...n,size:"xs"}),o(t,{...n,size:"sm"}),o(t,{...n,size:"md"}),o(t,{...n,size:"lg"})]}),"Sizes"),P=e(n=>a(r,{children:[o(t,{...n,size:"xs",disabled:!0}),o(t,{...n,size:"sm",disabled:!0}),o(t,{...n,size:"md",disabled:!0}),o(t,{...n,size:"lg",disabled:!0})]}),"StateDisabled"),W=e(n=>a(r,{children:[o(t,{...n,size:"xs",loading:!0}),o(t,{...n,size:"sm",loading:!0}),o(t,{...n,size:"md",loading:!0}),o(t,{...n,size:"lg",loading:!0})]}),"StateLoading"),D=e(n=>a(r,{children:[o(t,{...n,size:"xs",icon:"plus"}),o(t,{...n,size:"sm",icon:"plus"}),o(t,{...n,size:"md",icon:"plus"}),o(t,{...n,size:"lg",icon:"plus"})]}),"PrimaryWithIcon"),A=e(n=>a(r,{children:[o(t,{...n,size:"xs",icon:"plus",variant:"transparent"}),o(t,{...n,size:"sm",icon:"plus",variant:"transparent"}),o(t,{...n,size:"md",icon:"plus",variant:"transparent"}),o(t,{...n,size:"lg",icon:"plus",variant:"transparent"})]}),"TransparentWithIcon"),w=["DefaultVariant","TransparentVariant","Sizes","StateDisabled","StateLoading","PrimaryWithIcon","TransparentWithIcon"];export{d as DefaultVariant,D as PrimaryWithIcon,T as Sizes,P as StateDisabled,W as StateLoading,p as TransparentVariant,A as TransparentWithIcon,w as __namedExportsOrder,M as default};
//# sourceMappingURL=Button.stories.056ca37e.js.map
