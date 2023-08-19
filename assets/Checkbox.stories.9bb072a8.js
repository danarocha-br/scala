var s=Object.defineProperty;var o=(e,a)=>s(e,"name",{value:a,configurable:!0});import{o as n,S as c}from"./index.41fc60f6.js";import{B as l}from"./storybook-addon-badges.esm.f6562d9c.js";import{j as r,a as i}from"./jsx-runtime.c7344a7c.js";import"./index.2020b128.js";import"./iframe.d108dca0.js";import"./index.5be69f72.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const I={title:"Form/Checkbox",component:n.Item,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import { Checkbox, CheckboxProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/Checkbox',
  component: Checkbox.Item,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    variant: 'regular',
    name: 'option1',
    label: 'Accept terms and conditions',
    disabled: false,
  },
  argTypes: {
    name: {
      table: {
        category: 'Text',
      },
    },
    defaultChecked: {
      table: {
        category: 'Modifiers',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['regular', 'task'],
      control: {
        type: 'inline-radio',
      },
    },
    errors: {
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
        <Stack align="center" justify="center" className="h-screen w-[600px]">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Regular: Story<CheckboxProps> = (args) => {
  return <Checkbox.Item {...args} />;
};

export const RegularWithLegend: Story<CheckboxProps> = (args) => {
  return (
    <Checkbox.Fieldset legend="Choose your options">
      <Checkbox.Item {...args} name="1" />
      <Checkbox.Item {...args} name="2" />
    </Checkbox.Fieldset>
  );
};

export const Task = Regular.bind({});
Task.args = {
  variant: 'task',
};

export const HasErrors = Regular.bind({});
HasErrors.args = {
  errors: {
    message: 'I am an error message.',
  },
};
`,locationsMap:{regular:{startLoc:{col:45,line:65},endLoc:{col:1,line:67},startBody:{col:45,line:65},endBody:{col:1,line:67}},"regular-with-legend":{startLoc:{col:55,line:69},endLoc:{col:1,line:76},startBody:{col:55,line:69},endBody:{col:1,line:76}},task:{startLoc:{col:45,line:65},endLoc:{col:1,line:67},startBody:{col:45,line:65},endBody:{col:1,line:67}},"has-errors":{startLoc:{col:45,line:65},endLoc:{col:1,line:67},startBody:{col:45,line:65},endBody:{col:1,line:67}}}},layout:"centered",badges:[l.STABLE],design:{type:"figma",url:""}},args:{variant:"regular",name:"option1",label:"Accept terms and conditions",disabled:!1},argTypes:{name:{table:{category:"Text"}},defaultChecked:{table:{category:"Modifiers"}},variant:{table:{category:"Modifiers"},options:["regular","task"],control:{type:"inline-radio"}},errors:{table:{category:"State"}},disabled:{table:{category:"State"}}},decorators:[e=>r(c,{align:"center",justify:"center",className:"h-screen w-[600px]",children:e()})]},t=o(e=>r(n.Item,{...e}),"Regular"),T=o(e=>i(n.Fieldset,{legend:"Choose your options",children:[r(n.Item,{...e,name:"1"}),r(n.Item,{...e,name:"2"})]}),"RegularWithLegend"),d=t.bind({});d.args={variant:"task"};const m=t.bind({});m.args={errors:{message:"I am an error message."}};const R=["Regular","RegularWithLegend","Task","HasErrors"];export{m as HasErrors,t as Regular,T as RegularWithLegend,d as Task,R as __namedExportsOrder,I as default};
//# sourceMappingURL=Checkbox.stories.9bb072a8.js.map
