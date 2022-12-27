import { Meta, Story } from "@storybook/vue3";
import VCard from "./VCard.vue";

export default {
  title: "Card/Voyage",
  component: { VCard },
  argTypes: {
    image: {},
  },
};

const Template: Story = (args: any) => ({
  components: { VCard },
  setup() {
    return { args };
  },
  template: '<v-card v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  date: "2021-08-01",
  destination: "LA MARTINIQUE",
  image: "../../assets/images/voyage-img.png",
  logo: "https://picsum.photos/200/300",
  totalInscrits: 92,
  totalPassports: 92,
  totalConnections: 15,
};
