import { StoryObj, Meta } from '@storybook/react';
import { Editor, EditorProps } from '@compasso/scala';
import { BADGE } from '@geometricpanda/storybook-addon-badges';

export default {
  title: 'Form/Editor',
  component: Editor,
  parameters: {
    layout: 'centered',
    badges: [BADGE.STABLE],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nGRJSZ90AzGrFe23Shmkzf/Scala?type=design&node-id=643%3A194920&mode=design&t=QcKO9NKDxvGimjvK-1',
    },
  },
  args: {
    content: `
        <h1>Sample Article: The Importance of Regular Exercise</h1>
        <p>
          Regular exercise plays a crucial role in maintaining a healthy
          lifestyle. It not only helps to keep your body fit and active but also
          offers a myriad of physical and mental benefits. Whether you're young
          or old, incorporating exercise into your daily routine is essential
          for overall well-being.
        </p>

        <h2>Physical Benefits</h2>
        <p>
          Engaging in regular physical activities, such as jogging, swimming, or
          cycling, can enhance cardiovascular health. It strengthens the heart
          and improves blood circulation, reducing the risk of heart diseases
          and strokes. Exercise also aids in controlling weight, as it burns
          calories and promotes lean muscle growth.
        </p>
      `,
    variant: 'ghost',
    onUpdate: (editor) => {
      const json = editor.editor.getJSON();
      console.log(json);
    },
    argTypes: {
      onUpdate: {
        table: { type: 'Functions' },
      },
      content: {
        table: { type: 'Modifiers' },
      },
      css: {
        table: { type: 'Modifiers' },
      },
    },
  },
} as Meta<EditorProps>;

export const Default: StoryObj<EditorProps> = {};
export const WithPlaceholder: StoryObj<EditorProps> = {
  args: {
    content: '',
    placeholder: 'Write something ...',
    variant: 'form',
    css: {
      '& .c-editor': {
        width: '500px',
        height: '400px',
      },
    },
  },
};
