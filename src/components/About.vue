<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { fade_up } from "../anime";

const box1 = ref();
const box2 = ref();
const box3 = ref();

const animations = [
  fade_up(box2, 600),
  fade_up(box1, 700),
  fade_up(box3, 800),
];

onMounted(() => {
  animations.forEach((animation) => animation.mount());
});
onBeforeUnmount(() => animations.forEach((animation) => animation.unmount()));
</script>


<template>
  <div class="bg-neutral-900 h-screen w-full flex justify-center items-center">
    <div class="w-full flex space-x-8 justify-center items-center h-min-[35vh] text-slate-200 absolute">
      <div ref="box1"
        class="h-full bg-neutral-900 rounded-xl w-[30%] p-5 space-y-5  flex flex-col justify-center items-left bd-black">
        <h2 class="font-EudoxusB text-3xl text-gradient bd-gradient-b w-fit">
          Fuel Identity's Objectives
        </h2>
        <div class="font-EudoxusL text-lg space-y-3 text-left">
          <p>
            Our goal is to create a more inclusive and transparent blockchain
            ecosystem where every user has a voice and can build their
            reputation on the network.
          </p>
          <p>
            We believe that by incentivizing positive
            behavior, we can create a stronger and more reliable community that
            benefits everyone involved.
          </p>
        </div>
      </div>
      <div ref="box2"
        class="h-full mb-10 bg-neutral-900 rounded-xl w-[30%] p-5 space-y-5 flex flex-col justify-center items-left bd-gradient-t bd-black">
        <h2 class="font-EudoxusB text-3xl text-gradient bd-gradient-b w-fit">
          Introducing Fuel Identity
        </h2>
        <div class="font-EudoxusL text-lg space-y-3 text-left">
          <p>
            The revolutionary indexer on the Fuel blockchain that brings
            identity to the forefront. With our unique ranking system, users who
            make transactions on the blockchain are rewarded with points that
            increase the rank of their identity.
          </p>
          <p>
            This not only provides a sense of accomplishment but also gives
            users access to exclusive benefits such as reduced transaction fees
            and early access to new features.
          </p>
        </div>
      </div>
      <div ref="box3"
        class="h-full bg-neutral-900 rounded-xl w-[30%] p-5 space-y-5 flex flex-col justify-center items-left bd-black">
        <h2 class="font-EudoxusB text-3xl text-gradient bd-gradient-b w-fit">
          We are using Sway !
        </h2>
        <div class="font-EudoxusL text-lg space-y-3 text-left">
          <p>
            With Sway, you can write smart contracts that execute on the
            blockchain, defining the rules and logic for how transactions are
            processed.
          </p>
          <p> The indexer will be used
            to track users transactions and calculate their identity rank based
            on the number and type of transactions they make.</p>
        </div>
      </div>
    </div>

  </div>
</template>