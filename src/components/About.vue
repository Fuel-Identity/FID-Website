<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { fade_up } from "../anime";

const page = ref();

const animations = [
  fade_up(page, 100),
];

onMounted(() => {
  animations.forEach((animation) => animation.mount());
});
onBeforeUnmount(() => animations.forEach((animation) => animation.unmount()));
</script>


<template>
    <div ref="page" class="h-screen w-full bg-gradient-i hidden">

    </div>
</template>