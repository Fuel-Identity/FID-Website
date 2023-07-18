<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { appear_left, appear_right, fade_in } from "../anime";
import Header from "./Header.vue";
import { useStore } from 'vuex'

const title = ref()
const t1 = ref();
const t2 = ref();
const t3 = ref();
const button1 = ref();
const button2 = ref();
const top = ref()

const animations = [
  fade_in(title, 200),
  appear_right(t1, 400),
  appear_left(t2, 800),
  appear_right(t3, 1200),  
  fade_in(button1, 1300),
  fade_in(button2, 1300),

];

const { state } = useStore()
const on_scroll = () => {
  state.scroll = Math.ceil((window.scrollY / window.innerHeight) * 100)
}

onMounted(() => {
  window.addEventListener('scroll', on_scroll)
  animations.forEach((animation) => animation.mount());
});

onBeforeUnmount(() => animations.forEach((animation) => animation.unmount()));

</script>

<template>
  <div ref="top" class="h-screen w-full bg-fuelid bg-cover bg-fixed">
    <Header></Header>
    <section>
      <div class="h-full w-full flex justify-start pl-40 items-center pt-40">
        <div ref="title" class="font-EudoxusM text-8xl text-neutral-100 text-start">
          <h1 ref="t1">Your trusted</h1>
          <h1 ref="t2" class="">on-chain</h1>
          <h1 ref="t3" class="">identity solution.</h1>
        </div>
      </div>
      <div class="h-full w-full flex justify-start items-center pl-40 mt-20 space-x-10">
        <a ref="button1" class="text-emerald-700 border border-emerald-700 hover:text-emerald-800 hover:border-emerald-800 font-EudoxusM bg-neutral-900 p-2 px-5 rounded-lg transition duration-300 hover:ease-in" href="">Fuel Identity</a>
        <a ref="button2" class="text-white font-EudoxusM border border-white p-2 px-5 rounded-lg hover:bg-neutral-900 hover:border-emerald-700 hover:text-emerald-700 transition duration-300 hover:ease-in" href="">Explore</a>
      </div>

    </section>
    <footer></footer>
  </div>
</template>
