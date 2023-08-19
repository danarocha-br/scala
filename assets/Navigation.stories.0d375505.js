var v=Object.defineProperty;var a=(o,c)=>v(o,"name",{value:c,configurable:!0});import{R as e,S as l,U as f,D as r,I as h,V as s,T as i,B as u,u as m,K as g}from"./index.41fc60f6.js";import{B as b}from"./storybook-addon-badges.esm.f6562d9c.js";import{r as x}from"./index.2020b128.js";import{a as t,F as d,j as n}from"./jsx-runtime.c7344a7c.js";import"./index.5be69f72.js";import"./iframe.d108dca0.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const M={title:"Navigation/Navigation",component:e.Wrapper,parameters:{storySource:{source:`import { Meta, Story } from '@storybook/react';
import {
  Dropdown,
  Navigation,
  NavigationProps,
  Stack,
  Icon,
  Tooltip,
  Shortcut,
  Text,
  Box,
  SearchButton,
  IconButton,
} from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useState } from 'react';

export default {
  title: 'Navigation/Navigation',
  component: Navigation.Wrapper,
  parameters: {
    layout: 'fullscreen',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    user_email: 'hello@danarocha.com',
    user_name: 'Dana Rocha',
    user_imageURL: '',
    children: (
      <>
        <Stack direction="column" gap="2" fullWidth>
          <SearchButton label="Search" shortcut="\u2318 + K" className="mb-4" />
          <Navigation.Item
            label="Projects"
            icon="project"
            href="/projects"
            shortcut="\u2318 + P"
          />
          <Navigation.Item
            label="Invoices"
            icon="invoice"
            href="/invoices"
            shortcut="\u2318 + I"
            isActive
          />
          <Navigation.Item label="Clients" icon="user" href="/clients" />
          <Navigation.Item
            label="Special"
            icon="development"
            href="/special"
            disabled
          />
        </Stack>

        <Stack direction="column" gap="2" fullWidth>
          <Navigation.Item
            label="Invite teammates"
            icon="add-user"
            href="/"
            shortcut="\u2318 + P"
          />
          <Navigation.Item
            label="Upgrade"
            icon="star"
            href="/"
            shortcut="\u2318 + P"
          />
        </Stack>
      </>
    ),
    userMenu: (
      <>
        <Dropdown.Item textValue="Configura\xE7\xF5es">
          <Icon name="settings" label="settings" className="mr-2" />
          <a href="/">
            Configura\xE7\xF5es <Dropdown.RightSlot>\u2318 C</Dropdown.RightSlot>
          </a>
        </Dropdown.Item>
        <Dropdown.Item textValue="Prefer\xEAncias">
          <Icon name="settings" label="settings" className="mr-2" />
          <a href="/">
            Prefer\xEAncias <Dropdown.RightSlot>\u2318 P</Dropdown.RightSlot>
          </a>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item textValue="Sair">
          <a href="/">Sair</a>
        </Dropdown.Item>
      </>
    ),
    loading: false,
  },
  argTypes: {
    children: {
      table: {
        category: 'Modifiers',
      },
    },
    userMenu: {
      table: {
        category: 'Modifiers',
      },
    },
    css: {
      table: {
        category: 'Modifiers',
      },
    },
    loading: {
      table: {
        category: 'Modifiers',
      },
    },
    user_name: {
      table: {
        category: 'Text',
      },
    },
    user_email: {
      table: {
        category: 'Text',
      },
    },
    user_imageURL: {
      table: {
        category: 'Text',
      },
    },
  },
  decorators: [
    (Story) => (
      <Stack
        gap="8"
        align="center"
        className="h-screen bg-background-color-default"
      >
        {Story()}
      </Stack>
    ),
  ],
} as Meta<NavigationProps>;

export const Example: Story<NavigationProps> = (args) => (
  <Navigation.Wrapper {...args} />
);

export const WithFooter: Story<NavigationProps> = (args) => (
  <Navigation.Wrapper {...args} />
);
WithFooter.args = {
  footer: (
    <>
      <Tooltip content="Made with \u2764\uFE0F by Compasso">
        <Text color="body-lighter" className="ml-3">
          C
        </Text>
      </Tooltip>
      <Box className="inline-flex mr-2 gap-2">
        <Tooltip content="Configura\xE7oes" slot={<Shortcut shortcut="\u2318 C" />}>
          <IconButton label="settings" icon="settings" size="sm" />
        </Tooltip>

        <Tooltip content="Ajuda / Feedback" slot={<Shortcut shortcut="\u2318 H" />}>
          <IconButton label="help" icon="help" size="sm" />
        </Tooltip>
      </Box>
    </>
  ),
};

