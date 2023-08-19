var d=Object.defineProperty;var l=(e,n)=>d(e,"name",{value:n,configurable:!0});import{a3 as t,S as u,F as c}from"./index.41fc60f6.js";import{B as g}from"./storybook-addon-badges.esm.f6562d9c.js";import{r as i}from"./index.2020b128.js";import{j as o,a as p}from"./jsx-runtime.c7344a7c.js";import"./index.5be69f72.js";import"./iframe.d108dca0.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const W={title:"Form/SelectMulti",component:t,parameters:{storySource:{source:`//@ts-noCheck
import { Story, Meta } from '@storybook/react';
import { Form, SelectMulti, SelectMultiProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

export default {
  title: 'Form/SelectMulti',
  component: SelectMulti,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    name: 'select',
    label: 'Select an item',
    variant: 'default',
    isMulti: false,
    disabled: false,
    loading: false,
    emptyMessage: 'No options found',
    onCreateOptionLabel: 'Create new',
    onCreateOption: () => '',
    placeholder: 'Select one option',
    options: [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
    ],
  },
  argTypes: {
    label: {
      table: {
        category: 'Text',
      },
    },
    name: {
      table: {
        category: 'Text',
      },
    },
    placeholder: {
      table: {
        category: 'Text',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['default', 'table'],
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
    loading: {
      table: {
        category: 'State',
      },
    },
    isMulti: {
      table: {
        category: 'Modifiers',
      },
    },
    emptyMessage: {
      table: {
        category: 'Modifiers',
      },
    },
    onCreateOptionLabel: {
      table: {
        category: 'Text',
      },
    },
    onCreateOption: {
      table: {
        category: 'Modifiers',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" className="h-screen w-[350px]">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<SelectMultiProps>;

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\\W/g, ''),
});

const defaultOptions = [
  createOption('One'),
  createOption('Two'),
  createOption('Three'),
  createOption('Four'),
];

export const Default: Story<SelectMultiProps> = (args) => {
  const [options] = useState([
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
  ]);

  return (
    <Form>
      <SelectMulti {...args} />
      <SelectMulti {...args} icon="business" options={options} />
    </Form>
  );
};

export const WithDefaultOptions = Default.bind({});
WithDefaultOptions.args = {
  defaultOptions: [
    {
      label: 'Option 2',
      value: 'Option 2',
    },
  ],
};

export const TableVariant = Default.bind({});
TableVariant.args = {
  variant: 'table',
};

export const DisabledState = Default.bind({});
DisabledState.args = {
  disabled: true,
};

export const LoadingState = Default.bind({});
LoadingState.args = {
  loading: true,
};

export const HasError = Default.bind({});
HasError.args = {
  errors: {
    message: 'I am an error message.',
  },
};

export const CreateOption: Story<SelectMultiProps> = (args) => {
  const [isLoading] = useState(false);
  const [options] = useState(defaultOptions);

  // const handleCreate = (inputValue: string) => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     const newOption = createOption(inputValue);
  //     setIsLoading(false);
  //     setOptions((prev) => [...prev, newOption]);
  //     setValue(newOption);
  //   }, 1000);
  // };

  return (
    <Form>
      <SelectMulti
        {...args}
        // onChange={(newValue: Option) => setValue(newValue)}
        // onCreateOption={handleCreate}
        // value={value}
        options={options}
        loading={isLoading}
      />
      <SelectMulti
        {...args}
        icon="business"
        // onChange={(newValue: Option) => setValue(newValue)}
        // onCreateOption={handleCreate}
        // value={value}
        options={options}
        loading={isLoading}
      />
    </Form>
  );
};
`,locationsMap:{default:{startLoc:{col:48,line:118},endLoc:{col:1,line:130},startBody:{col:48,line:118},endBody:{col:1,line:130}},"with-default-options":{startLoc:{col:48,line:118},endLoc:{col:1,line:130},startBody:{col:48,line:118},endBody:{col:1,line:130}},"table-variant":{startLoc:{col:48,line:118},endLoc:{col:1,line:130},startBody:{col:48,line:118},endBody:{col:1,line:130}},"disabled-state":{startLoc:{col:48,line:118},endLoc:{col:1,line:130},startBody:{col:48,line:118},endBody:{col:1,line:130}},"loading-state":{startLoc:{col:48,line:118},endLoc:{col:1,line:130},startBody:{col:48,line:118},endBody:{col:1,line:130}},"has-error":{startLoc:{col:48,line:118},endLoc:{col:1,line:130},startBody:{col:48,line:118},endBody:{col:1,line:130}},"create-option":{startLoc:{col:53,line:164},endLoc:{col:1,line:199},startBody:{col:53,line:164},endBody:{col:1,line:199}}}},layout:"centered",badges:[g.STABLE],design:{type:"figma",url:""}},args:{name:"select",label:"Select an item",variant:"default",isMulti:!1,disabled:!1,loading:!1,emptyMessage:"No options found",onCreateOptionLabel:"Create new",onCreateOption:()=>"",placeholder:"Select one option",options:[{label:"Option 1",value:"Option 1"},{label:"Option 2",value:"Option 2"}]},argTypes:{label:{table:{category:"Text"}},name:{table:{category:"Text"}},placeholder:{table:{category:"Text"}},variant:{table:{category:"Modifiers"},options:["default","table"],control:{type:"inline-radio"}},errors:{table:{category:"State"}},disabled:{table:{category:"State"}},loading:{table:{category:"State"}},isMulti:{table:{category:"Modifiers"}},emptyMessage:{table:{category:"Modifiers"}},onCreateOptionLabel:{table:{category:"Text"}},onCreateOption:{table:{category:"Modifiers"}}},decorators:[e=>o(u,{align:"center",justify:"center",className:"h-screen w-[350px]",children:e()})]},r=l(e=>({label:e,value:e.toLowerCase().replace(/\W/g,"")}),"createOption"),b=[r("One"),r("Two"),r("Three"),r("Four")],a=l(e=>{const[n]=i.exports.useState([{label:"Option 1",value:"Option 1"},{label:"Option 2",value:"Option 2"}]);return p(c,{children:[o(t,{...e}),o(t,{...e,icon:"business",options:n})]})},"Default"),m=a.bind({});m.args={defaultOptions:[{label:"Option 2",value:"Option 2"}]};const y=a.bind({});y.args={variant:"table"};const O=a.bind({});O.args={disabled:!0};const f=a.bind({});f.args={loading:!0};const S=a.bind({});S.args={errors:{message:"I am an error message."}};const j=l(e=>{const[n]=i.exports.useState(!1),[s]=i.exports.useState(b);return p(c,{children:[o(t,{...e,options:s,loading:n}),o(t,{...e,icon:"business",options:s,loading:n})]})},"CreateOption"),A=["Default","WithDefaultOptions","TableVariant","DisabledState","LoadingState","HasError","CreateOption"];export{j as CreateOption,a as Default,O as DisabledState,S as HasError,f as LoadingState,y as TableVariant,m as WithDefaultOptions,A as __namedExportsOrder,W as default};
//# sourceMappingURL=SelectMulti.stories.3a657840.js.map
