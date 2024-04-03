<script setup>
import { useCounterStore } from "root/counter-store";

const store = useCounterStore();

// import { ref } from "vue";

// const count = ref(0);

// function decrement() {
//   if (count.value == 0) {
//     return;
//   }

//   count.value -= 1;
// }

// function increment() {
//   count.value += 1;
// }
</script>
<template>
  <h3>This counter is from the remote</h3>
  <div class="counter-wrapper">
    <button :disabled="store.count === 0" @click="store.decrement">-</button>
    {{ store.count }}
    <button @click="store.increment">+</button>
  </div>
</template>
<style scoped>
.counter-wrapper {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
</style>
