var p=Object.defineProperty;var l=(e,t)=>p(e,"name",{value:t,configurable:!0});import{W as o,S as s}from"./index.41fc60f6.js";import{B as g}from"./storybook-addon-badges.esm.f6562d9c.js";import{r as i}from"./index.2020b128.js";import{j as r,a as u}from"./jsx-runtime.c7344a7c.js";import"./index.5be69f72.js";import"./iframe.d108dca0.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const w={title:"Form/NumberInput",component:o,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import { NumberInput, NumberInputProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

export default {
  title: 'Form/NumberInput',
  component: NumberInput,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    label: 'Total cost',
    name: 'cost',
    type: 'text',
    variant: 'default',
    disabled: false,
    readOnly: false,
    loading: false,
    hasAction: false,
    errors: undefined,
    allowNegative: false,
    decimalSeparator: ',',
    decimalScale: 2,
    prefix: '$',
    thousandSeparator: '.',
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
    allowNegative: {
      table: {
        category: 'Text',
      },
    },
    prefix: {
      table: {
        category: 'Text',
      },
    },
    thousandSeparator: {
      table: {
        category: 'Text',
      },
    },
    decimalScale: {
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
} as Meta<NumberInputProps>;

export const OverviewDefaultVariant: Story<NumberInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <Stack direction="column" fullWidth>
      <NumberInput
        {...args}
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <NumberInput
        {...args}
        placeholder="Enter cost"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <NumberInput
        {...args}
        placeholder="Enter cost"
        icon="invoice"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <NumberInput
        {...args}
        placeholder="Enter cost"
        addon="Addon"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <NumberInput
        {...args}
        placeholder="Enter cost"
        hasAction
        value={inputValue}
        onChange={(e) => handleChange(e)}
        onAction={() => alert('Cost settings')}
      />
    </Stack>
  );
};

export const OverviewTableVariant: Story<NumberInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <Stack direction="column" fullWidth>
      <NumberInput
        {...args}
        placeholder="Enter cost"
        value={inputValue}
        onChange={(e) => handleChange(e)}
        variant="table"
      />

      <NumberInput
        {...args}
        placeholder="Enter cost"
        addon="Addon"
        value={inputValue}
        onChange={(e) => handleChange(e)}
        variant="table"
      />
    </Stack>
  );
};

const States: Story<NumberInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <Stack direction="column" fullWidth>
      <NumberInput
        {...args}
        placeholder="Enter cost"
        icon="mail"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <NumberInput
        {...args}
        placeholder="Enter cost"
        addon="Addon"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <NumberInput
        {...args}
        placeholder="Enter cost"
        hasAction
        value={inputValue}
        onChange={(e) => handleChange(e)}
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