export const WithNavigationToggle: Story<NavigationProps> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Navigation.Wrapper
      {...args}
      isNavigationOpen={isOpen}
      onNavigationOpenChange={() => setIsOpen(!isOpen)}
      footer={
        <>
          <Tooltip content="Made with \u2764\uFE0F by Compasso">
            <Text color="body-lighter" className="ml-3">
              C
            </Text>
          </Tooltip>
          <Box className="inline-flex mr-2 gap-2">
            <Tooltip content="Configura\xE7oes" slot={<Shortcut shortcut="\u2318 C" />}>
              <IconButton label="settings" icon="settings" size="sm" />
            </Tooltip>

            <Tooltip
              content="Ajuda / Feedback"
              slot={<Shortcut shortcut="\u2318 H" />}
            >
              <IconButton label="help" icon="help" size="sm" />
            </Tooltip>
          </Box>
        </>
      }
    />
  );
};

export const ExampleLoading: Story<NavigationProps> = (args) => (
  <Navigation.Wrapper {...args} />
);
ExampleLoading.args = {
  loading: true,
  children: (
    <Stack direction="column" gap="4" fullWidth className="mt-4">
      <Navigation.Item
        label="Projects"
        icon="project"
        href="/projects"
        shortcut="\u2318 + P"
        loading
      />
      <Navigation.Item
        label="Invoices"
        icon="invoice"
        href="/invoices"
        shortcut="\u2318 + I"
        isActive
        loading
      />
      <Navigation.Item label="Clients" icon="user" href="/clients" loading />
    </Stack>
  ),
};

