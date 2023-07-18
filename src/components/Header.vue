<script setup>
import { useRouter } from 'vue-router';
import logo from "../assets/Fuel_Logo_ID.png";
import { useStore } from 'vuex'
import { watch, ref, onMounted } from 'vue';

const header = ref()
const router = useRouter();
function go(route) { router.push({ path: route }) }

const { state } = useStore()

const togglebg = (toggle, el) => {
  if(toggle) el.classList.add('bg-neutral-900')
  else el.classList.remove('bg-neutral-900')
}

const setGreen = (toggle, el) => {
  if(toggle) el.classList.add('green')
  else el.classList.remove('green')
}

onMounted(() => {
  watch(state, (n, o) => {
    const element = document.getElementById("header");
    const { scroll } = n
    if(scroll <= 3) togglebg(false, element)
    else if(scroll >= 90 && scroll < 190) setGreen(true, element)
    else if(scroll >= 190) {
      setGreen(false, element)
      togglebg(false, element)

    }
    else {
      setGreen(false, element)
      togglebg(true, element)
    }
})
})


</script>

<template>
  <header
  id="header"
  ref="header"
    class="fixed top-0 z-50 w-full font-mpro h-24 flex justify-end items-center text-white transition duration-700 hover:ease-in"
  >
    <img :src="logo" alt="" class="absolute left-10 w-10" />
    <h1 class="absolute left-28 text-xl">Fuel Identity</h1>
    <nav class="w-[30%] flex justify-evenly p-5 text-xl absolute">
      <a href="">Home</a>
      <a href="">About</a>
      <a @click="go('/app')">App</a>
    </nav>
  </header>
</template>
