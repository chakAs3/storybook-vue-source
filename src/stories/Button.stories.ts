// Button.stories.ts
import { global } from '@storybook/global';
import  * as events  from '@storybook/core-events'
import { ClientApi,useChannel } from '@storybook/preview-api';
import { generateCodeSource as generateStoriesCodeSource } from '../storybook-utils/story-source-code';
import Button from './Button.vue';

import { Meta, StoryObj, StoryFn, VueRenderer, storiesOf } from '@storybook/vue3';

import * as _stories from './Header.stories'

// import { prepareStory } from './csf/prepareStory';
import { processCSFFile } from '@storybook/preview-api/dist/store';
import { StoryStore } from '@storybook/preview-api/dist/store'
// import  { StoryIndexGenerator } from '@storybook/core-server/dist/types/utils/StoryIndexGenerator'
import { NormalizedStoriesSpecifier } from '@storybook/types'
import type { StoryIndexGenerator } from '@storybook/core-server/dist/types/utils/StoryIndexGenerator';
import { getStoryIndexGenerator } from '@storybook/core-server/dist/types/utils/getStoryIndexGenerator';

const meta1: Meta<typeof Button> = {
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

export default meta1;
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

const keys = Object.keys(_stories);
const __stories = []
for (const key of keys) {
  console.log(key)
  if (key != 'default' && key !='__namedExportsOrder')
    __stories.push(_stories[key])
}
//console.log('--default. --',_stories.default)
//console.log('STOREIS',__stories)
//generateStoriesCodeSource(_stories.default,...__stories)
generateStoriesCodeSource(meta1, Primary, Secondary, Tertiary, Medium, Small ,Size)


// const store = new StoryStore();
// const initializedStoryIndexGenerator: Promise<StoryIndexGenerator> = getStoryIndexGenerator(
//   { buildStoriesJson:true},
//   {n},
//   serverChannel
// );
// store.setProjectAnnotations(projectAnnotations);
// store.initialize({ storyIndex, importFn, cache: false });
 
//const csfFiles = await store.loadAllCSFFiles();
//console.log('all Files ... ',csfFiles)
// const { meta , stories } = processCSFFile(
//   {
//     default: _stories.default,...__stories
  
//   },
//   './stories/component.js',
//   'Component'
// );
// console.log('---------')
// console.log( meta , stories)
// console.log('---------')
// stories


