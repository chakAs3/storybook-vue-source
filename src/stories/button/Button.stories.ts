import { generateCodeSource as generateStoriesCodeSource } from '../../storybook-utils/story-source-code';
import MyButton from './Button.vue';

import { Meta, StoryObj } from '@storybook/vue3';

const ImageIcon = {
  edit: "edit",
  add: "add",
  mic: "mic",
  camera: "camera",
  document: "document",
};

const meta: Meta<typeof MyButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Buttons/Actions",
  component: MyButton,
  argTypes: {
    backgroundColor: {
      control: "select",
      options: {
        primary: "primary",
        secondary: "secondary",
        tertiary: "tertiary",
        quaternary: "quaternary",
        quinary: "quinary",
      },
    },
    image: {
      control: {
        type: "select",
      },
      options: Object.values(ImageIcon),
    },
  },
  tags: ["docsPage"],
 
  

};

export default meta;
type Story = StoryObj<typeof MyButton>;

const Template: Story = {
  render: (args: any) => ({
    components: { MyButton },
    setup() {
      return { args };
    },
    template: '<my-button v-bind="args" />',
  }),
 
}

export const Playgound: Story = {
  args: {
    label: "Button",
    backgroundColor: "primary",
    image: ImageIcon.edit,
  },
}

export const Variants: Story = {
  render: (args: any) => ({
    components: { MyButton },
    setup() {
      return { args };
    },
    template: '<my-button v-bind="args" label="Primary" backgroundColor="primary" /><my-button v-bind="args" label="Secondary"  backgroundColor="secondary" /><my-button v-bind="args" label="tertiary"  backgroundColor="tertiary" /><my-button v-bind="args" label="Quaternary"  backgroundColor="quaternary" /><my-button v-bind="args" label="Quinary"  backgroundColor="quinary" /> ',
  }),
  args: {
    image: ImageIcon.add,
  }
}

export const Images: Story = {
  render: (args: any) => ({
    components: { MyButton },
    setup() {
      return { args };
    },
    template: `<my-button v-bind="args" image="edit" /><my-button v-bind="args"  image="add" /><my-button v-bind="args"  image="mic" /><my-button v-bind="args"  image="camera" /><my-button v-bind="args"  image="document" /> `,
  }),
  args: {
    label: "Image Button",
    backgroundColor: "primary",
  },

}

Variants.decorators = [() => ({ template: '<div class="flex"><story/></div>' }),]
Images.decorators = [() => ({ template: '<div class="flex"><story/></div>' }),]

generateStoriesCodeSource(meta, Playgound, Variants, Images)


