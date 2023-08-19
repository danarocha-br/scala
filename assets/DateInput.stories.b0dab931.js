var d=Object.defineProperty;var l=(n,e)=>d(n,"name",{value:e,configurable:!0});import{w as a,S as s}from"./index.41fc60f6.js";import{B as i}from"./storybook-addon-badges.esm.f6562d9c.js";import{r as c}from"./index.2020b128.js";import{j as r,a as p}from"./jsx-runtime.c7344a7c.js";import"./index.5be69f72.js";import"./iframe.d108dca0.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const k={title:"Form/DateInput",component:a,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import { DateInput, DateInputProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

export default {
  title: 'Form/DateInput',
  component: DateInput,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Start date',
    name: 'start_date',
    variant: 'default',
    locale: 'pt-BR',
    dateFormat: 'dd/MM/yyyy',
    disabled: false,
    readOnly: false,
    loading: false,
    errors: undefined,
    isClearable: true,
  },
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" className="h-screen w-[350]">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<DateInputProps>;

export const OverviewDefaultVariant: Story<DateInputProps> = (args) => {
  const [inputValue, setInputValue] = useState(new Date());

  const handleChange = (e) => {
    return setInputValue(e.target.value);
  };

  return (
    <Stack direction="column" fullWidth>
      <DateInput
        {...args}
        value={inputValue}
        selected={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <DateInput
        {...args}
        placeholder="Choose a date"
        value={inputValue}
        selected={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <DateInput
        {...args}
        placeholder="Choose a date"
        icon="calendar"
        value={inputValue}
        selected={inputValue}
        onChange={(e) => handleChange(e)}
      />
    </Stack>
  );
};
`,locationsMap:{"overview-default-variant":{startLoc:{col:61,line:40},endLoc:{col:1,line:72},startBody:{col:61,line:40},endBody:{col:1,line:72}}}},layout:"centered",badges:[i.STABLE],design:{type:"figma",url:""}},args:{label:"Start date",name:"start_date",variant:"default",locale:"pt-BR",dateFormat:"dd/MM/yyyy",disabled:!1,readOnly:!1,loading:!1,errors:void 0,isClearable:!0},decorators:[n=>r(s,{align:"center",justify:"center",className:"h-screen w-[350]",children:n()})]},x=l(n=>{const[e,u]=c.exports.useState(new Date),o=l(t=>u(t.target.value),"handleChange");return p(s,{direction:"column",fullWidth:!0,children:[r(a,{...n,value:e,selected:e,onChange:t=>o(t)}),r(a,{...n,placeholder:"Choose a date",value:e,selected:e,onChange:t=>o(t)}),r(a,{...n,placeholder:"Choose a date",icon:"calendar",value:e,selected:e,onChange:t=>o(t)})]})},"OverviewDefaultVariant"),M=["OverviewDefaultVariant"];export{x as OverviewDefaultVariant,M as __namedExportsOrder,k as default};
//# sourceMappingURL=DateInput.stories.b0dab931.js.map
