// Button.stories.ts

import { generateCodeSource as generateStoriesCodeSource } from '../storybook-utils/story-source-code';
import Button from './Button.vue';

import { Meta, StoryObj, StoryFn, VueRenderer, storiesOf } from '@storybook/vue3';

import * as _stories from './Header.stories'

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
    size: 'large',
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
    backgroundColor: 'red',
    label: '📚📕📈🤓',
  },
};


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

const keys = Object.keys(_stories);
const __stories = []
for (const key of keys) {
  if (key != 'default')
    __stories.push(_stories[key])
}
console.log('--default. --',_stories.default)
console.log('STOREIS',__stories)
generateStoriesCodeSource(_stories.default,...__stories)
generateStoriesCodeSource(meta, Primary, Secondary, Tertiary, Medium, Small)





