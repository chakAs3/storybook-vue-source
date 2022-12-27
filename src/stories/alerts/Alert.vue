<template>
  <div class="relative flex items-center gap-x-4 px-4 py-3.5 max-w-sm" :class="classes">
    <button @click="close" class="absolute top-2 right-3 w-3 h-4">
      <img src="/src/assets/icons/error.svg" />
    </button>
    <div class="flex flex-none w-8 h-8">
      <img :src="'/src/assets/icons/' + icon" alt="icon" />
    </div>
    <div class="flex flex-col">
      <span class="text-white uppercase text-sm font-bold mb-2">{{ title }}</span>
      <span class="text-white text-xs break-words">{{ message }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineComponent } from "vue";
import { AlertType } from "./AlertTypes";

const props =
  defineProps<{
    title: string;
    message: string;
    type: AlertType;
  }>();
 

const emits = defineEmits(["close"]);
const close = () => {
  emits("close");
};

const title = computed(() => props.title);
const message = computed(() => props.message);
const type = computed(() => props.type);

const classes = computed(() => {
  switch (type.value) {
    case AlertType.Success:
      return "bg-alert-success";
    case AlertType.Error:
      return "bg-alert-error";
    case AlertType.Warning:
      return "bg-alert-warning";
  }
});

const icon = computed(() => {
  switch (type.value) {
    case AlertType.Success:
      return "success.svg";
    case AlertType.Error:
      return "error.svg";
    case AlertType.Warning:
      return "warning.svg";
  }
});


</script>

<style scoped></style>