export const Default: Story<NumberInputProps> = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.target.value);
  };

  return (
    <NumberInput
      {...args}
      value={inputValue}
      onChange={(e) => handleChange(e)}
    />
  );
};
`,locationsMap:{"overview-default-variant":{startLoc:{col:63,line:135},endLoc:{col:1,line:179},startBody:{col:63,line:135},endBody:{col:1,line:179}},"overview-table-variant":{startLoc:{col:61,line:181},endLoc:{col:1,line:208},startBody:{col:61,line:181},endBody:{col:1,line:208}},loading:{startLoc:{col:40,line:210},endLoc:{col:1,line:243},startBody:{col:40,line:210},endBody:{col:1,line:243}},disabled:{startLoc:{col:40,line:210},endLoc:{col:1,line:243},startBody:{col:40,line:210},endBody:{col:1,line:243}},"read-only":{startLoc:{col:40,line:210},endLoc:{col:1,line:243},startBody:{col:40,line:210},endBody:{col:1,line:243}},"has-errors":{startLoc:{col:63,line:135},endLoc:{col:1,line:179},startBody:{col:63,line:135},endBody:{col:1,line:179}},default:{startLoc:{col:48,line:267},endLoc:{col:1,line:281},startBody:{col:48,line:267},endBody:{col:1,line:281}}}},layout:"centered",badges:[g.STABLE],design:{type:"figma",url:""}},args:{label:"Total cost",name:"cost",type:"text",variant:"default",disabled:!1,readOnly:!1,loading:!1,hasAction:!1,errors:void 0,allowNegative:!1,decimalSeparator:",",decimalScale:2,prefix:"$",thousandSeparator:"."},argTypes:{label:{table:{category:"Text"}},name:{table:{category:"Text"}},placeholder:{table:{category:"Text"}},actionLabel:{table:{category:"Text"}},allowNegative:{table:{category:"Text"}},prefix:{table:{category:"Text"}},thousandSeparator:{table:{category:"Text"}},decimalScale:{table:{category:"Text"}},type:{table:{category:"Modifiers"}},variant:{table:{category:"Modifiers"},options:["default","table"],control:{type:"inline-radio"}},hasAction:{table:{category:"Modifiers"}},actionIcon:{table:{category:"Modifiers"}},onAction:{table:{category:"Function"}},errors:{table:{category:"Modifiers"}},disabled:{table:{category:"State"}},loading:{table:{category:"State"}},readOnly:{table:{category:"State"}}},decorators:[e=>r(s,{align:"center",justify:"center",className:"h-screen w-[350px]",children:e()})]},h=l(e=>{const[t,c]=i.exports.useState(""),a=l(n=>c(n.target.value),"handleChange");return u(s,{direction:"column",fullWidth:!0,children:[r(o,{...e,value:t,onChange:n=>a(n)}),r(o,{...e,placeholder:"Enter cost",value:t,onChange:n=>a(n)}),r(o,{...e,placeholder:"Enter cost",icon:"invoice",value:t,onChange:n=>a(n)}),r(o,{...e,placeholder:"Enter cost",addon:"Addon",value:t,onChange:n=>a(n)}),r(o,{...e,placeholder:"Enter cost",hasAction:!0,value:t,onChange:n=>a(n),onAction:()=>alert("Cost settings")})]})},"OverviewDefaultVariant"),D=l(e=>{const[t,c]=i.exports.useState(""),a=l(n=>c(n.target.value),"handleChange");return u(s,{direction:"column",fullWidth:!0,children:[r(o,{...e,placeholder:"Enter cost",value:t,onChange:n=>a(n),variant:"table"}),r(o,{...e,placeholder:"Enter cost",addon:"Addon",value:t,onChange:n=>a(n),variant:"table"})]})},"OverviewTableVariant"),d=l(e=>{const[t,c]=i.exports.useState(""),a=l(n=>c(n.target.value),"handleChange");return u(s,{direction:"column",fullWidth:!0,children:[r(o,{...e,placeholder:"Enter cost",icon:"mail",value:t,onChange:n=>a(n)}),r(o,{...e,placeholder:"Enter cost",addon:"Addon",value:t,onChange:n=>a(n)}),r(o,{...e,placeholder:"Enter cost",hasAction:!0,value:t,onChange:n=>a(n),onAction:()=>alert("E-mail settings")})]})},"States"),b=d.bind({});b.args={loading:!0};const m=d.bind({});m.args={disabled:!0};const y=d.bind({});y.args={readOnly:!0};const v=h.bind({});v.args={errors:{message:"I am an error message."}};const k=l(e=>{const[t,c]=i.exports.useState(""),a=l(n=>c(n.target.value),"handleChange");return r(o,{...e,value:t,onChange:n=>a(n)})},"Default"),H=["OverviewDefaultVariant","OverviewTableVariant","Loading","Disabled","ReadOnly","HasErrors","Default"];export{k as Default,m as Disabled,v as HasErrors,b as Loading,h as OverviewDefaultVariant,D as OverviewTableVariant,y as ReadOnly,H as __namedExportsOrder,w as default};
//# sourceMappingURL=NumberInput.stories.c5533aa0.js.map
