<template>
  <Table :dataSource="tableDataSource" :columns="tableColumns">
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'actions'">
        <Button type="primary" size="small">
          <template #icon>
            <IconPencil />
          </template>
        </Button>
        <Button type="primary" size="small">
          <template #icon>
            <IconPaste />
          </template>
        </Button>
      </template>
    </template>
  </Table>
</template>

<script setup lang="ts">
import { Button, Table } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { CTableColumnsProps, CTableDataSourceProps } from "./CTableTypes";
import IconPencil from "../../assets/icons/IconPencil.vue";
import IconPaste from "../../assets/icons/IconPaste.vue";
import { computed } from "vue";

const props =
  defineProps<{
    dataSource: CTableDataSourceProps[];
    columns: CTableColumnsProps[];
  }>();

const tableDataSource = computed(() => props.dataSource);
const tableColumns = computed(() => props.columns);

const dataSource: CTableDataSourceProps[] = [
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
];

const columns: CTableColumnsProps[] = [
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
];
</script>

<style lang="css">
.ant-table-thead  tr  th {
  background-color: transparent;
  color: var(--color-primary);
}
</style>
