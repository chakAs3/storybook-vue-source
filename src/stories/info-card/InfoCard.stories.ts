import { satisfies } from "semver";
import { Colors } from "../../colors";
import InfoCard from "./InfoCard.vue";
import { InfoCardProps } from "./InfoCardTypes";
import { Icons } from "../../icons";

export default {
  title: "Card/Info Card",
  component: { InfoCard },
  argTypes: {
    icon: {
      control: "select",
      options: ["calendar", "clock", "cancel", "plane", "check-mark", "racing-flag"],
    },
    backgroundColor: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "quaternary", "quinary"],
    },
  },
};

const Template = (args: InfoCardProps) => ({
  components: { InfoCard },
  setup() {
    return { args };
  },
  template: '<info-card v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: "Voyages du mois",
  icon: Icons.CALENDAR,
  labelValue: 10,
  backgroundColor: Colors.PRIMARY,
} satisfies InfoCardProps;

export const VoyageDuMois = Template.bind({});
VoyageDuMois.args = {
  label: "Voyages du mois",
  icon: Icons.CALENDAR,
  labelValue: 10,
  backgroundColor: Colors.PRIMARY,
} satisfies InfoCardProps;

export const VoyageAVenir = Template.bind({});
VoyageAVenir.args = {
  label: "Voyages à venir",
  icon: Icons.PLANE,
  labelValue: 25,
  backgroundColor: Colors.SECONDARY,
} satisfies InfoCardProps;

export const VoyageTermines = Template.bind({});
VoyageTermines.args = {
  label: "Voyages terminés",
  icon: Icons.RACINGFLAG,
  labelValue: 5,
  backgroundColor: Colors.TERTIARY,
} satisfies InfoCardProps;

export const EnAttennteDeValidation = Template.bind({});
EnAttennteDeValidation.args = {
  label: "En attente de validation",
  icon: Icons.CLOCK,
  labelValue: 10,
  backgroundColor: Colors.PRIMARY,
} satisfies InfoCardProps;

export const InscriptionValidee = Template.bind({});
InscriptionValidee.args = {
  label: "Inscription validées",
  icon: Icons.CHECKMARK,
  labelValue: 25,
  backgroundColor: Colors.SECONDARY,
};

export const InscriptionRefusee = Template.bind({});
InscriptionRefusee.args = {
  label: "Inscription refusées",
  icon: Icons.CANCEL,
  labelValue: 5,
  backgroundColor: Colors.TERTIARY,
} satisfies InfoCardProps;