export const NavigationItem: Story<NavigationProps> = () => (
  <Stack direction="column" justify="center" className="h-screen w-full px-10">
    <Text size="xs" className="ml-3">
      Regular Active
    </Text>
    <Navigation.Item
      icon="invoice"
      label="Invoices"
      href="/invoices"
      isActive
    />
    <Text size="xs" className="ml-3">
      Regular
    </Text>
    <Navigation.Item icon="invoice" label="Invoices" href="/invoices" />

    <Text size="xs" className="ml-3">
      With Shortcut
    </Text>
    <Navigation.Item
      icon="invoice"
      label="Invoices"
      href="/invoices"
      shortcut="cmd + p"
    />

    <Text size="xs" className="ml-3">
      Disabled
    </Text>
    <Navigation.Item
      icon="invoice"
      label="Invoices"
      href="/invoices"
      disabled
    />
    <Text size="xs" className="ml-3">
      Loading
    </Text>
    <Navigation.Item
      icon="invoice"
      label="Invoices"
      href="/invoices"
      shortcut="cmd + p"
      loading
    />
  </Stack>
);
`,locationsMap:{example:{startLoc:{col:47,line:147},endLoc:{col:1,line:149},startBody:{col:47,line:147},endBody:{col:1,line:149}},"with-footer":{startLoc:{col:50,line:151},endLoc:{col:1,line:153},startBody:{col:50,line:151},endBody:{col:1,line:153}},"with-navigation-toggle":{startLoc:{col:60,line:175},endLoc:{col:1,line:206},startBody:{col:60,line:175},endBody:{col:1,line:206}},"example-loading":{startLoc:{col:54,line:208},endLoc:{col:1,line:210},startBody:{col:54,line:208},endBody:{col:1,line:210}},"navigation-item":{startLoc:{col:54,line:235},endLoc:{col:1,line:281},startBody:{col:54,line:235},endBody:{col:1,line:281}}}},layout:"fullscreen",badges:[b.STABLE],design:{type:"figma",url:""}},args:{user_email:"hello@danarocha.com",user_name:"Dana Rocha",user_imageURL:"",children:t(d,{children:[t(l,{direction:"column",gap:"2",fullWidth:!0,children:[n(f,{label:"Search",shortcut:"\u2318 + K",className:"mb-4"}),n(e.Item,{label:"Projects",icon:"project",href:"/projects",shortcut:"\u2318 + P"}),n(e.Item,{label:"Invoices",icon:"invoice",href:"/invoices",shortcut:"\u2318 + I",isActive:!0}),n(e.Item,{label:"Clients",icon:"user",href:"/clients"}),n(e.Item,{label:"Special",icon:"development",href:"/special",disabled:!0})]}),t(l,{direction:"column",gap:"2",fullWidth:!0,children:[n(e.Item,{label:"Invite teammates",icon:"add-user",href:"/",shortcut:"\u2318 + P"}),n(e.Item,{label:"Upgrade",icon:"star",href:"/",shortcut:"\u2318 + P"})]})]}),userMenu:t(d,{children:[t(r.Item,{textValue:"Configura\xE7\xF5es",children:[n(h,{name:"settings",label:"settings",className:"mr-2"}),t("a",{href:"/",children:["Configura\xE7\xF5es ",n(r.RightSlot,{children:"\u2318 C"})]})]}),t(r.Item,{textValue:"Prefer\xEAncias",children:[n(h,{name:"settings",label:"settings",className:"mr-2"}),t("a",{href:"/",children:["Prefer\xEAncias ",n(r.RightSlot,{children:"\u2318 P"})]})]}),n(r.Separator,{}),n(r.Item,{textValue:"Sair",children:n("a",{href:"/",children:"Sair"})})]}),loading:!1},argTypes:{children:{table:{category:"Modifiers"}},userMenu:{table:{category:"Modifiers"}},css:{table:{category:"Modifiers"}},loading:{table:{category:"Modifiers"}},user_name:{table:{category:"Text"}},user_email:{table:{category:"Text"}},user_imageURL:{table:{category:"Text"}}},decorators:[o=>n(l,{gap:"8",align:"center",className:"h-screen bg-background-color-default",children:o()})]},z=a(o=>n(e.Wrapper,{...o}),"Example"),I=a(o=>n(e.Wrapper,{...o}),"WithFooter");I.args={footer:t(d,{children:[n(s,{content:"Made with \u2764\uFE0F by Compasso",children:n(i,{color:"body-lighter",className:"ml-3",children:"C"})}),t(u,{className:"inline-flex mr-2 gap-2",children:[n(s,{content:"Configura\xE7oes",slot:n(m,{shortcut:"\u2318 C"}),children:n(g,{label:"settings",icon:"settings",size:"sm"})}),n(s,{content:"Ajuda / Feedback",slot:n(m,{shortcut:"\u2318 H"}),children:n(g,{label:"help",icon:"help",size:"sm"})})]})]})};const R=a(o=>{const[c,p]=x.exports.useState(!0);return n(e.Wrapper,{...o,isNavigationOpen:c,onNavigationOpenChange:()=>p(!c),footer:t(d,{children:[n(s,{content:"Made with \u2764\uFE0F by Compasso",children:n(i,{color:"body-lighter",className:"ml-3",children:"C"})}),t(u,{className:"inline-flex mr-2 gap-2",children:[n(s,{content:"Configura\xE7oes",slot:n(m,{shortcut:"\u2318 C"}),children:n(g,{label:"settings",icon:"settings",size:"sm"})}),n(s,{content:"Ajuda / Feedback",slot:n(m,{shortcut:"\u2318 H"}),children:n(g,{label:"help",icon:"help",size:"sm"})})]})]})})},"WithNavigationToggle"),N=a(o=>n(e.Wrapper,{...o}),"ExampleLoading");N.args={loading:!0,children:t(l,{direction:"column",gap:"4",fullWidth:!0,className:"mt-4",children:[n(e.Item,{label:"Projects",icon:"project",href:"/projects",shortcut:"\u2318 + P",loading:!0}),n(e.Item,{label:"Invoices",icon:"invoice",href:"/invoices",shortcut:"\u2318 + I",isActive:!0,loading:!0}),n(e.Item,{label:"Clients",icon:"user",href:"/clients",loading:!0})]})};const F=a(()=>t(l,{direction:"column",justify:"center",className:"h-screen w-full px-10",children:[n(i,{size:"xs",className:"ml-3",children:"Regular Active"}),n(e.Item,{icon:"invoice",label:"Invoices",href:"/invoices",isActive:!0}),n(i,{size:"xs",className:"ml-3",children:"Regular"}),n(e.Item,{icon:"invoice",label:"Invoices",href:"/invoices"}),n(i,{size:"xs",className:"ml-3",children:"With Shortcut"}),n(e.Item,{icon:"invoice",label:"Invoices",href:"/invoices",shortcut:"cmd + p"}),n(i,{size:"xs",className:"ml-3",children:"Disabled"}),n(e.Item,{icon:"invoice",label:"Invoices",href:"/invoices",disabled:!0}),n(i,{size:"xs",className:"ml-3",children:"Loading"}),n(e.Item,{icon:"invoice",label:"Invoices",href:"/invoices",shortcut:"cmd + p",loading:!0})]}),"NavigationItem"),_=["Example","WithFooter","WithNavigationToggle","ExampleLoading","NavigationItem"];export{z as Example,N as ExampleLoading,F as NavigationItem,I as WithFooter,R as WithNavigationToggle,_ as __namedExportsOrder,M as default};
//# sourceMappingURL=Navigation.stories.0d375505.js.map
