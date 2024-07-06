<script setup lang="ts">
import { ref } from 'vue'

const input = ref<string>('')
const todos = ref<string[]>([])

const add = () => {
  todos.value.push(input.value)
}
</script>

<template>
  <div>
    <div>
      <UInput
        v-model="input"
        type="text"
      />
      <UButton @click="add">
        add
      </UButton>
    </div>
    <ul>
      <li
        v-for="(todo, index) in todos"
        :key="index"
      >
        <TodoListItem>{{ todo }}</TodoListItem>
      </li>
    </ul>
  </div>
</template>
