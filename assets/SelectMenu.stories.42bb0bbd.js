var d=Object.defineProperty;var r=(n,a)=>d(n,"name",{value:a,configurable:!0});import{a2 as t,S as c,B as u,I as m}from"./index.41fc60f6.js";import{B as b}from"./storybook-addon-badges.esm.f6562d9c.js";import{j as e,a as l}from"./jsx-runtime.c7344a7c.js";import"./index.2020b128.js";import"./iframe.d108dca0.js";import"./index.5be69f72.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const D={title:"Form/SelectMenu",component:t.Root,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import { Box, Icon, SelectMenu, SelectMenuProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/SelectMenu',
  component: SelectMenu.Root,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Status',
    defaultValue: 'invoiced',
  },
  argTypes: {
    label: {
      table: {
        category: 'Text',
      },
    },
    defaultValue: {
      table: {
        category: 'Text',
      },
    },
    css: {
      table: {
        category: 'Modifiers',
      },
    },
    children: {
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

type CustomSelectProps = {
  label: string;
  color: string;
  value: string;
  disabled?: boolean;
};

const CustomSelectItem = ({
  value,
  color,
  label,
  disabled = false,
}: CustomSelectProps) => (
  <SelectMenu.Item value={value} disabled={disabled}>
    <SelectMenu.ItemText>
      <Stack align="center">
        <Box className={\`w-3 h-3 rounded-sm \${color}\`} />
        {label}
      </Stack>
    </SelectMenu.ItemText>
    <SelectMenu.Indicator>
      <Icon
        label="indicator"
        name="check"
        size="sm"
        color="current"
        className="transition-transform scale-[0.8]"
      />
    </SelectMenu.Indicator>
  </SelectMenu.Item>
);

export const Default: Story<SelectMenuProps> = (args) => {
  return (
    <SelectMenu.Root defaultValue="draft" {...args}>
      <SelectMenu.Group>
        <CustomSelectItem
          value="draft"
          label="Rascunho"
          color="bg-feedback-color-background-warning-hover"
        />
        <CustomSelectItem
          value="invoiced"
          label="Enviado"
          color="bg-interactive-color-background-pressed"
        />

        <CustomSelectItem
          value="paid"
          label="Pago"
          color="bg-action-color-background-secondary-enabled"
        />
        <CustomSelectItem
          value="disabled"
          label="Disabled"
          color="bg-action-color-background-primary-disabled"
          disabled
        />
      </SelectMenu.Group>
    </SelectMenu.Root>
  );
};
`,locationsMap:{default:{startLoc:{col:47,line:85},endLoc:{col:1,line:114},startBody:{col:47,line:85},endBody:{col:1,line:114}}}},layout:"centered",badges:[b.STABLE],design:{type:"figma",url:""}},args:{label:"Status",defaultValue:"invoiced"},argTypes:{label:{table:{category:"Text"}},defaultValue:{table:{category:"Text"}},css:{table:{category:"Modifiers"}},children:{table:{category:"Modifiers"}}},decorators:[n=>e(c,{align:"center",justify:"center",className:"h-screen px-[200px]",children:n()})]},o=r(({value:n,color:a,label:s,disabled:i=!1})=>l(t.Item,{value:n,disabled:i,children:[e(t.ItemText,{children:l(c,{align:"center",children:[e(u,{className:`w-3 h-3 rounded-sm ${a}`}),s]})}),e(t.Indicator,{children:e(m,{label:"indicator",name:"check",size:"sm",color:"current",className:"transition-transform scale-[0.8]"})})]}),"CustomSelectItem"),E=r(n=>e(t.Root,{defaultValue:"draft",...n,children:l(t.Group,{children:[e(o,{value:"draft",label:"Rascunho",color:"bg-feedback-color-background-warning-hover"}),e(o,{value:"invoiced",label:"Enviado",color:"bg-interactive-color-background-pressed"}),e(o,{value:"paid",label:"Pago",color:"bg-action-color-background-secondary-enabled"}),e(o,{value:"disabled",label:"Disabled",color:"bg-action-color-background-primary-disabled",disabled:!0})]})}),"Default"),R=["Default"];export{E as Default,R as __namedExportsOrder,D as default};
//# sourceMappingURL=SelectMenu.stories.42bb0bbd.js.map
