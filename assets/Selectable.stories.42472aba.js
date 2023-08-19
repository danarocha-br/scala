var i=Object.defineProperty;var o=(e,a)=>i(e,"name",{value:a,configurable:!0});import{q as l,F as s,A as r}from"./index.41fc60f6.js";import{B as u}from"./storybook-addon-badges.esm.f6562d9c.js";import{j as n}from"./jsx-runtime.c7344a7c.js";import"./index.2020b128.js";import"./iframe.d108dca0.js";import"./index.5be69f72.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const V={title:"Form/Selectable",component:l.Button,parameters:{storySource:{source:`import { StoryObj, Meta, Story } from '@storybook/react';
import {
  Avatar,
  Form,
  Selectable,
  SelectableButtonProps,
  SelectableMenuProps,
} from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/Selectable',
  component: Selectable.Button,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    // children: <Stack>some</Stack>,
    icon: 'user',
    label: 'Add user',
    isActive: false,
    disabled: false,
  },
} as Meta<SelectableButtonProps>;

export const Button: StoryObj<SelectableButtonProps> = {};

export const MenuSingleValue: Story<SelectableMenuProps> = (args) => {
  return (
    <Form>
      <Selectable.Menu {...args} />
    </Form>
  );
};
MenuSingleValue.args = {
  name: 'select',
  isMulti: false,
  disabled: false,
  loading: false,
  isSearchable: true,
  isClearable: true,
  noOptionMessage: 'No options found',
  placeholder: 'Select one option',
  options: [
    { label: 'Option 1', value: 'Option 1', icon: 'status' },
    { label: 'Option 2 dhui sauiasd ', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
  ],
};

export const MenuMultiValue = MenuSingleValue.bind({});
MenuMultiValue.args = {
  name: 'select',
  isMulti: true,
  disabled: false,
  loading: false,
  isSearchable: true,
  isClearable: false,
  noOptionMessage: 'No options found',
  placeholder: 'Select one option',
  options: [
    {
      label: 'Option 1',
      value: 'Option 1',
      slot: <Avatar username="Dana Rocha" size="sm" />,
    },
    { label: 'Option 2 dhui sauiasd ', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
  ],
};
`,locationsMap:{"menu-single-value":{startLoc:{col:59,line:33},endLoc:{col:1,line:39},startBody:{col:59,line:33},endBody:{col:1,line:39}},"menu-multi-value":{startLoc:{col:59,line:33},endLoc:{col:1,line:39},startBody:{col:59,line:33},endBody:{col:1,line:39}}}},layout:"centered",badges:[u.STABLE],design:{type:"figma",url:""}},args:{icon:"user",label:"Add user",isActive:!1,disabled:!1}},x={},t=o(e=>n(s,{children:n(l.Menu,{...e})}),"MenuSingleValue");t.args={name:"select",isMulti:!1,disabled:!1,loading:!1,isSearchable:!0,isClearable:!0,noOptionMessage:"No options found",placeholder:"Select one option",options:[{label:"Option 1",value:"Option 1",icon:"status"},{label:"Option 2 dhui sauiasd ",value:"Option 2"},{label:"Option 3",value:"Option 3"},{label:"Option 4",value:"Option 4"}]};const p=t.bind({});p.args={name:"select",isMulti:!0,disabled:!1,loading:!1,isSearchable:!0,isClearable:!1,noOptionMessage:"No options found",placeholder:"Select one option",options:[{label:"Option 1",value:"Option 1",slot:n(r,{username:"Dana Rocha",size:"sm"})},{label:"Option 2 dhui sauiasd ",value:"Option 2"},{label:"Option 3",value:"Option 3"},{label:"Option 4",value:"Option 4"}]};const F=["Button","MenuSingleValue","MenuMultiValue"];export{x as Button,p as MenuMultiValue,t as MenuSingleValue,F as __namedExportsOrder,V as default};
//# sourceMappingURL=Selectable.stories.42472aba.js.map
