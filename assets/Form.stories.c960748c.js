var p=Object.defineProperty;var a=(e,t)=>p(e,"name",{value:t,configurable:!0});import{r as o}from"./index.2020b128.js";import{F as s,S as c,z as u,P as d}from"./index.41fc60f6.js";import{B as g}from"./storybook-addon-badges.esm.f6562d9c.js";import{j as r,a as f}from"./jsx-runtime.c7344a7c.js";import"./iframe.d108dca0.js";import"./index.5be69f72.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const j={title:"Form/Form",component:s,parameters:{storySource:{source:`import { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import {
  Form,
  FormProps,
  PasswordInput,
  Stack,
  TextInput,
} from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/Form',
  component: Form,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {},
  decorators: [
    (Story) => {
      return (
        <Stack align="center" justify="center" className="h-screen w-[400px]">
          {Story()}
        </Stack>
      );
    },
  ],
} as Meta<FormProps>;

export const Default: Story<FormProps> = (args) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form {...args}>
      <TextInput
        name="email"
        label="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput
        name="name"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </Form>
  );
};
`,locationsMap:{default:{startLoc:{col:41,line:35},endLoc:{col:1,line:55},startBody:{col:41,line:35},endBody:{col:1,line:55}}}},layout:"centered",badges:[g.STABLE],design:{type:"figma",url:""}},args:{},decorators:[e=>r(c,{align:"center",justify:"center",className:"h-screen w-[400px]",children:e()})]},A=a(e=>{const[t,m]=o.exports.useState(""),[l,i]=o.exports.useState("");return f(s,{...e,children:[r(u,{name:"email",label:"E-mail",value:t,onChange:n=>m(n.target.value)}),r(d,{name:"name",label:"Password",value:l,onChange:n=>i(n.target.value)})]})},"Default"),T=["Default"];export{A as Default,T as __namedExportsOrder,j as default};
//# sourceMappingURL=Form.stories.c960748c.js.map
