var s=Object.defineProperty;var l=(e,o)=>s(e,"name",{value:o,configurable:!0});import{r as c}from"./index.2020b128.js";import{p as r,k as u,S as m,q as g,t,I as p}from"./index.41fc60f6.js";import{B as i}from"./storybook-addon-badges.esm.f6562d9c.js";import{j as n,a as b}from"./jsx-runtime.c7344a7c.js";import"./iframe.d108dca0.js";import"./index.5be69f72.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const I={title:"Form/Combobox",component:r,parameters:{storySource:{source:`import { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Button,
  Combobox,
  ComboboxProps,
  Command,
  Icon,
  Selectable,
  Stack,
} from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    trigger: <Button label="Open popover"></Button>,
    emptyMessage: 'No language found',
    inputPlaceholder: 'Select a language',
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
} as Meta<ComboboxProps>;

const languages = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Japanese', value: 'ja' },
] as const;

export const Default: Story<ComboboxProps> = () => {
  const [value, setValue] = useState('');

  return (
    <Combobox
      className="w-[180px]"
      trigger={<Selectable.Button label="Select a language" icon="globe" />}
      emptyMessage="No language found"
      inputPlaceholder="Select a language"
    >
      <Command.Group heading="Suggestions">
        {languages.map((language) => (
          <Command.Item
            value={language.label}
            key={language.value}
            onSelect={() => {
              setValue(language.value);
            }}
            className={\`\${
              language.value === value
                ? 'bg-interactive-color-background-disabled'
                : 'bg-transparent'
            }\`}
          >
            {language.label}
            <Icon
              name="checkcircle"
              label="selected"
              color="success"
              className={\`\${
                language.value === value ? 'opacity-100' : 'opacity-0'
              } ml-auto\`}
            />
          </Command.Item>
        ))}
      </Command.Group>
    </Combobox>
  );
};
`,locationsMap:{default:{startLoc:{col:45,line:50},endLoc:{col:1,line:88},startBody:{col:45,line:50},endBody:{col:1,line:88}}}},layout:"centered",badges:[i.STABLE],design:{type:"figma",url:""}},args:{trigger:n(u,{label:"Open popover"}),emptyMessage:"No language found",inputPlaceholder:"Select a language"},decorators:[e=>n(m,{align:"center",justify:"center",className:"h-screen w-[600px]",children:e()})]},d=[{label:"English",value:"en"},{label:"French",value:"fr"},{label:"German",value:"de"},{label:"Spanish",value:"es"},{label:"Portuguese",value:"pt"},{label:"Japanese",value:"ja"}],M=l(()=>{const[e,o]=c.exports.useState("");return n(r,{className:"w-[180px]",trigger:n(g.Button,{label:"Select a language",icon:"globe"}),emptyMessage:"No language found",inputPlaceholder:"Select a language",children:n(t.Group,{heading:"Suggestions",children:d.map(a=>b(t.Item,{value:a.label,onSelect:()=>{o(a.value)},className:`${a.value===e?"bg-interactive-color-background-disabled":"bg-transparent"}`,children:[a.label,n(p,{name:"checkcircle",label:"selected",color:"success",className:`${a.value===e?"opacity-100":"opacity-0"} ml-auto`})]},a.value))})})},"Default"),D=["Default"];export{M as Default,D as __namedExportsOrder,I as default};
//# sourceMappingURL=Combobox.stories.bd4c8048.js.map
