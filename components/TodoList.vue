<script setup lang="ts">
import { ref } from 'vue'

interface Todo {
  title: string
  completed: boolean
}

const input = ref<string>('')
const todos = ref<Todo[]>([])

const add = () => {
  todos.value.push({ title: input.value, completed: false })
}

const remove = (index: number) => {
  todos.value.splice(index, 1)
}
const changeCompleted = (index: number, value: boolean) => {
  todos.value[index].completed = value
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
        <TodoListItem
          :title="todo.title"
          :completed="todo.completed"
          @remove="remove(index)"
          @change-completed="changeCompleted(index, $event)"
        />
      </li>
    </ul>
  </div>
</template>
