<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { fade_in } from "../anime";
import logo from "../assets/image.png";

const header = ref();

const animations = [fade_in(header, 100)];

onMounted(() => {
  animations.forEach((animation) => animation.mount());
});
onBeforeUnmount(() => animations.forEach((animation) => animation.unmount()));
</script>

<template>
  <header
  ref="header"
    class="w-full font-mpro h-24 bg-neutral-900 flex justify-end items-center"
  >
    <img :src="logo" alt="" class="absolute left-10 w-10" />
    <h1 class="absolute left-28 text-xl">Fuel Identity</h1>
    <nav class="w-[30%] flex justify-evenly p-5 text-xl">
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Roadmap</a>
    </nav>
  </header>
</template>
