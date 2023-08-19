var c=Object.defineProperty;var t=(n,a)=>c(n,"name",{value:a,configurable:!0});import{x as i,O as d,y as g,S as p,k as y}from"./index.41fc60f6.js";import{B as m}from"./storybook-addon-badges.esm.f6562d9c.js";import{r}from"./index.2020b128.js";import{j as e,a as b,F as u}from"./jsx-runtime.c7344a7c.js";import"./index.5be69f72.js";import"./iframe.d108dca0.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const w={title:"Components/Dialog",component:i,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import {
  Button,
  Dialog,
  DialogHandlesProps,
  DialogProps,
  DialogProvider,
  OverlayProvider,
  Stack,
} from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useCallback, useRef } from 'react';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=638%3A167604&mode=design&t=QcKO9NKDxvGimjvK-1',
    },
  },
  args: {
    title: 'Dialog Title',
    description: 'Dialog description goes here',
    children: 'This is a transactional dialog.',
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
          <DialogProvider>
            <Stack
              align="center"
              justify="center"
              className="h-screen w-[400px]"
            >
              {Story()}
            </Stack>
          </DialogProvider>
        </OverlayProvider>
      );
    },
  ],
} as Meta<DialogProps>;

export const Transactional: Story<DialogProps> = (args) => {
  const dialogRef = useRef<DialogHandlesProps>(null);

  const handleOpenDialog = useCallback(() => {
    dialogRef && dialogRef.current?.openDialog();
  }, []);
  return (
    <>
      <Button
        label="Open dialog"
        color="secondary"
        onClick={handleOpenDialog}
      />
      <Dialog ref={dialogRef} {...args} />
    </>
  );
};

export const Passive = Transactional.bind({});
Passive.args = {
  variant: 'passive',
  buttonPrimaryLabel: 'Ok',
};

export const Danger = Transactional.bind({});
Danger.args = {
  variant: 'danger',
  buttonPrimaryLabel: 'Ok',
};
`,locationsMap:{transactional:{startLoc:{col:49,line:99},endLoc:{col:1,line:115},startBody:{col:49,line:99},endBody:{col:1,line:115}},passive:{startLoc:{col:49,line:99},endLoc:{col:1,line:115},startBody:{col:49,line:99},endBody:{col:1,line:115}},danger:{startLoc:{col:49,line:99},endLoc:{col:1,line:115},startBody:{col:49,line:99},endBody:{col:1,line:115}}}},layout:"centered",badges:[m.STABLE],design:{type:"figma",url:"https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=638%3A167604&mode=design&t=QcKO9NKDxvGimjvK-1"}},args:{title:"Dialog Title",description:"Dialog description goes here",children:"This is a transactional dialog.",variant:"transactional",buttonPrimaryLabel:"Save",buttonSecondaryLabel:"Cancel",onButtonPrimaryClick:()=>console.log("clicked")},argTypes:{title:{table:{category:"Text"}},description:{table:{category:"Text"}},children:{table:{category:"Modifiers"}},variant:{table:{category:"Modifiers"},options:["passive","transactional","danger"],control:{type:"inline-radio"}},buttonPrimaryLabel:{table:{category:"Text"}},buttonSecondaryLabel:{table:{category:"Text"}},onButtonPrimaryClick:{table:{category:"Function"}},onButtonSecondaryClick:{table:{category:"Function"}}},decorators:[n=>e(d,{children:e(g,{children:e(p,{align:"center",justify:"center",className:"h-screen w-[400px]",children:n()})})})]},l=t(n=>{const a=r.exports.useRef(null),s=r.exports.useCallback(()=>{var o;a&&((o=a.current)==null||o.openDialog())},[]);return b(u,{children:[e(y,{label:"Open dialog",color:"secondary",onClick:s}),e(i,{ref:a,...n})]})},"Transactional"),v=l.bind({});v.args={variant:"passive",buttonPrimaryLabel:"Ok"};const f=l.bind({});f.args={variant:"danger",buttonPrimaryLabel:"Ok"};const F=["Transactional","Passive","Danger"];export{f as Danger,v as Passive,l as Transactional,F as __namedExportsOrder,w as default};
//# sourceMappingURL=Dialog.stories.6bbb5ad5.js.map
