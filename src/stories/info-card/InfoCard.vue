<template>
  <div class="info-card flex items-center p-6" :class="classes">
    <img :src="'/src/assets/icons/' + icon" class="w-11 h-11 mr-auto" />

    <div class="flex flex-col items-end">
      <span class="text-sm text-white/70 uppercase">{{ label }}</span>
      <span class="text-5xl text-white font-bold">{{ labelValue }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Colors } from "../../colors";
import { Icons } from "../../icons";

const props =
  defineProps<{
    icon: Icons;
    label: string;
    labelValue: number;
    backgroundColor: Colors;
  }>();

const classes = computed(() => ({
  "bg-primary": props.backgroundColor === "primary",
  "bg-secondary": props.backgroundColor === "secondary",
  "bg-tertiary": props.backgroundColor === "tertiary",
  "bg-quaternary": props.backgroundColor === "quaternary",
  "bg-quinary": props.backgroundColor === "quinary",
}));

const icon = computed(() => props.icon + ".svg");
const label = computed(() => props.label);
const labelValue = computed(() => props.labelValue);
</script>

<style scoped lang="css">
.info-card {
  max-width: 400px;
  border-radius: 10px;
}
</style>
