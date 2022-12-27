<template>
  <div class="card bg-white border border-neutral-200 max-w-[400px]">
    <h2 class="font-bold tracking-wider text-center text-xs uppercase p-4 leading-none">{{ title }}</h2>
    <hr />

    <div class="flex items-center justify-around gap-x-4 px-4 py-8">
      <img :src="'/src/assets/icons/' + image" class="w-28 h-28" alt="icon" />
      <div class="flex flex-col justify-center items-start">
        <div class="flex flex-col mb-2">
          <span class="font-bold text-primary leading-none text-xl">{{ firstLabelNumber }}</span>
          <span class="block text-gray-500 text-sm break-words max-w-[200px]">{{ firstLabelText }}</span>
        </div>
        <div class="flex flex-col mt-2">
          <span class="font-bold text-tertiary leading-none text-xl">{{ secondLabelNumber }}</span>
          <span class="block text-gray-500 text-sm break-words max-w-[200px]">{{ secondLabelText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props =
  defineProps<{
    title: string;
    image: string;
    firstLabelNumber: number;
    secondLabelNumber: number;
    firstLabelText: string;
    secondLabelText: string;
  }>();

const title = computed(() => props.title);
const image = computed(() => props.image + ".svg");
const firstLabelNumber = computed(() => props.firstLabelNumber);
const secondLabelNumber = computed(() => props.secondLabelNumber);
const firstLabelText = computed(() => props.firstLabelText);
const secondLabelText = computed(() => props.secondLabelText);
</script>

<style>
.card {
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.16);
}
</style>
