import { h } from 'vue';
import { generateCodeSource as generateStoriesCodeSource } from '../storybook-utils/story-source-code';
import Header from './Header.vue';

import { Meta, StoryObj, StoryFn, storiesOf} from '@storybook/vue3';

const meta: Meta<typeof Header> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Basics/Header',
  component: Header,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/7.0/vue/writing-docs/docs-page
  tags: ['docsPage'],
};

export default meta;
type Story = StoryObj<typeof Header>;


export const LoggedIn: Story = {
  render: (args:any) => ({
    components: { Header },
    setup() {

      return { args };
    },
    template: '<Header :user="args.user" :country="args.country" />',
  }),
  args: {
    user: {
      name: 'Jane Doe',
    },
    country:'France'
  },
};

export const LoggedInWithLongName : Story ={
  args: {
    user: {
      name: 'Jean Jack Pierro-Rosso',
    },
    country:'France'
  },
}

export const LoggedInWithLongCountry : Story ={
  args: {
    user: {
      name: 'Jean Jack Pierro-Rosso',
      age: 22
    },
    country:'Democratic Republic of Sao Tome and Principe'
  },
}


export const LoggedOut: Story = {
  args: {
    user: null,
    country: undefined
    
  },
};




generateStoriesCodeSource(meta ,LoggedIn,LoggedOut,LoggedInWithLongCountry,LoggedInWithLongName)