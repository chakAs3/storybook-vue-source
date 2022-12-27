<template>
  <button class="flex flex-col justify-between items-center h-24 w-full max-w-[233px] rounded-lg py-3" :style="style">
    <img :src="'/src/stories/button/icons/' + image" alt="image" class="h-10 w-10 mx-auto" />
    <label class="uppercase text-xs text-white" type="button">{{ label }}</label>
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const icons = ["edit", "add", "mic", "camera", "document"];

const props =
  defineProps<{
    image: string;
    label: string;
    backgroundColor: string;
  }>();

const style = computed(() => ({
  backgroundColor: `var(--color-${props.backgroundColor}`,
}));

const image = computed(() => props.image + ".svg");
const label = computed(() => props.label);
</script>
