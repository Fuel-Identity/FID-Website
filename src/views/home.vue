<script setup>
import Home from '../components/Home.vue'
import About from '../components/About.vue';
import Art from '../components/art.vue';
</script>
<template>
    <div class="md:block sm:hidden w-full">
      <Home msg="Home" /> 
      <About/>
      <Art /> 
    </div>
</template>