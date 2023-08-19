var y=Object.defineProperty;var r=(e,t)=>y(e,"name",{value:t,configurable:!0});import{z as a,S as d}from"./index.41fc60f6.js";import{B as v}from"./storybook-addon-badges.esm.f6562d9c.js";import{j as l,a as g}from"./jsx-runtime.c7344a7c.js";import{aS as c}from"./iframe.d108dca0.js";import"./index.2020b128.js";import"./index.5be69f72.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const H={title:"Form/TextInput",component:a,parameters:{storySource:{source:`import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Stack, TextInput, TextInputProps } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from '@storybook/addons';

export default {
  title: 'Form/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'E-mail',
    name: 'email',
    type: 'email',
    variant: 'default',
    disabled: false,
    readOnly: false,
    loading: false,
    hasAction: false,
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
    actionLabel: {
      table: {
        category: 'Text',
      },
    },
    type: {
      table: {
        category: 'Modifiers',
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
    hasAction: {
      table: {
        category: 'Modifiers',
      },
    },
    actionIcon: {
      table: {
        category: 'Modifiers',
      },
    },
    onAction: {
      table: {
        category: 'Function',
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
} as Meta<TextInputProps>;

export const OverviewDefaultVariant: Story<TextInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <Stack as="form" direction="column" fullWidth>
      <TextInput
        {...args}
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        {...args}
        placeholder="Your email"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        {...args}
        placeholder="Your email"
        icon="mail"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        {...args}
        placeholder="Your email"
        addon="Addon"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        {...args}
        placeholder="Your email"
        hasAction
        value={inputValue}
        onChange={(e) => handleChange(e)}
        onAction={() => alert('E-mail settings')}
      />
    </Stack>
  );
};

export const OverviewTableVariant: Story<TextInputProps> = (args) => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue1(e.target.value);
  };

  return (
    <Stack direction="column" fullWidth>
      <TextInput
        {...args}
        placeholder="Your email"
        value={inputValue1}
        onChange={(e) => handleChange(e)}
        variant="table"
      />

      <TextInput
        {...args}
        placeholder="Your email"
        addon="Addon"
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
        variant="table"
      />
    </Stack>
  );
};

const States: Story<TextInputProps> = (args) => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue1(e.target.value);
  };

  return (
    <Stack direction="column" fullWidth>
      <TextInput
        {...args}
        placeholder="Your email"
        icon="mail"
        value={inputValue1}
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        {...args}
        placeholder="Your email"
        addon="Addon"
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
      />
      <TextInput
        {...args}
        placeholder="Your email"
        hasAction
        value={inputValue3}
        onChange={(e) => setInputValue3(e.target.value)}
        onAction={() => alert('E-mail settings')}
      />
    </Stack>
  );
};

export const Loading = States.bind({});
Loading.args = {
  loading: true,
};

export const Disabled = States.bind({});
Disabled.args = {
  disabled: true,
};

export const ReadOnly = States.bind({});
ReadOnly.args = {
  readOnly: true,
};

export const HasErrors = OverviewDefaultVariant.bind({});
HasErrors.args = {
  errors: {
    message: 'I am an error message.',
  },
};

