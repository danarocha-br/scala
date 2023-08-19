var d=Object.defineProperty;var a=(e,n)=>d(e,"name",{value:n,configurable:!0});import{P as r,S as c}from"./index.41fc60f6.js";import{B as p}from"./storybook-addon-badges.esm.f6562d9c.js";import{r as u}from"./index.2020b128.js";import{j as o}from"./jsx-runtime.c7344a7c.js";import"./index.5be69f72.js";import"./iframe.d108dca0.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const B={title:"Form/PasswordInput",component:r,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import { PasswordInput, PasswordInputProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

export default {
  title: 'Form/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Password',
    name: 'password',
    variant: 'default',
    disabled: false,
    readOnly: false,
    loading: false,
    errors: undefined,
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
    errors: {
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
    readOnly: {
      table: {
        category: 'State',
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
} as Meta<PasswordInputProps>;

export const Default: Story<PasswordInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    return setInputValue(e.currentTarget.value);
  };

  return (
    <PasswordInput
      {...args}
      value={inputValue}
      onChange={(e) => handleChange(e)}
    />
  );
};
`,locationsMap:{default:{startLoc:{col:50,line:74},endLoc:{col:1,line:88},startBody:{col:50,line:74},endBody:{col:1,line:88}}}},layout:"centered",badges:[p.STABLE],design:{type:"figma",url:""}},args:{label:"Password",name:"password",variant:"default",disabled:!1,readOnly:!1,loading:!1,errors:void 0},argTypes:{label:{table:{category:"Text"}},name:{table:{category:"Text"}},placeholder:{table:{category:"Text"}},errors:{table:{category:"Modifiers"}},disabled:{table:{category:"State"}},loading:{table:{category:"State"}},readOnly:{table:{category:"State"}}},decorators:[e=>o(c,{align:"center",justify:"center",className:"h-screen w-[350px]",children:e()})]},E=a(e=>{const[n,s]=u.exports.useState(""),l=a(t=>s(t.currentTarget.value),"handleChange");return o(r,{...e,value:n,onChange:t=>l(t)})},"Default"),k=["Default"];export{E as Default,k as __namedExportsOrder,B as default};
//# sourceMappingURL=PasswordInput.stories.82a5cfc8.js.map
