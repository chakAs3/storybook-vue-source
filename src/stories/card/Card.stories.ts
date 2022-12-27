import { Story, Meta } from "@storybook/vue3";
import Card from "./Card.vue";

const ImageIcon = {
  teamwork: "teamwork",
  passport: "passport",
  camera: "camera",
};

export default {
  title: "Card/Card Passport",
  component: { Card },
  argTypes: {
    image: {
      control: {
        type: "select",
      },
      options: Object.values(ImageIcon),
    },
  },
} as Meta;

const Template: Story = (args: any) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<card v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: "Pariticpants",
  image: ImageIcon.teamwork,
  firstLabelNumber: 52,
  firstLabelText: "participants finalisés",
  secondLabelNumber: 18,
  secondLabelText: "participants confirmés",
};

export const Pariticipants = Template.bind({});
Pariticipants.args = {
  title: "Pariticpants",
  image: ImageIcon.teamwork,
  firstLabelNumber: 52,
  firstLabelText: "participants finalisés",
  secondLabelNumber: 18,
  secondLabelText: "participants confirmés",
};

export const Passport = Template.bind({});
Passport.args = {
  title: "Passport",
  image: ImageIcon.passport,
  firstLabelNumber: 52,
  firstLabelText: "passeports disponibles",
  secondLabelNumber: 18,
  secondLabelText: "passeports manquants",
};

export const Trombinoscope = Template.bind({});
Trombinoscope.args = {
  title: "Trombinoscope",
  image: ImageIcon.camera,
  firstLabelNumber: 10,
  firstLabelText: "photos disponibles",
  secondLabelNumber: 60,
  secondLabelText: "photos manquants",
};
