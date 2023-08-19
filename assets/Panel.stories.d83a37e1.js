var s=Object.defineProperty;var o=(n,e)=>s(n,"name",{value:e,configurable:!0});import{X as l,O as c,Y as d,S as p,k as y}from"./index.41fc60f6.js";import{B as u}from"./storybook-addon-badges.esm.f6562d9c.js";import{r}from"./index.2020b128.js";import{j as t,a as P,F as b}from"./jsx-runtime.c7344a7c.js";import"./index.5be69f72.js";import"./iframe.d108dca0.js";import"./es.date.to-primitive.5d527850.js";import"./es.number.max-safe-integer.f43074fe.js";import"./es.map.constructor.063f9da0.js";import"./index.3feb7ac5.js";import"./es.number.to-fixed.e989c1e4.js";import"./index-681e4b07.62ea1517.js";import"./es.number.is-nan.82e7ace1.js";const M={title:"Components/Panel",component:l,parameters:{storySource:{source:`import { Story, Meta } from '@storybook/react';
import {
  Button,
  Panel,
  PanelHandlesProps,
  PanelProps,
  PanelProvider,
  OverlayProvider,
  Stack,
} from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { useCallback, useRef } from 'react';

export default {
  title: 'Components/Panel',
  component: Panel,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {
    title: 'Panel Title',
    description: 'Panel description goes here',
    children: 'This is a transactional Panel.',
    buttonPrimaryLabel: 'Save',
    buttonSecondaryLabel: 'Cancel',
    onButtonPrimaryClick: () => console.log('clicked'),
    isButtonDisabled: false,
    isNavigationOpen: false,
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
    isButtonDisabled: {
      table: {
        category: 'Modifiers',
      },
    },
    isNavigationOpen: {
      table: {
        category: 'Modifiers',
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
          <PanelProvider>
            <Stack
              align="center"
              justify="center"
              className="h-screen w-[399px]"
            >
              {Story()}
            </Stack>
          </PanelProvider>
        </OverlayProvider>
      );
    },
  ],
} as Meta<PanelProps>;

export const Default: Story<PanelProps> = (args) => {
  const panelRef = useRef<PanelHandlesProps>(null);

  const handleOpenPanel = useCallback(() => {
    panelRef && panelRef.current?.openPanel();
  }, []);

  return (
    <>
      <Button label="Open Panel" color="secondary" onClick={handleOpenPanel} />
      <Panel ref={panelRef} {...args} />
    </>
  );
};
`,locationsMap:{default:{startLoc:{col:42,line:101},endLoc:{col:1,line:114},startBody:{col:42,line:101},endBody:{col:1,line:114}}}},layout:"centered",badges:[u.STABLE],design:{type:"figma",url:""}},args:{title:"Panel Title",description:"Panel description goes here",children:"This is a transactional Panel.",buttonPrimaryLabel:"Save",buttonSecondaryLabel:"Cancel",onButtonPrimaryClick:()=>console.log("clicked"),isButtonDisabled:!1,isNavigationOpen:!1},argTypes:{title:{table:{category:"Text"}},description:{table:{category:"Text"}},children:{table:{category:"Modifiers"}},isButtonDisabled:{table:{category:"Modifiers"}},isNavigationOpen:{table:{category:"Modifiers"}},buttonPrimaryLabel:{table:{category:"Text"}},buttonSecondaryLabel:{table:{category:"Text"}},onButtonPrimaryClick:{table:{category:"Function"}},onButtonSecondaryClick:{table:{category:"Function"}}},decorators:[n=>t(c,{children:t(d,{children:t(p,{align:"center",justify:"center",className:"h-screen w-[399px]",children:n()})})})]},R=o(n=>{const e=r.exports.useRef(null),i=r.exports.useCallback(()=>{var a;e&&((a=e.current)==null||a.openPanel())},[]);return P(b,{children:[t(y,{label:"Open Panel",color:"secondary",onClick:i}),t(l,{ref:e,...n})]})},"Default"),E=["Default"];export{R as Default,E as __namedExportsOrder,M as default};
//# sourceMappingURL=Panel.stories.d83a37e1.js.map
