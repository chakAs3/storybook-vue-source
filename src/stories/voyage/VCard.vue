<template>
  <div class="voyage-card bg-white">
    <div class="relative">
      <img :src="headerImage" alt="" class="voyage-card--img" />
      <div class="voyage-card--logo rounded-full">
        <img :src="logo" alt="" class="mx-auto" />
      </div>
    </div>

    <div class="text-center mt-16 min-h-[40px]">
      <p class="text-xs text-center uppercase">{{ date }}</p>
      <h2 class="text-xl uppercase text-primary font-bold text-center tracking-wider break-words">{{ destination }}</h2>
    </div>

    <div class="grid grid-cols-3 divide-x mt-6 pb-4">
      <div class="flex flex-col items-center justify-center space-y-1">
        <span class="text-xs">INSCRITS</span>
        <span class="text-3xl text-tertiary font-bold">{{ totalInscrits }}</span>
      </div>
      <div class="flex flex-col items-center justify-center space-y-1">
        <span class="text-xs">PASSEPORTS</span>
        <span class="text-3xl text-secondary font-bold">{{ totalPassports }}</span>
      </div>
      <div class="flex flex-col items-center justify-center space-y-1">
        <span class="text-xs">CONNEXIONS</span>
        <span class="text-3xl text-primary font-bold">{{ totalConnections }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

const props = defineProps({
  headerImage: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  totalInscrits: {
    type: Number,
    required: true,
  },
  totalPassports: {
    type: Number,
    required: true,
  },
  totalConnections: {
    type: Number,
    required: true,
  },
});

const headerImage = computed(() => props.headerImage);
const logo = computed(() => props.logo);

const date = computed(() => props.date);
const destination = computed(() => props.destination);

const totalInscrits = computed(() => props.totalInscrits);
const totalPassports = computed(() => props.totalPassports);
const totalConnections = computed(() => props.totalConnections);
</script>

<style scoped lang="css">
.voyage-card {
  min-height: 378px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0px 0px 5px #00000029;
  border-radius: 10px;
}
.voyage-card .voyage-card--img {
  height: 169px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.voyage-card .voyage-card--logo {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 90px;
  background-color: white;
  box-shadow: 0px 0px 6px #00000029;
  z-index: 2;
}
.voyage-card .voyage-card--logo img {
  height: 50px;
  width: 50px;
  margin-top: 20px;
}

</style>
