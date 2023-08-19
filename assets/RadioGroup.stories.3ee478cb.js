var i=Object.defineProperty;var t=(n,l)=>i(n,"name",{value:l,configurable:!0});import{$ as a,S as r}from"./index.41fc60f6.js";import{B as s}from"./storybook-addon-badges.esm.f6562d9c.js";import{j as o}from"./jsx-runtime.c7344a7c.js";import"./index.2020b128.js";import"./iframe.d108dca0.js";import"./index.5be69f72.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const I={title:"Form/RadioGroup",component:a,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import { RadioGroup, RadioGroupProps, Stack } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    name: 'options',
    legend: 'Choose an option',
    options: [
      {
        value: 'option1',
        label: 'Option 1',
      },
      {
        value: 'option2',
        label: 'Option 2',
      },
    ],
    // defaultValue: 'option1',
    variant: 'primary',
    disabled: false,
    fullWidth: false,
  },
  argTypes: {
    legend: {
      table: {
        category: 'Text',
      },
    },
    name: {
      table: {
        category: 'Text',
      },
    },
    value: {
      table: {
        category: 'Text',
      },
    },
    defaultValue: {
      table: {
        category: 'Text',
      },
    },
    options: {
      table: {
        category: 'Text',
      },
    },
    onChange: {
      table: {
        category: 'Function',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['primary', 'secondary', 'boxed'],
      control: {
        type: 'inline-radio',
      },
    },
    errors: {
      table: {
        category: 'State',
      },
    },
    fullWidth: {
      table: {
        category: 'Modifiers',
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
} as Meta<RadioGroupProps>;

export const Primary: Story<RadioGroupProps> = (args) => {
  // const [inputValue, setInputValue] = useState('');

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   return setInputValue(e.target.value);
  // };

  return (
    <Stack as="form" direction="column" fullWidth>
      <RadioGroup
        {...args}
        // value={inputValue}
        // onChange={(e) => handleChange(e)}
      />
    </Stack>
  );
};

export const Secondary = Primary.bind({});
Secondary.args = {
  variant: 'secondary',
  fullWidth: true,
};

export const SecondaryWithIcon = Primary.bind({});
SecondaryWithIcon.args = {
  variant: 'secondary',
  fullWidth: true,
  options: [
    {
      value: 'design',
      label: 'Design',
      icon: 'design',
    },
    {
      value: 'development',
      label: 'Development',
      icon: 'development',
    },
  ],
};

export const Boxed = Primary.bind({});
Boxed.args = {
  variant: 'boxed',
  fullWidth: true,
};

export const BoxedWithIcon = Primary.bind({});
BoxedWithIcon.args = {
  variant: 'boxed',
  fullWidth: true,
  options: [
    {
      value: 'design',
      label: 'Design',
      icon: 'design',
    },
    {
      value: 'development',
      label: 'Development',
      icon: 'development',
    },
    {
      value: 'development1',
      label: 'Development',
      icon: 'development',
    },
  ],
};

export const HasErrors = Primary.bind({});
HasErrors.args = {
  errors: {
    message: 'I am an error message.',
  },
};
`,locationsMap:{primary:{startLoc:{col:47,line:101},endLoc:{col:1,line:117},startBody:{col:47,line:101},endBody:{col:1,line:117}},secondary:{startLoc:{col:47,line:101},endLoc:{col:1,line:117},startBody:{col:47,line:101},endBody:{col:1,line:117}},"secondary-with-icon":{startLoc:{col:47,line:101},endLoc:{col:1,line:117},startBody:{col:47,line:101},endBody:{col:1,line:117}},boxed:{startLoc:{col:47,line:101},endLoc:{col:1,line:117},startBody:{col:47,line:101},endBody:{col:1,line:117}},"boxed-with-icon":{startLoc:{col:47,line:101},endLoc:{col:1,line:117},startBody:{col:47,line:101},endBody:{col:1,line:117}},"has-errors":{startLoc:{col:47,line:101},endLoc:{col:1,line:117},startBody:{col:47,line:101},endBody:{col:1,line:117}}}},layout:"centered",badges:[s.STABLE],design:{type:"figma",url:""}},args:{name:"options",legend:"Choose an option",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}],variant:"primary",disabled:!1,fullWidth:!1},argTypes:{legend:{table:{category:"Text"}},name:{table:{category:"Text"}},value:{table:{category:"Text"}},defaultValue:{table:{category:"Text"}},options:{table:{category:"Text"}},onChange:{table:{category:"Function"}},variant:{table:{category:"Modifiers"},options:["primary","secondary","boxed"],control:{type:"inline-radio"}},errors:{table:{category:"State"}},fullWidth:{table:{category:"Modifiers"}},disabled:{table:{category:"State"}}},decorators:[n=>o(r,{align:"center",justify:"center",className:"h-screen w-[600px]",children:n()})]},e=t(n=>o(r,{as:"form",direction:"column",fullWidth:!0,children:o(a,{...n})}),"Primary"),d=e.bind({});d.args={variant:"secondary",fullWidth:!0};const c=e.bind({});c.args={variant:"secondary",fullWidth:!0,options:[{value:"design",label:"Design",icon:"design"},{value:"development",label:"Development",icon:"development"}]};const p=e.bind({});p.args={variant:"boxed",fullWidth:!0};const u=e.bind({});u.args={variant:"boxed",fullWidth:!0,options:[{value:"design",label:"Design",icon:"design"},{value:"development",label:"Development",icon:"development"},{value:"development1",label:"Development",icon:"development"}]};const m=e.bind({});m.args={errors:{message:"I am an error message."}};const E=["Primary","Secondary","SecondaryWithIcon","Boxed","BoxedWithIcon","HasErrors"];export{p as Boxed,u as BoxedWithIcon,m as HasErrors,e as Primary,d as Secondary,c as SecondaryWithIcon,E as __namedExportsOrder,I as default};
//# sourceMappingURL=RadioGroup.stories.3ee478cb.js.map
