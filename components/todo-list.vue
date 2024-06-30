<script setup lang="ts">
import { ref } from 'vue'

const input = ref<string>('')
const todos = ref<string[]>([])

const add = () => {
  todos.value.push(input.value)
}
</script>

<template>
  <UInput
    v-model="input"
    type="text"
  />
  <UButton @click="add">
    add
  </UButton>
  <li
    v-for="todo in todos"
    :key="todo"
  >
    {{ todo }}
  </li>
</template>
