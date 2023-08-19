var h=Object.defineProperty;var r=(n,o)=>h(n,"name",{value:o,configurable:!0});import{M as s,O as b,N as u,S as c,k as y,K as g,B as T,A as v,j as i}from"./index.41fc60f6.js";import{B as f}from"./storybook-addon-badges.esm.f6562d9c.js";import{r as l}from"./index.2020b128.js";import{a as e,F as d,j as a}from"./jsx-runtime.c7344a7c.js";import"./index.5be69f72.js";import"./iframe.d108dca0.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const F={title:"Components/Modal",component:s,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import {
  Avatar,
  Box,
  Breadcrumb,
  Button,
  IconButton,
  Modal,
  ModalHandlesProps,
  ModalProps,
  ModalProvider,
  OverlayProvider,
  Stack,
} from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useCallback, useRef } from 'react';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=644%3A196579&mode=design&t=QcKO9NKDxvGimjvK-1',
    },
  },
  args: {
    title: 'Modal Title',
    description: 'Modal description goes here',
    children: (
      <>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
        <p>This is a transactional modal.</p>
      </>
    ),
    variant: 'transactional',
    buttonPrimaryLabel: 'Save',
    buttonSecondaryLabel: 'Cancel',
    onButtonPrimaryClick: () => console.log('clicked'),
  },
  argTypes: {
    title: {
      table: {
        category: 'Text',
      },
    },
    description: {
      table: {
        category: 'Text',
      },
    },
    children: {
      table: {
        category: 'Modifiers',
      },
    },
    variant: {
      table: {
        category: 'Modifiers',
      },
      options: ['passive', 'transactional', 'danger'],
      control: {
        type: 'inline-radio',
      },
    },
    buttonPrimaryLabel: {
      table: {
        category: 'Text',
      },
    },
    buttonSecondaryLabel: {
      table: {
        category: 'Text',
      },
    },
    onButtonPrimaryClick: {
      table: {
        category: 'Function',
      },
    },
    onButtonSecondaryClick: {
      table: {
        category: 'Function',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <OverlayProvider>
          <ModalProvider>
            <Stack
              align="center"
              justify="center"
              className="h-screen w-[600px]"
            >
              {Story()}
            </Stack>
          </ModalProvider>
        </OverlayProvider>
      );
    },
  ],
} as Meta<ModalProps>;

export const Transactional: Story<ModalProps> = (args) => {
  const modalRef = useRef<ModalHandlesProps>(null);

  const handleOpenModal = useCallback(() => {
    modalRef && modalRef.current?.openModal();
  }, []);
  return (
    <>
      <Button label="Open modal" color="secondary" onClick={handleOpenModal} />
      <Modal ref={modalRef} {...args} />
    </>
  );
};

export const Passive = Transactional.bind({});
Passive.args = {
  variant: 'passive',
  buttonPrimaryLabel: 'Ok',
};

export const WithCustomHeader = Transactional.bind({});
WithCustomHeader.args = {
  headerSlot: (
    <Stack gap="1" align="center">
      <IconButton label="Levels" icon="help" size="sm" />
      <Box className="bg-action-color-border-transparent-enabled h-4 w-[1px] mx-2" />
      <Avatar size="sm" username="Dana Rocha" />
      <Breadcrumb.Root>
        <Breadcrumb.Item label="Dana Rocha" as="a" href="/plan" isActive />
      </Breadcrumb.Root>
    </Stack>
  ),
};
`,locationsMap:{transactional:{startLoc:{col:48,line:119},endLoc:{col:1,line:131},startBody:{col:48,line:119},endBody:{col:1,line:131}},passive:{startLoc:{col:48,line:119},endLoc:{col:1,line:131},startBody:{col:48,line:119},endBody:{col:1,line:131}},"with-custom-header":{startLoc:{col:48,line:119},endLoc:{col:1,line:131},startBody:{col:48,line:119},endBody:{col:1,line:131}}}},layout:"centered",badges:[f.STABLE],design:{type:"figma",url:"https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=644%3A196579&mode=design&t=QcKO9NKDxvGimjvK-1"}},args:{title:"Modal Title",description:"Modal description goes here",children:e(d,{children:[a("p",{children:"This is a transactional modal."}),a("p",{children:"This is a transactional modal."}),a("p",{children:"This is a transactional modal."}),a("p",{children:"This is a transactional modal."}),a("p",{children:"This is a transactional modal."}),a("p",{children:"This is a transactional modal."}),a("p",{children:"This is a transactional modal."}),a("p",{children:"This is a transactional modal."}),a("p",{children:"This is a transactional modal."}),a("p",{children:"This is a transactional modal."}),a("p",{children:"This is a transactional modal."}),a("p",{children:"This is a transactional modal."}),a("p",{children:"This is a transactional modal."})]}),variant:"transactional",buttonPrimaryLabel:"Save",buttonSecondaryLabel:"Cancel",onButtonPrimaryClick:()=>console.log("clicked")},argTypes:{title:{table:{category:"Text"}},description:{table:{category:"Text"}},children:{table:{category:"Modifiers"}},variant:{table:{category:"Modifiers"},options:["passive","transactional","danger"],control:{type:"inline-radio"}},buttonPrimaryLabel:{table:{category:"Text"}},buttonSecondaryLabel:{table:{category:"Text"}},onButtonPrimaryClick:{table:{category:"Function"}},onButtonSecondaryClick:{table:{category:"Function"}}},decorators:[n=>a(b,{children:a(u,{children:a(c,{align:"center",justify:"center",className:"h-screen w-[600px]",children:n()})})})]},p=r(n=>{const o=l.exports.useRef(null),m=l.exports.useCallback(()=>{var t;o&&((t=o.current)==null||t.openModal())},[]);return e(d,{children:[a(y,{label:"Open modal",color:"secondary",onClick:m}),a(s,{ref:o,...n})]})},"Transactional"),B=p.bind({});B.args={variant:"passive",buttonPrimaryLabel:"Ok"};const M=p.bind({});M.args={headerSlot:e(c,{gap:"1",align:"center",children:[a(g,{label:"Levels",icon:"help",size:"sm"}),a(T,{className:"bg-action-color-border-transparent-enabled h-4 w-[1px] mx-2"}),a(v,{size:"sm",username:"Dana Rocha"}),a(i.Root,{children:a(i.Item,{label:"Dana Rocha",as:"a",href:"/plan",isActive:!0})})]})};const K=["Transactional","Passive","WithCustomHeader"];export{B as Passive,p as Transactional,M as WithCustomHeader,K as __namedExportsOrder,F as default};
//# sourceMappingURL=Modal.stories.3c45ea2f.js.map
