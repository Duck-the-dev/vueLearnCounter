<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <main>
    <h1
      class="bg-transparent bg-gradient-to-r from-pink-900 to-purple-500 bg-clip-text text-transparent shadow-purple-400 drop-shadow-md duration-200 hover:shadow-xl hover:drop-shadow-2xl"
    ></h1>

    <div
      class="count card mx-auto mt-5 mb-5 border-2 bg-gray-700 text-center text-xl font-bold shadow-lg drop-shadow-2xl"
    >
      {{ count }}
    </div>
    <div class="container">
      <button
        id="plus"
        class="drawer-button btn mx-5 mb-5 mt-5 h-1/4 w-1/4 text-center text-xl font-bold shadow-lg drop-shadow-2xl focus:outline-none"
        type="button"
        @click="count++"
      >
        +
      </button>
      <button
        id="minus"
        class="drawer-button btn mx-5 mb-5 mt-5 h-1/4 w-1/4 text-center text-xl font-bold shadow-lg drop-shadow-2xl focus:outline-none"
        type="button"
        @click="count--"
      >
        -
      </button>
    </div>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
        >create-vue</a
      >, the official Vue + Vite starter
    </p>
    <p>
      Install
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </main>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
