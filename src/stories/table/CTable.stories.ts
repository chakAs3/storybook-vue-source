import { Story } from "@storybook/vue3";
import CTable from "./CTable.vue";

export default {
  title: "Table/CTable",
  component: { CTable },
  argTypes: {
    dataSource: {},
  },
};

const Template: Story = (args: any) => ({
  components: { CTable },
  setup() {
    return { args };
  },
  template: '<c-table v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  dataSource: [
    {
      key: "1",
      client: "John",
      destination: "New York",
      departDate: new Date().toISOString(),
      returnDate: new Date().toISOString(),
      participants: 2,
      state: "En cours",
      parameterState: "En cours",
    },
    {
      key: "2",
      client: "Bob Doe",
      destination: "New York",
      departDate: new Date().toISOString(),
      returnDate: new Date().toISOString(),
      participants: 2,
      state: "En cours",
      parameterState: "En cours",
    },
    {
      key: "3",
      client: "Mike",
      destination: "New York",
      departDate: new Date().toISOString(),
      returnDate: new Date().toISOString(),
      participants: 2,
      state: "En cours",
      parameterState: "En cours",
    },
  ],
  columns: [
    {
      title: "Client",
      dataIndex: "client",
      key: "client",
    },
    {
      title: "Destination",
      dataIndex: "destination",
      key: "destination",
    },
    {
      title: "Date de départ",
      dataIndex: "departDate",
      key: "departDate",
    },
    {
      title: "Date de retour",
      dataIndex: "returnDate",
      key: "returnDate",
    },
    {
      title: "Participants",
      dataIndex: "participants",
      key: "participants",
    },
    {
      title: "Etat",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Etat des paramètres",
      dataIndex: "parameterState",
      key: "parameterState",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
    },
  ],
};
