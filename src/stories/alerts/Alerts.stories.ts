import { Meta, StoryObj } from "@storybook/vue3";
import Alert from "./Alert.vue";
import { AlertType } from "./AlertTypes";
import { generateCodeSource as generateStoriesCodeSource } from "../../storybook-utils/story-source-code"

const meta: Meta<typeof Alert> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Alerts/Alerts",
  component: Alert,
  //   tags: ["docsPage"],
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: AlertType,
    },
  },
  tags: ["docsPage"],
};

export default meta;
type Story = StoryObj<typeof Alert>;


/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */

export const Default: Story = {
  render: (args: any) => ({
    components: { Alert },
    setup() {
      return { args };
    },
    template: '<Alert v-bind="args" />',
  }),
  args: {
    type: "success",
    title: "Succès",
    message: "Nam quibusdam, quos audio sapientes habitos in Graecia, placuisse opinor mirabilia",
  }
}



export const Success: Story = {
  args: {
    type: "success",
    title: "Succès",
    message: "Nam quibusdam, quos audio sapientes habitos in Graecia, placuisse opinor mirabilia",
  }
}


export const Error: Story = {
  args: {
    type: "error",
    title: "Erreur",
    message: "Nam quibusdam, quos audio sapientes habitos in Graecia, placuisse opinor mirabilia",
  }
}

export const Warning: Story = {
  args: {
    type: "warning",
    title: "Alerte",
    message: "Nam quibusdam, quos audio sapientes habitos in Graecia, placuisse opinor mirabilia",
  }
}


generateStoriesCodeSource(meta, Success, Error, Warning)

