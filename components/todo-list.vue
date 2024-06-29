<template>
  <div id="app">
    <h1 class="title">
      ToDo
    </h1>
    <input
      v-model="input"
      type="text"
    >
    <button @click="add">
      add
    </button>
    <li
      v-for="todo in todos"
      :key="todo"
    >
      {{ todo }}
    </li>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const input = ref<string>('')
const todos = ref<string[]>([])

const add = () => {
  todos.value.push(input.value)
}
</script>