export const Default: Story<TextInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <TextInput {...args} value={inputValue} onChange={(e) => handleChange(e)} />
  );
};
`,locationsMap:{"overview-default-variant":{startLoc:{col:61,line:111},endLoc:{col:1,line:155},startBody:{col:61,line:111},endBody:{col:1,line:155}},"overview-table-variant":{startLoc:{col:59,line:157},endLoc:{col:1,line:185},startBody:{col:59,line:157},endBody:{col:1,line:185}},loading:{startLoc:{col:38,line:187},endLoc:{col:1,line:222},startBody:{col:38,line:187},endBody:{col:1,line:222}},disabled:{startLoc:{col:38,line:187},endLoc:{col:1,line:222},startBody:{col:38,line:187},endBody:{col:1,line:222}},"read-only":{startLoc:{col:38,line:187},endLoc:{col:1,line:222},startBody:{col:38,line:187},endBody:{col:1,line:222}},"has-errors":{startLoc:{col:61,line:111},endLoc:{col:1,line:155},startBody:{col:61,line:111},endBody:{col:1,line:155}},default:{startLoc:{col:46,line:246},endLoc:{col:1,line:256},startBody:{col:46,line:246},endBody:{col:1,line:256}}}},layout:"centered",badges:[v.STABLE],design:{type:"figma",url:""}},args:{label:"E-mail",name:"email",type:"email",variant:"default",disabled:!1,readOnly:!1,loading:!1,hasAction:!1,errors:void 0},argTypes:{label:{table:{category:"Text"}},name:{table:{category:"Text"}},placeholder:{table:{category:"Text"}},actionLabel:{table:{category:"Text"}},type:{table:{category:"Modifiers"}},variant:{table:{category:"Modifiers"},options:["default","table"],control:{type:"inline-radio"}},hasAction:{table:{category:"Modifiers"}},actionIcon:{table:{category:"Modifiers"}},onAction:{table:{category:"Function"}},errors:{table:{category:"Modifiers"}},disabled:{table:{category:"State"}},loading:{table:{category:"State"}},readOnly:{table:{category:"State"}}},decorators:[e=>l(d,{align:"center",justify:"center",className:"h-screen w-[350px]",children:e()})]},b=r(e=>{const[t,i]=c(""),o=r(n=>i(n.target.value),"handleChange");return g(d,{as:"form",direction:"column",fullWidth:!0,children:[l(a,{...e,value:t,onChange:n=>o(n)}),l(a,{...e,placeholder:"Your email",value:t,onChange:n=>o(n)}),l(a,{...e,placeholder:"Your email",icon:"mail",value:t,onChange:n=>o(n)}),l(a,{...e,placeholder:"Your email",addon:"Addon",value:t,onChange:n=>o(n)}),l(a,{...e,placeholder:"Your email",hasAction:!0,value:t,onChange:n=>o(n),onAction:()=>alert("E-mail settings")})]})},"OverviewDefaultVariant"),P=r(e=>{const[t,i]=c(""),[o,n]=c(""),p=r(u=>i(u.target.value),"handleChange");return g(d,{direction:"column",fullWidth:!0,children:[l(a,{...e,placeholder:"Your email",value:t,onChange:u=>p(u),variant:"table"}),l(a,{...e,placeholder:"Your email",addon:"Addon",value:o,onChange:u=>n(u.target.value),variant:"table"})]})},"OverviewTableVariant"),h=r(e=>{const[t,i]=c(""),[o,n]=c(""),[p,u]=c(""),m=r(s=>i(s.target.value),"handleChange");return g(d,{direction:"column",fullWidth:!0,children:[l(a,{...e,placeholder:"Your email",icon:"mail",value:t,onChange:s=>m(s)}),l(a,{...e,placeholder:"Your email",addon:"Addon",value:o,onChange:s=>n(s.target.value)}),l(a,{...e,placeholder:"Your email",hasAction:!0,value:p,onChange:s=>u(s.target.value),onAction:()=>alert("E-mail settings")})]})},"States"),f=h.bind({});f.args={loading:!0};const V=h.bind({});V.args={disabled:!0};const I=h.bind({});I.args={readOnly:!0};const x=b.bind({});x.args={errors:{message:"I am an error message."}};const W=r(e=>{const[t,i]=c(""),o=r(n=>i(n.target.value),"handleChange");return l(a,{...e,value:t,onChange:n=>o(n)})},"Default"),j=["OverviewDefaultVariant","OverviewTableVariant","Loading","Disabled","ReadOnly","HasErrors","Default"];export{W as Default,V as Disabled,x as HasErrors,f as Loading,b as OverviewDefaultVariant,P as OverviewTableVariant,I as ReadOnly,j as __namedExportsOrder,H as default};
//# sourceMappingURL=TextInput.stories.2353802e.js.map
