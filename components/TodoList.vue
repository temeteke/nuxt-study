<script setup lang="ts">
import { ref } from 'vue'

interface Todo {
  title: string
  date: Date
}

const input = ref<string>('')
const todos = ref<Todo[]>([])

const add = () => {
  todos.value.push({ title: input.value, date: new Date() })
}

const remove = (index: number) => {
  todos.value.splice(index, 1)
}
</script>

<template>
  <div>
    <div class="flex mb-1">
      <UInput
        v-model="input"
        type="text"
        class="flex-auto"
      />
      <UButton
        class="flex-none"
        @click="add"
      >
        add
      </UButton>
    </div>
    <ul class="flex flex-col gap-1">
      <li
        v-for="(todo, index) in todos"
        :key="todo.date.getTime()"
      >
        <TodoListItem
          :title="todo.title"
          :date="todo.date"
          @remove="remove(index)"
        />
      </li>
    </ul>
  </div>
</template>
