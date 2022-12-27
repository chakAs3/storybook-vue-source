// Button.stories.ts


import { generateCodeSource as generateStoriesCodeSource } from '../storybook-utils/story-source-code';
import Button from './Button.vue';

import { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Basics/Button',
  component: Button,
  argTypes: { size: { control: 'select', options: ['small', 'medium', 'large'] }, backgroundColor: { control: 'color' } },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/7.0/vue/writing-docs/docs-page
  tags: ['docsPage'],
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args: any) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    backgroundColor: '#fff00',
    label: ' 👍😍 Button 😍👍 ',
    primary: true
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: '😄👍😍💯',
  },

};

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    label: '📚📕📈🤓',
  },
};


export const Size: Story = {

  render: (args: any) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button size="large" v-bind="args" /> <Button size="medium" v-bind="args" /> <Button size="small" v-bind="args" />`,
  }),
  args: {
    backgroundColor: '#fff00',
    label: ' 👍😍 Button 😍👍 ',
    primary: true
  },
}

Size.parameters = {
  docs: {
    storyDescription: 'This shows how to use `size` on Button.',
  },
}

Size.decorators = [() => ({ template: '<div style="margin: 3em;"><story/></div>' }),]

export const Medium: Story = {
  args: {
    ...Primary.args,
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    size: 'small',
  },
};


generateStoriesCodeSource(meta, Primary, Secondary, Tertiary, Medium, Small ,Size)



